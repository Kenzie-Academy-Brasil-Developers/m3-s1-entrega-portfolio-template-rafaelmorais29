import BunnerImg from "../../../assets/banner-img.png"
import {user} from "../../../data/user/"
import styles from "./styles.module.css";

export const BunnerSection = () => {

    return (
        <section className={styles.bunnerSection}>
            <div className={styles.bunnerContainer}>
                <h3 className={styles.user}>{user}</h3>               
                <h1 className="title1"> Bem vindo ao meu portfólio</h1>        
                <p className="title3"> Uma frase interessante sobre mim.</p>
                <button className="btnContato"> Saiba mais</button>
            </div>
            <div>
                <img src= {BunnerImg} alt="#" />
            </div>
        </section> 
    )
}    