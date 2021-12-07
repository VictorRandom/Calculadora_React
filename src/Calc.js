import React, {useState} from 'react';
import './Calc.css';
import Result from "./components/Result";

function Calc(){

    const [input, setInput] = useState("")
    const [result, setResult] = useState("");

    function click(e){
        setInput(input.concat(e.target.value));
        console.log(e.target.value);
    };

    function clear(){
        setInput("");
        setResult("");
    };

    function erase(){
        setInput(input.substring(0, input.length - 1));
    };

    function equal(){
        try{
        setResult(eval(input).toString())
        } 
        catch(e){
            setResult("ERROR");
        }
    };

    return(
        <div className="fundo">
    <div className="container">
        <h1>Calculadora React</h1>
        <Result input={input} result={result}></Result>
        <div>
            <table className="buttons">
                <tr>
                    <td><button onClick={clear}>AC</button></td>
                    <td><button onClick={erase}>ER</button></td>
                    <td><button value="*" onClick={click}>x</button></td>
                    <td><button value="/" onClick={click}>/</button></td>
                </tr>
                <tr>
                    <td><button value="7" onClick={click}>7</button></td>
                    <td><button value="8" onClick={click}>8</button></td>
                    <td><button value="9" onClick={click}>9</button></td>
                    <td><button value="-" onClick={click}>-</button></td>
                </tr>
                <tr>
                    <td><button value="4" onClick={click}>4</button></td>
                    <td><button value="5" onClick={click}>5</button></td>
                    <td><button value="6" onClick={click}>6</button></td>
                    <td><button value="+" onClick={click}>+</button></td>
                </tr>
                <tr>
                    <td><button value="1" onClick={click}>1</button></td>
                    <td><button value="2" onClick={click}>2</button></td>
                    <td><button value="3" onClick={click}>3</button></td>
                    <td><button onClick={equal}>=</button></td>
                </tr>
                <tr>
                    <td><button value="0" onClick={click}>0</button></td>
                    <td><button value="." onClick={click}>.</button></td>
                </tr>
            </table>

        </div>
    </div>
    </div>)

}

export default Calc;