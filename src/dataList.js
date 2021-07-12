import React from 'react'

function dataList(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item" >
            
         
            {/*{console.log(props.target[0].value)}*/}
          

            <ul style={{ width: '100%' }}>
                {props.target.map(person => (
                    
                     
                    <div className="content-box">
                         <input
                            type="checkbox"
                            checked={person.check}
                            onChange={() => props.handleChange(person.id)}
                           
                                
                            />
                        <div style={{ width: '50%', wordWrap: 'break-word', display: 'inline - block'}}>

                            <p style={person.check ? completedStyle : null} key={person.id}>{person.value}</p>
                      </div>
                        
                        <button className="delete" 
                            onClick={() => props.handleDelete(person.id)}
                            
                        >Delete
                        </button>
                           
                        
                    </div>
                    
                ))}
                
            </ul>
            <br>
            </br>
           
        </div>
            
        
        
        )
    
}

export default dataList