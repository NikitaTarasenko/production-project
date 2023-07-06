import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { PageWrapper } from '@/widgets/PageWrapper';

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <PageWrapper className={classNames(cls.NotFoundPage, {}, [className])} data-testid="NotFoundPage">
            {t('NotFoundPage')}
        </PageWrapper>
    );
};
