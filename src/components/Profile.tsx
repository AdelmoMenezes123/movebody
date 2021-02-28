import styles from '../styles/components/Profile.module.css'
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/44556097?v=4" alt="Adelmo"/>
            <div>
                <strong>Adelmo Menezes</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                    Lavel 1
                </p>
            </div>
        </div>
    );
}