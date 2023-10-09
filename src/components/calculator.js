import { useState } from "react";
import Button from "./Button";

const Calculator = () => {

    const [value, setValue]=useState(0);

    const handleMouseOver = (e) => {
        e.target.style.background = '#0c1c11';
    }
    const handleMouseOut = (e) => {
        e.target.style.background = '#1fe06d';
    }

    const handleClick=(e)=>{
        setValue(e.target.value);
    }


    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col p-3 rounded-md bg-slate-950">
                <div className="flex w-full bg-white h-16 rounded-md">
                    {value}
                </div>
                <div className="flex">
                    <Button text="7" bColor="#1fe06d" width="5rem" value="7" click={handleClick} mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="8" bColor="#1fe06d" width="5rem" value="8" click={handleClick} mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="9" bColor="#1fe06d" width="5rem" value="9" click={handleClick} mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="/" bColor="#fcba03" width="5rem" value="/" click={handleClick} mouseOver={(e) => { e.target.style.background = '#0c1c11' }} mouseOut={(e) => { e.target.style.background = '#fcba03' }} />
                </div>
                <div className="flex">
                    <Button text="4" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="5" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="6" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="X" bColor="#fcba03" width="5rem" mouseOver={(e) => { e.target.style.background = '#0c1c11' }} mouseOut={(e) => { e.target.style.background = '#fcba03' }} />
                </div>
                <div className="flex">
                    <Button text="1" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="2" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="3" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="+" bColor="#fcba03" width="5rem" mouseOver={(e) => { e.target.style.background = '#0c1c11' }} mouseOut={(e) => { e.target.style.background = '#fcba03' }} />
                </div>
                <div className="flex">
                    <Button text="." bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="0" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="=" bColor="#1fe06d" width="5rem" mouseOver={handleMouseOver} mouseOut={handleMouseOut} />
                    <Button text="-" bColor="#fcba03" width="5rem" mouseOver={(e) => { e.target.style.background = '#0c1c11' }} mouseOut={(e) => { e.target.style.background = '#fcba03' }} />
                </div>
                <div className="flex w-full justify-center">
                    <Button text="Clear" bColor="#fcba03" width="100%" value="" click={handleClick} mouseOver={(e) => { e.target.style.background = '#0c1c11' }} mouseOut={(e) => { e.target.style.background = '#fcba03' }} />
                </div>
            </div>
        </div>
    );
}

export default Calculator;