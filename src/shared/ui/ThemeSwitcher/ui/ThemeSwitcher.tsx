/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Sun from '@/shared/assets/icons/sun.svg';
import Moon from '@/shared/assets/icons/moon.svg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <Moon width={30} fill="var(--inverted-secondary-color)" />
            ) : (
                <Sun width={30} fill="var(--inverted-secondary-color)" />
            )}
        </Button>
    );
});
