import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Shiba from "../models/Shiba.jsx";

const Home = () => {
    return (
        <div className="generic-container">
            <div className="information-container">
                <section id="home" className="section-container">
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
                    <div>
                        <h2>Sección principal!</h2>
                        <p>Bienvenido y conoce más sobre mí!! :)</p>
                    </div>
                </section>

                <section id="detail" className="section-container">
                    <div>
                        <h2>Sección Detalle técnico!</h2>
                        <p>Bienvenido y conoce más sobre mí!! :)</p>
                    </div>
                </section>

                <section id="work" className="section-container">
                    <div>
                        <h2>Sección experiencia laboral!</h2>
                        <p>Bienvenido y conoce más sobre mí!! :)</p>
                    </div>
                </section>

                <section id="me" className="section-container">
                    <div >
                        <h2>Sección conóceme un poco más!</h2>
                        <p>Bienvenido soy más que un simple programador!! :)</p>
                    </div>
                </section>

                <section id="me" className="section-container">
                    <div >
                        <h2>Sección aprecia mis trabajos personales!</h2>
                        <p>Bienvenido soy más que un simple programador!! :)</p>
                    </div>
                </section>

                <section id="me" className="section-container">
                    <div >
                        <h2>Sección mis hobbies favoritos</h2>
                        <p>Bienvenido soy más que un simple programador!! :)</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;
