import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Shiba from "../models/Shiba.jsx";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RiNewspaperLine} from "react-icons/ri";

const Home = () => {
    return (
        <div className="generic-container">

            <div className="animation-container">
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <directionalLight color="#ffffff"/>
                    <Shiba/>
                    <OrbitControls
                        target={[0, 0, 0]}
                        enablePan={false}
                        enableZoom={false}
                    />
                </Canvas>
            </div>

            <div className="information-container">

                <section id="init" className="section-container">
                    <div>
                        <h1 className="main-title">トニー ローマ</h1>
                        <h2 className="second-name">Tony Rome</h2>
                        <p className="body-text">
                            Informático que se desempaña actualmete como ingeniero en software, específicamente en backend.<br/>
                            Participación en proyectos bancarios con microservicios con la responsabilidad de su creación, mantención y desempeño.<br/>
                            Cumplimiento de estándares y buenas prácticas impuestas en el área bancaria.
                        </p>
                    </div>
                </section>

                <section id="work" className="section-container">
                    <div>
                        <h1 className="main-title">Experiencia laboral</h1>
                        <h2>Experiencia laboral</h2>
                        <p>Ingeniero de software en Banco Créditos e Inversiones (BCI)</p>
                        <p>Santiago, Chile</p>
                        <p>Agosto 2022 hasta fecha actual</p>
                        <p>Deberes</p>
                        <p>Deber 1</p>
                        <p>Deber 1</p>
                        <p>Deber 1</p>
                        <p>Deber 1</p>
                        <p>Deber 1</p>
                    </div>
                </section>

                <section id="stack" className="section-container">
                    <div>
                        <h2>Sección experiencia laboral!</h2>
                        <p>Bienvenido y conoce más sobre mí!! :)</p>
                    </div>
                </section>

                <section id="me" className="section-container">
                    <div>
                        <h2>Sección conóceme un poco más!</h2>
                        <p>Bienvenido soy más que un simple programador!! :)</p>
                    </div>
                </section>

                <section id="me" className="section-container">
                    <div>
                        <h2>Sección aprecia mis trabajos personales!</h2>
                        <p>Bienvenido soy más que un simple programador!! :)</p>
                    </div>
                </section>

                <section id="me" className="section-container">
                    <div>
                        <h2>Sección mis hobbies favoritos</h2>
                        <p>Bienvenido soy más que un simple programador!! :)</p>
                    </div>
                </section>

            </div>

            <div className="contact-container">
                <div className="contact-wrapper">
                    <a href="" className="icon">
                        <MdEmail size={32}/>
                    </a>
                    <span className="tooltip">Email</span>
                </div>
                <div className="contact-wrapper">
                    <a href="" className="icon">
                    <FaGithub size={32}/>
                    </a>
                </div>
                <div className="contact-wrapper" >
                    <a href="" className="icon">
                    <FaLinkedin size={32}/>
                    </a>
                </div>
                <div className="contact-wrapper">
                    <a href="" className="icon">
                        <RiNewspaperLine size={32}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;
