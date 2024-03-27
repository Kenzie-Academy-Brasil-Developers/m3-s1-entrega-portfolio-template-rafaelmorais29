import { technologies } from "../../../data/technologies";
import styles from "./TechList/styles.module.css"

export const TecnologiesCard = () => {
    return (
        <>
        <section className={styles.cardContainer} >
            <h1 className="title1">Tecnologias</h1>
            <div className={styles.cardSection}>
            {
                technologies.map((tech) => {
                    return(

                        
                        <li key={tech.name} className="techcard">
                            <img className="techImg" src={tech.img} />
                            <p className="techName" >{tech.name}</p>        
                        </li>
                        
                    )
                })

            }
            </div>
        </section>
      </>
    );
  };


