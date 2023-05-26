import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Goal">Goal</Link>
          </li>
          <li>
            <Link to="/Garage">GarageGarage</Link>
          </li>
          <li>
            <Link to="/GarageCar">GarageCar</Link>
          </li>
          <li>
            <Link to="/GarageCar2">GarageCar2</Link>
          </li>
          <li>
            <Link to="/MyForm">MyForm</Link>
          </li>
          <li>
            <Link to="/MyTextarea">MyTextarea</Link>
          </li>
          <li>
            <Link to="/MySelect">MySelect</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout;