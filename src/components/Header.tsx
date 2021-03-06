import styles from '../styles/components/Header.module.css'
export function Header() {
    return (
        <div className={styles.headerContainer}>
            <img src="logo-full.svg" alt="logo"/>
        </div>
    );
}