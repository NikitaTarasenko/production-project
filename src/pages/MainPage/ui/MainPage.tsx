import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [value, setValue] = useState('');
    const { t } = useTranslation();

    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Main page')}
            <Input placeholder="" type="text" value={value} onChange={onChange} />
        </div>
    );
};

export default MainPage;
