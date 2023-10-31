import { useContext, Context, createContext } from "react";

const Context = createContext();

function Application() {
    const userName = "John SMith";
    return (
    <Context.Provider value={userName}>
        <Layout>
        Main content
      </Layout> 
    </Context.Provider>

    );
  }
  //Up to here
  function Layout({ children, userName }) {
    return (
      <div>
        <Header userName={userName} />
        <main>
          {children}
        </main>
      </div>
    )
  }
  
  function Header({ userName }) {
    return (
      <header>
        <UserInfo userName={userName} />
      </header>
    );
  }
  
  function UserInfo({ userName }) {
    return <span>{userName}</span>;
  }