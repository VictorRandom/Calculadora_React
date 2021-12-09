import React, {useState} from 'react';



function Buttons (props) {
    
    return (
        <div>
            <table className="buttons">
                <tr>
                    <td><button onClick={props.clear}>AC</button></td>
                    <td><button onClick={props.erase}>ER</button></td>
                    <td><button value="*" onClick={props.click}>x</button></td>
                    <td><button value="/" onClick={props.click}>/</button></td>
                </tr>
                <tr>
                    <td><button value="7" onClick={props.click}>7</button></td>
                    <td><button value="8" onClick={props.click}>8</button></td>
                    <td><button value="9" onClick={props.click}>9</button></td>
                    <td><button value="-" onClick={props.click}>-</button></td>
                </tr>
                <tr>
                    <td><button value="4" onClick={props.click}>4</button></td>
                    <td><button value="5" onClick={props.click}>5</button></td>
                    <td><button value="6" onClick={props.click}>6</button></td>
                    <td><button value="+" onClick={props.click}>+</button></td>
                </tr>
                <tr>
                    <td><button value="1" onClick={props.click}>1</button></td>
                    <td><button value="2" onClick={props.click}>2</button></td>
                    <td><button value="3" onClick={props.click}>3</button></td>
                    <td><button onClick={props.equal}>=</button></td>
                </tr>
                <tr>
                    <td><button value="0" onClick={props.click}>0</button></td>
                    <td><button value="." onClick={props.click}>.</button></td>
                </tr>
                <tr>
                    <td><button onclick={props.hist}>Histórico</button></td>
                </tr>
            </table>
        </div>
    )

}

export default Buttons;