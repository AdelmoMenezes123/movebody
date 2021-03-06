import { createContext, ReactNode, useEffect, useState } from 'react';
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
    completeChallenge: () => void;
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

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function lavelup() {
        setLavel(lavel + 1);
    }

    function startNewChallenge() {
        const randomChallengesIndex = Math.floor(Math.random() * challegens.length)
        const challenge = challegens[randomChallengesIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo desafioo 🎉',{
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLavel){
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
                experienceToNextLavel
            }}>

            {children}
        </ChallengesContext.Provider>

    )
}