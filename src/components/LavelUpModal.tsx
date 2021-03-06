import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LavelUpModal.module.css'
export function LavelUpModal() {
    const { lavel,closeLavelupModal } = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{lavel}</header>
                <strong>Parabens</strong>
                <p>Voce alcançou um novo level !</p>

                <button type="button"onClick={closeLavelupModal} >
                    <img src="./icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}