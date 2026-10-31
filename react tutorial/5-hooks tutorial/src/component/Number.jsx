import React, { useEffect, useState } from 'react'

function Number() {
    let [count1, setcount1] = useState(0);
    let [count2, setcount2] = useState(0);


    // agr use effect me keval ek function pass ho to  o every render pr run hota hai;
    // ager function ke sath me ek epmty array lga do to o keval first render pr hi run hota hai;
    // age  dependency me kuchh e de to  first render pr aur dependency ke change hone pr run krta hai useEffect();
    useEffect(() => {
        console.log("helo world")
    }, [count2])

    return (
        <>

            <h1>{count1}</h1>
            <h1>{count2}</h1>
            <button onClick={()=>setcount1(++count1)}>count1</button>
            <button onClick={()=>setcount2(++count2)}>count2</button>
            {/* <button onClick={()=>setcount(++count)}>increse</button>
      <button onClick={()=>setcount(--count)}>decriment</button> */}
        </>
    )
}

export default Number
