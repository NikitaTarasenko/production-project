import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly? : boolean;
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.USA, content: Country.USA },
    { value: Country.Europe, content: Country.Europe },

];

export const CountrySelect = memo(({
    className, value, onChange, readOnly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const mods: Modes = {
        [cls.readonly]: readOnly,
    };

    return (
        <ListBox
            className={classNames(cls.country, mods, [className])}
            onChange={onChangeHandler}
            value={value}
            label={t('Select country')}
            items={options}
            readonly={readOnly}
            direction="top right"
        />
        // <Select
        //     className={classNames('', mods, [className])}
        //     label={t('Select country')}
        //     options={options}
        //     value={value}
        //     onChange={onChangeHandler}
        //     readOnly={readOnly}
        // />
    );
});
