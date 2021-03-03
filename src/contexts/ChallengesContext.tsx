import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData{
    lavel: number;
    lavelup: ()=>void;
    startNewChallenge: ()=>void;
    currentExperience: number;
    challegesCompleted: number;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [lavel, setLavel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challegesCompleted, setChallegesCompleted] = useState(0);
    const [] = useState();

    function lavelup() {
        setLavel(lavel + 1);
    }

    function startNewChallenge() {
        console.log('ola mundo')
    }

    return (
        <ChallengesContext.Provider
            value={{ lavel, lavelup, startNewChallenge, currentExperience, challegesCompleted }}
        >
            {children}
        </ChallengesContext.Provider>

    )
}