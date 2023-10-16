import { memo, useCallback } from "react";
import { Currency } from "../../model/type/currency";
import { Select } from "shared/ui/Select/Select";

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
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <Select
                options={options}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
            />
        );
    }
);
