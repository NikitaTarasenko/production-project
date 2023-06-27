import { ChangeEvent, memo, useMemo } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOptions{
    value: string;
    content: string;
}
interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value:string) => void;
  readOnly? : boolean;

}
export const Select = memo((props: SelectProps) => {
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
            onChange(event.target.value);
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
});
