import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLavel } = useContext(ChallengesContext);
    const porcentToNextLavel = Math.round(currentExperience * 100) / experienceToNextLavel
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${porcentToNextLavel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${porcentToNextLavel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLavel} xp</span>
        </header>
    );
}