import React,{useState} from 'react'
import './counter.css';
export const Counter = () => {
    const [number, setNumber] = useState(0);
    
    return (
        
        <div>
            <h1>Counter</h1>
            <div className="btn-group">
                <button className="btn btn-success" onClick={()=>setNumber(number+1)}>+1</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+2)}>+2</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+3)}>+3</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+4)}>+4</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+5)}>+5</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+6)}>+6</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+7)}>+7</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+8)}>+8</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+9)}>+9</button>
                <button className="btn btn-success" onClick={()=>setNumber(number+10)}>+10</button>
                <button className="btn btn-success" onClick={()=>setNumber(number-1)}>-1</button>
                <button className="btn btn-success" onClick={()=>setNumber(number-10)}>-10</button>
            </div>
            <div></div>
            <h1 className="number">{number}</h1>
            <button className="btn btn-danger reset-btn" onClick={()=>setNumber(0)}>Reset</button>
        </div>
    )
}
