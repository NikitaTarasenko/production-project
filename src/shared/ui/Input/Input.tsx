import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type: string;

}
export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type, placeholder, ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.InputWraper, {}, [className])}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )
            }
            <div className={cls.caretWrap}>
                <input className={cls.input} type={type} value={value} onChange={onChangeHandler} />
                <span className={cls.caret} />
            </div>
        </div>
    );
});
