import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox() {
    const hasActiveChallege = true;

    return (
        <div className={styles.ChallengeBoxContainer}>
            {hasActiveChallege ? (
                <div className={styles.ChallengeBoxActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="/icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos!</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.ChallengeFailButton}>
                            Falhei
                        </button>

                        <button type="button" className={styles.ChallengeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            )
                : (
                    <div className={styles.ChallengeBoxNotActive}>
                        <strong>Finalizae um ciclo para receber desafios</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="lavel up" />
                            Avance de lavel completando desafios
                        </p>
                    </div>
                )
            }
        </div >
    );
}