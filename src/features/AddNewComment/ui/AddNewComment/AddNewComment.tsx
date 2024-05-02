import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import {
    DynamicModuleLoader,
    ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { AddNewCommentActions, AddNewCommentReducer } from "../../model/slice/addNewCommentSlice";
import {
    getAddNewCommentError,
    getAddNewCommentText,
} from "../../model/selectors/addNewCommentSelectors";

import styles from "./AddNewComment.module.scss";
import { HStack } from "@/shared/ui/Stack";

export interface IAddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers: ReducerList = {
    addNewComment: AddNewCommentReducer,
};

const AddNewComment = ({ className, onSendComment }: IAddNewCommentProps) => {
    const { t } = useTranslation("comment");
    const dispatch = useAppDispatch();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);

    const onChangeCommentText = useCallback(
        (value: string) => {
            dispatch(AddNewCommentActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        if (text) {
            onSendComment(text);
            onChangeCommentText("");
        }
    }, [onChangeCommentText, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <HStack max gap="8" className={classNames(styles.addNewComment, {}, [className])}>
                {error && <Text text={t("Произошла ошибка")} theme={TextTheme.ERROR} />}
                <Input
                    placeholder={t("Введите текст комментария")}
                    type="text"
                    className={styles.input}
                    onChange={onChangeCommentText}
                    value={text ?? ""}
                />
                <Button onClick={onSendHandler}>{t("Отправить")}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddNewComment;
