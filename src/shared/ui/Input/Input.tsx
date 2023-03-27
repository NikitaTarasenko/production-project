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
        className, value, onChange, type, ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input type={type} value={value} onChange={onChangeHandler} />
        </div>
    );
});
