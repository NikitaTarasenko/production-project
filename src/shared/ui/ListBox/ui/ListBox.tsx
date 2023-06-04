import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import CaretRight from '../../../assets/icons/caretRight.svg';
import cls from './ListBox.module.scss';
import { DropDownDirection } from '../../../types/ui';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
 }

 interface ListBoxProps {
    items? : ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly? : boolean;
    direction?: DropDownDirection;
    label?: string;
 }

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export function ListBox({
    items, className, value, onChange, defaultValue, readonly, direction = 'bottom right', label,
}:ListBoxProps) {
    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && (
                <span
                    className={classNames('', { [cls.disabled]: readonly })}
                >
                    {`${label} >`}
                </span>
            )}

            <HListBox
                disabled={readonly}
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className])}
            >

                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={
                                    classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })
                                }
                                >
                                    {selected && <CaretRight />}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
