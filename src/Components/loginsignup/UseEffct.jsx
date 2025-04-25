import React, { useEffect, useState } from 'react'

function UseEffct() {

    //Use useState React hook to create the count var and assigned the values to it 
    //initially the value is 0

    const [count,setCount] = useState(0);
    const [value,setValue] =  useState(0);

    useEffect(()=>{
        setValue(()=>{
            return count*2;
        });
},[count]);
  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={()=> {setCount(count+1)}}>button</button>  
        <h3>Value : {value}</h3>
    </div>
  )
}

export default UseEffct
