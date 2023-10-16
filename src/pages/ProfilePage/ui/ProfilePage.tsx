import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    profileReducer,
} from "../../../entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency/model/type/currency";

import styles from "./ProfilePage.module.scss";

interface IProfilePageProps {
    className?: string;
}

const resucers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: IProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback(
        (value?: string) => {
            console.log(value);
            dispatch(profileActions.updateProfile({ first: value || "" }));
        },
        [dispatch]
    );

    const onChangeLastName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value: number | string) => {
            const currentValue = String(value).replace(/\D/g, "").substr(0, 3);
            dispatch(profileActions.updateProfile({ age: Number(currentValue || 0) }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={resucers} removeAfterUnmount>
            <ProfilePageHeader />
            <ProfileCard
                formData={formData}
                isLoading={isLoading}
                error={error}
                readOnly={readOnly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
