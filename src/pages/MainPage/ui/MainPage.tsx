import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { HStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t("Главная страница")}
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
        </Page>
    );
};

export default MainPage;
