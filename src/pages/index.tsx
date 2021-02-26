import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengeBox, CompletedChallenges, Countdown, ExperienceBar, Profile } from '../components';
import { ChallengesProvider ,CountdownProvider } from '../contexts';

import styles from './index.module.css';

interface Props {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: Props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

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
  const {
    cookiesMoveitLevel, 
    cookiesMoveitCurrentExperience, 
    cookiesMoveitChallengesCompleted
  } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(cookiesMoveitLevel),
      currentExperience: Number(cookiesMoveitCurrentExperience),
      challengesCompleted: Number(cookiesMoveitChallengesCompleted)
    }
  }
}