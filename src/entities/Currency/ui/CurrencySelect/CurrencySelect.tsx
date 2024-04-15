import { memo, useCallback } from "react";
import { Currency } from "../../model/type/currency";
import { Select } from "shared/ui/Select/Select";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { useTranslation } from "react-i18next";

interface ICurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readOnly }: ICurrencySelectProps) => {
        const { t } = useTranslation("profile");
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <ListBox
                value={value}
                items={options}
                onChange={onChangeHandler}
                defaultValue={t("Укажите валюту")}
                readOnly={readOnly}
                direction="top"
            />
        );
    }
);
