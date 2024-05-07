import { memo, useCallback } from "react";
import { Country } from "../../model/type/country";
import { Select } from "@/shared/ui/Select";
import { ListBox } from "@/shared/ui/Popups";
import { useTranslation } from "react-i18next";

interface CountryySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Usbekistan, content: Country.Usbekistan },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readOnly }: CountryySelectProps) => {
        const { t } = useTranslation("profile");

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange]
        );

        return (
            <ListBox
                value={value}
                items={options}
                onChange={onChangeHandler}
                defaultValue={t("Укажите страну")}
                readOnly={readOnly}
                direction="top right"
            />
        );
    }
);
