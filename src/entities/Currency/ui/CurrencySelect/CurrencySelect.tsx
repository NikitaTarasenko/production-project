import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.UAH, content: Currency.UAH },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
        const { t } = useTranslation('');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        const mods: Modes = {
            [cls.readonly]: readOnly,
        };
        return (
            <ListBox
                className={classNames(cls.currency, mods, [className])}
                onChange={onChangeHandler}
                value={value}
                label={t('Select currency')}
                items={options}
                readonly={readOnly}
                direction="top right"
            />
        );
    },
);
