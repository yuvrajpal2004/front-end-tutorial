import React, { useState } from 'react'
import Button from './Button'

function AddTodo() {
 
      const addHandler=()=>{
        console.log(`trying to aad item`)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5 text-truncate" ><input type="text" placeholder='add todo here'  /></div>
                    <div className="col-3"><input type="date"/></div>
                    <div className="col-2">
                        <Button btnType="success" btnText="Add" handler={addHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
