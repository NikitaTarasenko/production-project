import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';

const ForbiddenPage = () => {
    const { t } = useTranslation();
    return (
        <PageWrapper>
            {t('You dont have access to this page')}
        </PageWrapper>
    );
};

export default ForbiddenPage;
