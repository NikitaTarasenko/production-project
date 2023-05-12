import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: ()=>void;
}
export const PageWrapper = memo((props : PageWrapperProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    return (
        <section ref={wrapperRef} className={classNames(cls.PageWrapper, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
