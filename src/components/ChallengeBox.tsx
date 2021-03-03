import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const { activeChallenge,resetChallenge } = useContext(ChallengesContext)


    return (
        <div className={styles.ChallengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.ChallengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`/icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" onClick={resetChallenge} className={styles.ChallengeFailButton}>
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