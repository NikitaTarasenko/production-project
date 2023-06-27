import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        if (isMobile) {
            setCollapsed(true);
        }
    }, []);
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <VStack role="navigation" gap="16" className={cls.links}>
                { SidebarItemList.map((item) => (
                    <SideBarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />

                ))}
            </VStack>

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
        </aside>
    );
});
