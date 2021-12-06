import React from 'react';
import './Calc.css';

function Calc(){

    return(
    <div className="container">
        <h1>Calculadora React</h1>
        <p>Resultado</p>
        <div>
            <table className="table">
                <tr>
                    <td><button></button>AC</td>
                    <td><button></button>ER</td>
                    <td><button></button>x</td>
                    <td><button></button>/</td>
                </tr>
                <tr>
                    <td><button></button>7</td>
                    <td><button></button>8</td>
                    <td><button></button>9</td>
                    <td><button></button>-</td>
                </tr>
                <tr>
                    <td><button></button>4</td>
                    <td><button></button>5</td>
                    <td><button></button>6</td>
                    <td><button></button>+</td>
                </tr>
                <tr>
                    <td><button></button>1</td>
                    <td><button></button>2</td>
                    <td><button></button>3</td>
                    <td><button></button>=</td>
                </tr>
                <tr>
                    <td><button></button>0</td>
                    <td><button></button>.</td>
                </tr>
            </table>

        </div>
    </div>)

}

export default Calc;