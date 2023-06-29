/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {t('Main page')}
            <RatingCard
                title="Did you like the article? "
                feedbackTitle="Leave feedback about it"
                hasFeedback
            />
        </PageWrapper>
    );
};

export default MainPage;
