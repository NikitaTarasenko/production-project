import {
    MutableRefObject,
    ReactNode,
    UIEvent,
    memo,
    useEffect,
    useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDIspatch/useAppDispatch';
import {
    getScrollPosSaveScrollByPath,
    scrollPosSaveActions,
} from '@/features/ScrollPosSave';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './PageWrapper.module.scss';
import { TestProps } from '@/shared/types/tests';

interface PageWrapperProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}
export const PageWrapper = memo((props: PageWrapperProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollPosSaveScrollByPath(state, pathname),
    );
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollPosSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);
    return (
        <main
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.PageWrapper, {}, [className])}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={cls.trigger} />
            ) : null}
        </main>
    );
});
