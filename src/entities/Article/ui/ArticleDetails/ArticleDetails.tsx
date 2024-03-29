import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';
import SeenIco from '@/shared/assets/icons/seen.svg';
import CalendarIco from '@/shared/assets/icons/calendar.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDIspatch/useAppDispatch';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '@/entities/Article/model/selectors/articleDetails';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { ArticleBlock } from '@/entities/Article/model/types/article';
import { ArticleBlockType } from '@/entities/Article/model/consts/consts';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Something went wrong with loading article')}
            />
        );
    } else {
        content = (
            <VStack data-testid="ArticleDetails.Info" max>
                <HStack gap="16" className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <HStack max>
                    <Text
                        className={cls.title}
                        align={TextAlign.LEFT}
                        title={article?.subtitle}
                        size={TextSize.L}
                    />
                </HStack>

                <HStack className={cls.articleInfo}>
                    <SeenIco />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack className={cls.articleInfo}>
                    <CalendarIco />
                    <Text text={article?.createdAt} />
                </HStack>
                <VStack max>{article?.blocks.map(renderBlock)}</VStack>
            </VStack>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
