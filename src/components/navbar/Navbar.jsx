import {NavLink} from "react-router-dom";
import routes from "./routes";

import styles from "./Navbar.module.css";

const Navbar = () => {
  
  return (
    <header className={styles.header}>
        <div className="brand text-grey bg-white px-10 py-2">Logo</div>
        <nav>
            <ul className={styles.listItem}>
              {routes.map(({name, path}) => (
                <li className={styles.list} key={path}>
                  <NavLink className={styles.link} to={path}>{name}</NavLink>
                </li>
              ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar