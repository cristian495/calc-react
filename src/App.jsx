/* eslint no-eval: 0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import './App.css'

// Generacion de la funcion del componente
const App  = () => {
    // Array Destructuring
    const [stack, setStack] = useState("")
    const items = words(stack, /[^-^+^*^/]+/g)
    // Lo que ejecuta la funcion
    const value = items.length > 0 ? items[items.length-1] : "0"
    return (<main className="react-calculator">
        <Result value = {value} />
        <div className="numbers">
            <Numbers onClickNumber = { number => setStack(`${stack}${number}`) }/>
        </div>
        <div className="functions">
        <Functions 
                onContentClear = { () => setStack("") }
                onDelete = { () => {
                    if(stack.length > 0){
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}/>
        </div>
        <div className="math-operations">
            <MathOperations 
                onClickOperation = { operation => setStack(`${stack}${operation}`) } 
                onClickEqual = { equal =>  setStack(eval(stack).toString()) }/>
        </div>
    </main>);
}
// Exportación
export default App;