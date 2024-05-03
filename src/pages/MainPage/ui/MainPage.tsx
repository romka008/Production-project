import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/shared/ui/Input/Input";
import { ListBox } from "@/shared/ui/Popups/ui/ListBox/ListBox";
import { HStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page/Page";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Rating } from "@/entities/RatingCard";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
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
