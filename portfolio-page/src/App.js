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
  const scrollRef = useRef(null);

  
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
   {/*2.create a prop to pass scrollRef*/}
          <Header scroll={scrollRef}/>
          <LandingSection />
    {/*3.asign ref to scrollRef for ProjectSectio*/}
          <ProjectsSection ref={scrollRef} />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
