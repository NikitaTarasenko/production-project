import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}
const ArticleEditPage = memo((props : ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    return (
        <PageWrapper className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Editing article with ID ') + id
                : t('Creating the new article')}
        </PageWrapper>
    );
});

export default ArticleEditPage;
