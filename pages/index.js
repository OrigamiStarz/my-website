import Head from "next/head";
import Image from 'next/image';
import Container from "../container"; 
import List from "../list"

export default function Home() {
  const aboutMeContent = "Hello! I'm Isabel Ku, an incoming senior at Glen A. Wilson High School. I'm the captain of the CODE Team and Cyber Team at my school for the 2023-2024 school year. I can be a bit shy at times, but please don't hesitate to approach or contact me!";
  const hobbiesContent = "My hobbies include playing games, having fun on the piano, reading novels from time to time, and making crafts (like origami and pop-up cards).";
  const academicsContent = "";
  const academicsItems = ["Glen A. Wilson High School: I have taken 9 AP classes and self-studied 1 AP class, for a total of 10 AP exams taken so far. I have also completed the computer science pathway after taking Cybersecurity Honors in my junior year. Go Class of 2024!", 
  "Foothill College: I have taken Discrete Mathematics through concurrent enrollment in the summer of 2022. I am also planning to take Multivariable Calculus here in the Fall of 2023.",
  "De Anza College: I have taken Data Abstraction and Structures through concurrent enrollment in the summer of 2023.",
  "Cyber Foundations Academy: I obtained my GFACT certification through this academy. It was fully funded when I scored in the top 600 in the National Cyber Scholarship Competition in 2021. From the academy, I learned about computer hardware, Windows/Linux, operating systems, exploitation, mitigation, forensics, post-exploitation, and networking. I earned my certification on 1/17/22, and it is valid through 1/31/26. I may be studying GSEC soon too, thanks to CyberStart funding that."];
  const achievementsContent = "Here is a list of some of my achievements in high school.";
  const achievementsItems = ["Building this website - Made with Next.js (I believe I should look into design more though, this is just a personal achievement okay?)",
  "Perfect Score on AP Computer Science Principles Exam - 1/335 students in 2021, at least that's what the email stated", 
  "AP Scholar 2022-2024", 
  "Best Creative Design in the Congressional App Challenge 2022", 
  "Won Disadvantaged Track in Hackathon by the Sea 2023",
  "CyberStart America Scholar 2022-2023, Finalist 2020-2021 & 2021-2022", 
  "GFACT Certification (Search up my name at https://www.giac.org/certified-professional/Isabel-Ku/204009)"
  ];
  const contactMeContent = "The best way to contact me is through Discord (origamistarz). Alternatively, I also check my email (isabelbku@gmail.com) and Instagram (OrigamiStarz), but not as frequently.";
  return (
    <>
      <Head>
        <title>OrigamiStarz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="center">
          <h1 className="fancyText">OrigamiStarz</h1>
        </div>
        <Image className="profilePic" 
          src="/images/origamiOmegaStarProfilePic.jpg" 
          width="200" height="200"
          alt="Profile Picture for OrigamiStarz"
        ></Image>
        <div className="twoContainers">
          <Container title="About Me" content={aboutMeContent}></Container>
          <Container title="Hobbies" content={hobbiesContent}></Container>          
        </div>
        <List title="Achievements" content={achievementsContent} items={achievementsItems} listType="unordered"></List>
        <List title="Education" content={academicsContent} items={academicsItems} listType="unordered"></List>
        <Container title="Contact Me" content={contactMeContent}></Container>
      </main>

      <footer>
        Copyright © 2023 OrigamiStarz
      </footer>
    </>
  )
}
