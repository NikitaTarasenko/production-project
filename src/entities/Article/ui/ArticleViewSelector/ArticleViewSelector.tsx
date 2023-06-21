import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleView } from 'entities/Article/model/consts/consts';
import BigListIcon from 'shared/assets/icons/view_list.svg';
import SmallListIcon from 'shared/assets/icons/view_small.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: <SmallListIcon />,
    },
    {
        view: ArticleView.BIG,
        icon: <BigListIcon />,
    },
];
export const ArticleViewSelector = memo((props : ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    className={classNames(cls.btn, { [cls.notSelected]: viewType.view !== view })}
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    {viewType.icon}
                </Button>
            ))}
        </div>
    );
});
