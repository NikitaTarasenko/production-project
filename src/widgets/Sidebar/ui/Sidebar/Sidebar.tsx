import { memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    // const itemList = useMemo(
    //     () => (

    //         SidebarItemList.map((item) => (
    //             <SideBarItem
    //                 item={item}
    //                 collapsed={collapsed}
    //                 key={item.path}
    //             />

    //         ))
    //     ),
    //     [collapsed],
    // );
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <div className={cls.links}>
                { SidebarItemList.map((item) => (
                    <SideBarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />

                ))}
            </div>

            <Button
                className={cls.collapsedBtn}
                data-testid="sidebarToggle"
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={SizeButton.XL}

            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.theme} />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
});
