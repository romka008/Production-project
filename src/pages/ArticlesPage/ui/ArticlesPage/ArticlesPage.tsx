import { memo } from "react";
import { useTranslation } from "react-i18next";

import styles from "./ArticlesPage.module.scss";

const ArticlesPage = () => {
    const { t } = useTranslation("article");

    return <div>ArticlesPage</div>;
};

export default memo(ArticlesPage);
