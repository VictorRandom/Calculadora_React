import React, {useState} from 'react';

function Result(props){

    return(
        <div>
            <input className="result" type="text" value={props.input}></input>
            <input className="result" type="text" value={props.result}></input>
        </div>
    )

}

export default Result;