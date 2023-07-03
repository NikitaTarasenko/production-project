import { ChangeEvent, useMemo } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string>{
    value: T;
    content: string;
}
interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  value?: T;
  onChange?: (value:T) => void;
  readOnly? : boolean;

}
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, value, onChange, readOnly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (event : ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(event.target.value as T);
        }
    };
    const mods: Modes = {

    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {
                label
            && <span className={cls.label}>{`${label}>`}</span>
            }
            <select
                disabled={readOnly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
