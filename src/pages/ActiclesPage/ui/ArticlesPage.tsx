import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ActiclesPageProps {
  className?: string;
}
const ArticlesPage = ({ className }: ActiclesPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ActiclesPage, {}, [className])}>
            adasd
        </div>
    );
};

export default memo(ArticlesPage);
