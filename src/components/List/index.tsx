import Item from "./Item"
import style from "./List.module.scss"

const List = () => {
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    }, {
        tarefa: "JavaScript",
        tempo: "01:30:00"
    }, {
        tarefa: "typescript",
        tempo: "02:10:00"
    }, {
        tarefa: "NodeJs",
        tempo: "00:45:00"
    }]

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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