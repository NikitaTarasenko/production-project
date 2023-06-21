import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/consts/consts';

interface ArticlesTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;

}
export const ArticlesTypeTabs = memo((props : ArticlesTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.PSYCHOLOGY,
            content: t('PSYCHOLOGY'),
        },
        {
            value: ArticleType.PHILOSOPHY,
            content: t('PHILOSOPHY'),
        },
        {
            value: ArticleType.MEDITATION,
            content: t('MEDITATION'),
        },
        {
            value: ArticleType.BIOLOGY,
            content: t('BIOLOGY'),
        },
        {
            value: ArticleType.FILMS,
            content: t('FILMS'),
        },

    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
