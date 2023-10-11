import { useTranslation } from "react-i18next";

import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "../../../entities/Profile";

import styles from "./ProfilePage.module.scss";

interface IProfilePageProps {
    className?: string;
}

const resucers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: IProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={resucers} removeAfterUnmount>
            <div>{t("Profile Page")}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
