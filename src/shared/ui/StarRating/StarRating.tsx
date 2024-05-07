import { useState } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconStar } from "@/shared/assets";
import { Icon } from "../Icon/Icon";

import styles from "./StarRating.module.scss";

interface IStarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = ({
    className,
    onSelect,
    size = 30,
    selectedStars = 0,
}: IStarRatingProps) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(styles.starRating, {}, [className])}>
            {stars.map(starNumber => (
                <Icon
                    className={classNames(
                        styles.starIcon,
                        {
                            [styles.hovered]: currentStarsCount >= starNumber,
                            [styles.selected]: isSelected,
                        },
                        []
                    )}
                    Svg={IconStar}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
