import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function Home() {

    const particlesInit = async (engine) => {
        await loadStarsPreset(engine);
    };

    const options = {
        preset: "stars",
        background: {
            color: {
                value: "#2b3741"
            }
        },
        particles: {
            move: {
                speed: 1
            }
        }
    };

    return (
        <>
            <Head>
                <title>Boost and develop your FiveM server | NextCitizens</title>
                <meta name="title" content="Boost and develop your FiveM server | NextCitizens"/>
                <meta name="description" content="You are looking for the best framework to create your FiveM server. You are at the right place. Use our powerful framework for free right now." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextcitizens.net/" />
                <meta property="og:title" content="Boost and develop your FiveM server | NextCitizens" />
                <meta property="og:description" content="You are looking for the best framework to create your FiveM server. You are at the right place. Use our powerful framework for free right now." />
                <meta property="og:image" content="/social_background.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nextcitizens.net/" />
                <meta property="twitter:title" content="Boost and develop your FiveM server | NextCitizens" />
                <meta property="twitter:description" content="You are looking for the best framework to create your FiveM server. You are at the right place. Use our powerful framework for free right now." />
                <meta property="twitter:image" content="/social_background.png" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar active={"home"}/>

            <div className={styles.mainContainer}>
                <h1 className={styles.mainTitle}>NextCitizens</h1>
                <h2 className={styles.subTitle}>The best FiveM framework for your server</h2>
            </div>

            <Particles
                id={"particles-js"}
                init={particlesInit}
                options={options}
            />
        </>
    )
}
