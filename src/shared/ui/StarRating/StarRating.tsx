import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import Star from '../../assets/icons/stars.svg';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number)=> void;
  size?: number;
  selectedStars?: number
}
export const StarRating = memo((props : StarRatingProps) => {
    const {
        className, onSelect, size = 40, selectedStars = 0,
    } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const stars = [1, 2, 3, 4, 5];

    const onHover = (starsCount:number) => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount:number) => () => {
        if (!isSelected || currentStarsCount > 0) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };
    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Star
                    key={`key${starNumber}`}
                    width={size}
                    height={size}
                    className={classNames(cls.star, {}, [currentStarsCount >= starNumber ? cls.hovered : cls.normal])}
                    onMouseLeave={onLeave}
                    onMouseEnter={() => onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
