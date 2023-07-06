import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <PageWrapper data-testid="AboutPage">
            {t('About page')}
        </PageWrapper>
    );
};

export default AboutPage;
