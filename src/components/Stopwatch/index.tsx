import style from "./Stopwatch.module.scss"
import Button from "../Button"
import Clock from "./Clock"

const Stopwatch = () => {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}

export default Stopwatch