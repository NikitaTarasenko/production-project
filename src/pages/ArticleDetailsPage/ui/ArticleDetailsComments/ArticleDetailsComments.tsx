import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import cls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}
export const ArticleDetailsComments = memo((props : ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticleDetailsComments, {}, [className])}>
            <Text size={TextSize.L} className={cls.commentTitle} title={t('Comments')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </div>
    );
});
