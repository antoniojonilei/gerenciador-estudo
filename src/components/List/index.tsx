import {useState} from 'react'
import Item from "./Item"
import style from "./List.module.scss"

const List = () => {
    // let tarefas = [{
    //     tarefa: "React",
    //     tempo: "02:00:00"
    // }, {
    //     tarefa: "JavaScript",
    //     tempo: "01:30:00"
    // }]

    const [tarefas, setTarefas] = useState([{
            tarefa: "React",
            tempo: "02:00:00"
        }, {
            tarefa: "JavaScript",
            tempo: "01:30:00"
        }])

    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {tarefa: "Estudo de Logica", tempo: "00:45"}])
            }}>Estudos do dia</h2>
            <ul>
                
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}   
                    />
                ))}  

            </ul>
        </aside>
    )
}

export default List