import { memo } from "react";
import { useTranslation } from "react-i18next";

import styles from "ArticleDetailsPage.module.scss";

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");

    return <div>ArticleDetailsPage</div>;
};

export default memo(ArticleDetailsPage);
