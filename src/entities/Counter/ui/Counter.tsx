import { Button } from "@/shared/ui/deprecated/Button";
import { useCounterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                increment
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDecrement}>
                decrement
            </Button>
        </div>
    );
};
