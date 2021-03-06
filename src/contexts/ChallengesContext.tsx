import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookie from 'js-cookie';

import challegens from '../../challenges.json'
import { LavelUpModal } from '../components/LavelUpModal';

interface chalenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    lavelup: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLavelupModal: () => void;
    lavel: number;
    experienceToNextLavel: number;
    currentExperience: number;
    challegesCompleted: number;
    activeChallenge: chalenge;
}

interface ChallengesProviderProps {
    children: ReactNode;
    lavel: number,
    currentExperience: number,
    challegesCompleted: number;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
    const [lavel, setLavel] = useState(rest.lavel ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challegesCompleted, setChallegesCompleted] = useState(rest.challegesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLavelOpenModal, setIsLavelOpenModal] = useState(false);

    const experienceToNextLavel = Math.pow((lavel + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookie.set('lavel', String(lavel))
        Cookie.set('currentExperience', String(currentExperience))
        Cookie.set('challegesCompleted', String(challegesCompleted))

    }, [lavel, currentExperience, challegesCompleted])

    function lavelup() {
        setLavel(lavel + 1);
        setIsLavelOpenModal(true);
    }

    function closeLavelupModal() {
        setIsLavelOpenModal(false)
    }

    function startNewChallenge() {
        const randomChallengesIndex = Math.floor(Math.random() * challegens.length)
        const challenge = challegens[randomChallengesIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            new Notification('Novo desafioo 🎉', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLavel) {
            finalExperience = finalExperience - experienceToNextLavel;
            lavelup()
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallegesCompleted(challegesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider
            value={{
                lavel,
                lavelup,
                startNewChallenge,
                resetChallenge,
                currentExperience,
                challegesCompleted,
                activeChallenge,
                completeChallenge,
                experienceToNextLavel,
                closeLavelupModal
            }}>

            {children}
            {isLavelOpenModal && <LavelUpModal />}
        </ChallengesContext.Provider>

    )
}