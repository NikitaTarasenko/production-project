/* eslint-disable i18next/no-literal-string */
import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import AvatarIco from '../../assets/icons/avatar.svg';
import { Skeleton } from '../Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}
export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <AvatarIco />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
