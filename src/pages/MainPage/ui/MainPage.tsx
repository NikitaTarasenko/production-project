/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {t('Main page')}

        </PageWrapper>
    );
};

export default MainPage;
