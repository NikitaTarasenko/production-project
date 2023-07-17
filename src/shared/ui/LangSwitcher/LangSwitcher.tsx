/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Language from '@/shared/assets/icons/language.svg';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [t, i18n] = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            <Language width={30} fill="var(--inverted-secondary-color)" />
            {/* {t('Language')} */}
        </Button>
    );
});
