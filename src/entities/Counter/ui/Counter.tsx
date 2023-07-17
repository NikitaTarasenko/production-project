import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    // const counterValue = useSelector(getCounterValue);
    const counterValue = useCounterValue();
    const { decrement, add, increment } = useCounterActions();

    const handleInc = () => {
        // dispatch(counterActions.increment());
        increment();
    };
    const handleDec = () => {
        decrement();
        // dispatch(counterActions.decrement());
    };
    const handleAddFive = () => {
        // dispatch(counterActions.decrement());
        add(5);
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={handleInc}>
                +
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>
                -
            </Button>
            <Button onClick={handleAddFive}>+5</Button>
        </div>
    );
};
