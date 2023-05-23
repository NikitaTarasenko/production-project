import { classNames, Modes } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    PRIMARY_INVERTED = 'primary_inverted',
}
export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}
export enum TextSize {
    M = 'size_m',
    L = 'size_l',

}
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}
export const Text = memo(({
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,
}: TextProps) => {
    const mods : Modes = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            { text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
