import React, {useState} from 'react';
import './Calc.css';
import Buttons from './components/Buttons';
import Result from "./components/Result";

function Calc(){

    const [input, setInput] = useState("")
    const [result, setResult] = useState("");
    let history = [];

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
        setResult(eval(input).toString());
        hist();
        } 
        catch(e){
            setResult("ERROR");
        }
    };

    function hist(){
        history.push(result);
        console.log(history);
    }

    return(
    <div className="fundo">
        <div className="container">
            <h1>Calculadora React</h1>
            <Result input={input} result={result}></Result>
            <Buttons click={click} clear={clear} erase={erase} equal={equal} hist={hist}></Buttons>
        </div>
    </div>)

}

export default Calc;