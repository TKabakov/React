import { Profile } from "./Profile";
//named import
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <br/>
        <Profile />
        <br/>
        <Profile />
      </section>
    );
  }
  