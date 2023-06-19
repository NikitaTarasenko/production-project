import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';

const AdminPanelPage = () => {
    const { t } = useTranslation();
    return (
        <PageWrapper>
            {t('AdminPanelPage')}
        </PageWrapper>
    );
};

export default AdminPanelPage;
