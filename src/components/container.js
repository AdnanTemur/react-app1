// import '../styles/container.css'
import Button from './Button';
import { useState } from 'react';

const Container = () => {

    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(count + 1);
    }
    const changeCount2 = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <Button backColor="green" text="+" click={changeCount} />
            <Button backColor="red" text="-" click={changeCount2} />
            {/* <button onClick={changeCount}>Increment</button> */}
            <div>{count}</div>
        </div>
    );
}
export default Container;