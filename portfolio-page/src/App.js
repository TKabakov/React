import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext"
import Alert from "./components/Alert";
import { useRef } from 'react';

function App() {
  //1. create scrollRef
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const home = useRef(null);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
   {/*2.create a prop to pass scrollRef*/}
          <Header
            projects ={projectsRef}
            contactMe = {contactsRef}
            home = {home}
            />
          <LandingSection ref={home}/>
    {/*3.asign ref to scrollRef for ProjectSectio*/}
          <ProjectsSection ref={projectsRef} />
          <ContactMeSection ref={contactsRef}/>
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
