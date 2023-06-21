import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/consts/consts';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}
export const ArticleSortSelector = memo((props : ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation('');

    const orderOptions = useMemo<SelectOptions[]>(() => [
        {
            value: 'asc',
            content: t('by ascending'),
        },
        {
            value: 'desc',
            content: t('by descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    const onChangeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    const onChangeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                onChange={onChangeSortHandler}
                options={sortFieldOptions}
                label={t('Sort by')}
                value={sort}
            />
            <Select
                onChange={onChangeOrderHandler}
                options={orderOptions}
                label={t('by')}
                value={order}
                className={cls.order}
            />
        </div>
    );
});
