import React from "react"


function addItem(props) {
   

    return (
        <div className='add'>
            <center><h1>Todo List</h1></center>
            <input className="text" type="text" placeholder="Enter Task" name="addItem" onChange={props.updateInput}
                value={props.target.userInput} />
           
                <button className="clickme" onClick={() => props.addI()}>Click Me</button>
            
        </div>
        )
}

export default addItem