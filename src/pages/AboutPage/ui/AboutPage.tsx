/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './AboutPage.module.scss';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <PageWrapper data-testid="AboutPage">
            <VStack gap="32">
                <Text size={TextSize.L} title={t('About page')} />
                <VStack gap="8">
                    <Text text="Замість тисячі слів..." />
                    <AppLink
                        className={cls.link}
                        theme={AppLinkTheme.SECONDARY}
                        target="_blank"
                        to="https://github.com/NikitaTarasenko/production-project/blob/main/README.md"
                    >
                        ReadMe.md
                    </AppLink>
                </VStack>
            </VStack>
        </PageWrapper>
    );
};

export default AboutPage;
