import styles from "./styles.module.css";



export const Header = () => {
  return(
    <>    
    < header className={styles.header}>
      <div>
        <h3 className="titleHeader">Portfólio</h3>
      </div>
      <div className={styles.menu}>
        <h5>Sobre</h5>
        <h5>Stack</h5>
        <h5>Projetos</h5>
      </div>

      <button className="btnContato">
        Contato
      </button>
    </header>
    </>

  )
}
