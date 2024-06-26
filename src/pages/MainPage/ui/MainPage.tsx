import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/shared/ui/deprecated/Input";
import { ListBox } from "@/shared/ui/deprecated/Popups";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Page } from "@/widgets/Page";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Rating } from "@/entities/Rating";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            {t("Главная страница")}
            <StarRating size={30} />
            <div>5asdfasdfasd</div>
            <HStack>
                <div>5asdfasdfasd</div>

                <ListBox
                    defaultValue="Выберите значение"
                    onChange={onChange}
                    value={value}
                    items={[
                        {
                            value: "1",
                            content: "1",
                        },
                        {
                            value: "2",
                            content: "2",
                        },
                        {
                            value: "3",
                            content: "3",
                            disabled: true,
                        },
                        {
                            value: "4",
                            content: "4",
                        },
                    ]}
                />
            </HStack>
            <div>5asdfasdfasd</div>
            <div>5asdfasdfasd</div>
            <div>5asdfasdfasd</div>
            <div>5asdfasdfasd</div>
            <div>5asdfasdfasd</div>
            <Input value={value} onChange={onChange} />
            <Rating title="Как вам статья?" feedbackTitle="Оставьте отзыв о статье" hasFeedback />
        </Page>
    );
};

export default MainPage;
