import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { GetServerSideProps } from 'next'
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Header } from '../components/Header';

interface HomeProps {
  lavel: number,
  currentExperience: number,
  challegesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      lavel={props.lavel}
      currentExperience={props.currentExperience}
      challegesCompleted={props.challegesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.body</title>
        </Head>
        <Header />
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { lavel, currentExperience, challegesCompleted } = ctx.req.cookies;

  return {
    props: {
      lavel: Number(lavel),
      currentExperience: Number(currentExperience),
      challegesCompleted: Number(challegesCompleted)
    }
  }
}