import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/Stack';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Main page')}
            <HStack>
                <ListBox
                    defaultValue={t('Select option')}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '235', disabled: true },
                        { value: '3', content: '124' },
                    ]}
                />
            </HStack>
        </div>
    );
};

export default MainPage;
