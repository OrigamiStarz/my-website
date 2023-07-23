import Head from "next/head";
import Image from 'next/image'
import Container from "../container"; 

export default function Home() {
  const aboutMeContent = "Hello! I'm Isabel Ku, an incoming senior at Glen A. Wilson High School."
  return (
    <>
      <Head>
        <title>OrigamiStarz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="fancyText center">OrigamiStarz</h1>
        <Image className="profilePic" src="/images/origamiOmegaStarProfilePic.jpg" width="200" height="200"></Image>
        <div className="twoContainers">
          <Container title="About Me" content={aboutMeContent}></Container>
          <Container title="Hobbies" content={aboutMeContent}></Container>          
        </div>
        <Container title="Achievements" content={aboutMeContent}></Container>
        <Container title="Contact Me" content={aboutMeContent}></Container>

      </main>

      <footer>
        Copyright © 2023 OrigamiStarz
      </footer>
    </>
  )
}
