import React from 'react'
import ReactDOM from 'react-dom/client'
import { Interpreter } from './Interpreter'
import code from './exampleCode'

const interpreter = new Interpreter();
interpreter.interpret(code);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>hello</h1>
  </React.StrictMode>,
)
