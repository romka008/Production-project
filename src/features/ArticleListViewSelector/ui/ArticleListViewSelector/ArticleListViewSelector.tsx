import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { ListIcon as ListIconDeprecated, TiledIcon as TiledIconDeprecated } from "@/shared/assets";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { Icon } from "@/shared/ui/redesigned/Icon";
import ListIcon from "@/shared/assets/icons/List.svg";
import TiledIcon from "@/shared/assets/icons/Tiled.svg";
import { Card } from "@/shared/ui/redesigned/Card";
import { ArticleView } from "@/entities/Article";

import styles from "./ArticleListViewSelector.module.scss";

interface IArticleListViewSelectorProps {
    onViewClick: (view: ArticleView) => void;
    className?: string;
    view?: ArticleView;
}

const viewType = [
    {
        id: 1,
        view: ArticleView.PLATE,
        icon: toggleFeatures({
            name: "isAppRedesigned",
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        id: 2,
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: "isAppRedesigned",
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

export const ArticleListViewSelector = memo(
    ({ onViewClick, className, view = ArticleView.PLATE }: IArticleListViewSelectorProps) => {
        const handleClickViewType = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={
                    <Card
                        className={classNames(styles.articleListViewSelectorRedesigned, {}, [
                            className,
                        ])}
                        border="round"
                    >
                        {viewType.map(viewType => (
                            <Icon
                                Svg={viewType.icon}
                                key={viewType.id}
                                className={classNames("", {
                                    [styles.notSelected]: view !== viewType.view,
                                })}
                                onClick={handleClickViewType(viewType.view)}
                                clickable
                            />
                        ))}
                    </Card>
                }
                off={
                    <div className={classNames(styles.articleListViewSelector, {}, [className])}>
                        {viewType.map(viewType => (
                            <ButtonDeprecated
                                key={viewType.id}
                                theme={ButtonTheme.CLEAR}
                                onClick={handleClickViewType(viewType.view)}
                            >
                                <IconDeprecated
                                    Svg={viewType.icon}
                                    width={24}
                                    height={24}
                                    className={classNames("", {
                                        [styles.selected]: view === viewType.view,
                                    })}
                                />
                            </ButtonDeprecated>
                        ))}
                    </div>
                }
            />
        );
    }
);
