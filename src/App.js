import { Fragment } from 'react';
import { Controller, Scene } from 'react-scrollmagic'
import './App.css'

function App() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin>
                <section className="slide-1">
                    <h1 className="main-title">Menahi Shayan</h1>
                </section>
            </Scene>
            <Scene pin>
                <div style={{position:'relative'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="slide-1-wave-container">
                        <path className="slide-1-wave" fill="#fff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,240C672,224,768,192,864,170.7C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <section className="slide-2">
                        <h1>Lorem</h1>
                    </section>
                </div>
            </Scene>

            {
                ['white', 'grey', 'white', 'grey'].map((c, i) => (
                    <Scene key={i} pin>
                        <section style={{ backgroundColor: c }}>
                            <h1>Slide {i + 1}</h1>
                        </section>
                    </Scene>
                ))
            }
        </Controller>
    )
}

export default App;
