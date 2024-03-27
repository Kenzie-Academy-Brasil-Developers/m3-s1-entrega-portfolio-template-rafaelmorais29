import styles from "./styles.module.css"


export const AboutMeSection = () => {

    return(
        <section className={styles.aboutMe}>
            <h1 className={styles.aboutTitle}>Sobre mim</h1>
            <p className={styles.aboutP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
        </section>
    )
}