import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

import styles from '../styles/components/ChallengeBox.module.css'
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

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
                        <button type="button" onClick={handleChallengeFailed} className={styles.ChallengeFailButton}>
                            Falhei
                        </button>

                        <button type="button" onClick={handleChallengeSucceeded} className={styles.ChallengeSucceededButton}>
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