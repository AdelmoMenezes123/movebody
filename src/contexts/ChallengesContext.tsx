import { createContext, ReactNode, useState } from 'react';
import challegens from '../../challenges.json'

interface chalenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    lavelup: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    lavel: number;
    experienceToNextLavel:number;
    currentExperience: number;
    challegesCompleted: number;
    activeChallenge: chalenge;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [lavel, setLavel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challegesCompleted, setChallegesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLavel = Math.pow((lavel + 1) * 4, 2)

    function lavelup() {
        setLavel(lavel + 1);
    }

    function startNewChallenge() {
        const randomChallengesIndex = Math.floor(Math.random() * challegens.length)
        const challenge = challegens[randomChallengesIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
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
                experienceToNextLavel
            }}>

            {children}
        </ChallengesContext.Provider>

    )
}