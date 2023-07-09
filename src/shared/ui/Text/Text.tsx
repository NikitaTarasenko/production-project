import { memo } from 'react';
import { classNames, Modes } from '@/shared/lib/classNames/classNames';

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
    S = 'size_s',
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
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',

};

export const Text = memo(({
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,
    'data-testid': dataTestId = 'Text', ...otherProps
}: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    const mods : Modes = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])} {...otherProps}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            { text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={cls.text}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
