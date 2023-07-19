/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper data-testid="MainPage">
            <VStack gap="32">
                <Text
                    size={TextSize.L}
                    align={TextAlign.CENTER}
                    title={`${t('Welcome')}!`}
                />
                <VStack gap="8" className={cls.mainText}>
                    <Text text={t('if')} />
                    <HStack className={cls.mobileFlexWrap}>
                        <Text text={t('roless')} />
                        <Text
                            className={cls.spaceAtEnd}
                            theme={TextTheme.PRIMARY_INVERTED}
                            text="'admin',"
                        />
                        <Text
                            className={cls.spaceAtEnd}
                            text={` ${t('and p')}`}
                        />
                        <Text
                            theme={TextTheme.PRIMARY_INVERTED}
                            text="'123'."
                        />
                    </HStack>
                    <HStack className={cls.mobileFlexWrap}>
                        <Text className={cls.spaceAtEnd} text={t('or u')} />
                        <Text
                            className={cls.spaceAtEnd}
                            theme={TextTheme.PRIMARY_INVERTED}
                            text="'user',"
                        />
                        <Text className={cls.spaceAtEnd} text={t('and p')} />
                        <Text
                            theme={TextTheme.PRIMARY_INVERTED}
                            text="'123'."
                        />
                    </HStack>
                    <HStack className={cls.mobileFlexWrap}>
                        <Text
                            text={t('few types')}
                            className={cls.spaceAtEnd}
                        />
                        <Text
                            className={cls.spaceAtEnd}
                            theme={TextTheme.PRIMARY_INVERTED}
                            text=" 'admin',"
                        />
                        <Text text={`${t('few routes')}.`} />
                    </HStack>
                </VStack>
            </VStack>
        </PageWrapper>
    );
};

export default MainPage;
