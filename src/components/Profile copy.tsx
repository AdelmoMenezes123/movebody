import styles from '../styles/components/Profile.module.css'
import {ChallengesContext} from '../contexts/ChallengesContext'
import { useContext } from 'react';

export function Profile() {
const {lavel} = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/44556097?v=4" alt="Adelmo"/>
            <div>
                <strong>Adelmo Menezes</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                    Lavel {lavel}
                </p>
            </div>
        </div>
    );
}