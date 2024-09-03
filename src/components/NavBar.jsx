import {NavLink} from "react-router-dom";

const NavBar = () => {

    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      const navbarHeight = document.querySelector(".nav-bar").offsetHeight;
      console.log(navbarHeight);
      if (section) {
          section.scrollIntoView({
              top: 100,
              behavior: "smooth"
          });
      }
    };

    return (
        <header className="nav-bar">
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('home')}>
                    <p className="">Home</p>
                </NavLink>
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('detail')}>
                    <p className="">Detalle técnico</p>
                </NavLink>
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('work')}>
                    <p className="">Trabajos anteriores</p>
                </NavLink>
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('me')}>
                    <p className="">Sobre mí</p>
                </NavLink>

        </header>
    )
}

export default NavBar;