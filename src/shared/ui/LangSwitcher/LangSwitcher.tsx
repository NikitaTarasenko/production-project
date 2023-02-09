import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
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

            {t('Language')}
        </Button>
    );
};
