import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import ListIcon from "@/widgets/assets/icons/list-24-24.svg";
import TiledIcon from "@/widgets/assets/icons/tiled-24-24.svg";
import { ArticleView } from "../../model/consts/articleConstst";

import styles from "./ArticleListViewSelector.module.scss";

interface IArticleListViewSelectorProps {
    onViewClick: (view: ArticleView) => void;
    className?: string;
    view?: ArticleView;
}

const viewType = [
    { id: 1, view: ArticleView.PLATE, icon: TiledIcon },
    { id: 2, view: ArticleView.LIST, icon: ListIcon },
];

export const ArticleListViewSelector = memo(
    ({ onViewClick, className, view = ArticleView.PLATE }: IArticleListViewSelectorProps) => {
        const handleClickViewType = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <div className={classNames(styles.articleList, {}, [className])}>
                {viewType.map(viewType => (
                    <Button
                        key={viewType.id}
                        theme={ButtonTheme.CLEAR}
                        onClick={handleClickViewType(viewType.view)}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames("", {
                                [styles.selected]: view === viewType.view,
                            })}
                        />
                    </Button>
                ))}
            </div>
        );
    }
);
