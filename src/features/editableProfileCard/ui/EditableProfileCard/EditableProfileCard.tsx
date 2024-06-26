import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextTheme } from "@/shared/ui/deprecated/Text";
import { useInitialEffect } from "@/shared/lib/hooks/UseInitialEffect/UseInitialEffect";
import {
    DynamicModuleLoader,
    ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { ProfileCard } from "@/entities/Profile";
import { getProfileFormData } from "../../model/selectors/getProfileFormData/getProfileFormData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { ValidateProfileError } from "../../model/consts/consts";

import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

interface IEditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = memo((props: IEditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера при сохранении"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_CITY]: t("Город обязательн"),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback(
        (value?: string) => {
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
            dispatch(profileActions.updateProfile({ city: value || "" }));
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

    const reducers: ReducerList = {
        profile: profileReducer,
    };
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <EditableProfileCardHeader />
            {validateErrors?.length &&
                validateErrors.map(err => {
                    return (
                        <Text
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                            key={err}
                            data-testid="EditableProfileCard.Error"
                        />
                    );
                })}
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
});
