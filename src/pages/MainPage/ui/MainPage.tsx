/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper data-testid="MainPage">
            {t('Main page')}
            <Counter />
        </PageWrapper>
    );
};

export default MainPage;
