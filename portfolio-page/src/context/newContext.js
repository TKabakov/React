import { useContext, Context, createContext } from "react";

//1. Create Context
const UserContext = createContext('Unknown');

//2. Provide Context
function Application() {
    const userName = "John SMith";
    return (
    <UserContext.Provider value={userName}>
        <Layout>
            Main content
        </Layout> 
    </UserContext.Provider>
    );
  }

  function Layout({ children }) {
    return (
      <div>
        <Header/>
        <main>
          {children}
        </main>
      </div>
    )
  }
  
  function Header() {
    return (
      <header>
        <UserInfo/>
      </header>
    );
  }
  
  //3. Use Context
  function UserInfo() {
    const userName= useContext(UserContext);

    return <span>{userName}</span>;
  }