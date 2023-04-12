import React, {useState, useMemo} from 'react';

export default function App(){
const [tarefas, setTarefas] = useState([])
const [input, setInput] = useState([])
const [count, setCount] = useState(0)
const aleatorio = useMemo(()=> count * Math.random(), [count])

function handleAdd(){
  setTarefas([...tarefas, input])
}
// //tarefas [estudar]
// //tarefas [correr]
// tarefas: [[estudar],[correr]]
// //tarefas: [  estudar, correr]

//const valor = useMemo(()=>{return código}, [dependencia])

const totalTarefas = useMemo(()=> tarefas.length, [tarefas]) 
  return(
    <>
    <input type="text" onChange={(e)=> setInput(e.target.value)} />
    <button onClick={handleAdd} >Adicionar</button>
    {tarefas.map((tarefas)=>(
      <li>{tarefas}</li>
    ))}
    <h2>Você tem {totalTarefas} tarefas para fazer</h2>

    <h2>{count}</h2>
    <button onClick={()=>{ setCount(count +1)}}>+1</button>
    <h3>multiplicar count por um numero aleatório: {aleatorio}</h3>
    <h1>nova atualização</h1>
    </>
  )
}