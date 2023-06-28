import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import IconEye from '@/shared/assets/icons/seen.svg';
import { Card } from '@/shared/ui/Card/Card';

import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { ArticleBlockType, ArticleView } from '@/entities/Article/model/consts/consts';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './AtrticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface AtrticleListItemProps {
  className?: string;
  article : Article;
  view : ArticleView;
  target? : HTMLAttributeAnchorTarget
}
export const AtrticleListItem = memo((props : AtrticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation();
    // const navigate = useNavigate();

    // const onOpenArticle = useCallback(() => {
    //     navigate(RoutePath.article_details + article.id);
    // }, [article.id, navigate]);

    const typesArticle = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <div className={cls.views}>
            <Text text={String(article.views)} />
            <IconEye />
        </div>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.AtrticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={50} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {typesArticle}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button theme={ThemeButton.OUTLINE}>
                                {t('Read more')}
                            </Button>
                        </AppLink>

                        {views}
                    </div>

                </Card>
            </div>
        );
    }
    return (

        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.AtrticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                </div>
                <div className={cls.infoWrapper}>
                    {typesArticle}
                    {views}
                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
