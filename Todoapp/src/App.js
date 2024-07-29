// App.js File 
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Todo from './App/Todo';
import Quizzapp from "./App/Quizz";

function App(){
	const [button, setButton] = useState(false)

	return(
		<>
		  <button onClick={()=>setButton(!button)}>Toggle</button>
		   {button ? <Quizzapp/>: <Todo/>}
		</>
	)
}

export default App;
