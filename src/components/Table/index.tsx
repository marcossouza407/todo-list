import Clipboard from "../../images/Clipboard.svg"
import styles from "./Table.module.css";

export function Table () {
  return(
    <div className={styles.table}>
      <header>
        <div>
        <p>Tarefas criadas</p> 
        <strong>0</strong>
        </div>
        <div>
        <p>Conluidas</p>
        <strong>0</strong>
        </div>
      </header>
      <body>
      <img src={Clipboard} />
        <p>Você ainda não tem tarefas cadastradass</p>
        <span>Cria tarefas e organize seus itens a fazer</span> 
      </body>
    </div>
  );
}