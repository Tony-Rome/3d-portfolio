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
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('init')}>
                    <p className="">Inicio</p>
                </NavLink>
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('work')}>
                    <p className="">Experiencia</p>
                </NavLink>
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('stack')}>
                    <p className="">Stack tecnológico</p>
                </NavLink>
                <NavLink to="/" className="nav-link" onClick={() => scrollToSection('me')}>
                    <p className="">Sobre mí</p>
                </NavLink>

        </header>
    )
}

export default NavBar;