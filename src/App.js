import { Controller, Scene } from 'react-scrollmagic'
import { Tween, SplitChars, ScrollTrigger, Timeline } from 'react-gsap';
import './App.css'
import { Fragment } from 'react';

function App() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin>
                <section className="slide-1">
                    {/* <ScrollTrigger start="300px center" end="900px center" scrub={0.1} markers >
                        <Tween to={{ y: '-300px' }}>
                            <h1 className="main-title">Menahi Shayan</h1>
                        </Tween>
                    </ScrollTrigger> */}
                    <h1 className="main-title">Menahi Shayan</h1>

                    <ScrollTrigger start="10px center" end="900px center" scrub={0.1} >
                        <Tween from={{ opacity: 0 }} stagger={0.1} duration={2}>
                            <SplitChars wrapper={<div className="subtitle" />}>
                                Developer.&nbsp;&nbsp;Designer.&nbsp;&nbsp;Product Manager.
                            </SplitChars>
                        </Tween>
                    </ScrollTrigger>
                </section>
            </Scene>
            <Scene pin>
                <div style={{ position: 'relative' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="slide-1-wave-container">
                        <path fill="#fff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,240C672,224,768,192,864,170.7C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <section className="slide-2">
                        <ScrollTrigger start="50px center" end="600px center" scrub={0.1} >
                            <Tween from={{ x: '-100vw',transform:'scale(0.4)' }} to={{transform:'scale(1.2)'}} ease="back.out(1.7)">
                                <div className="slide-2-statement" style={{ marginTop: '20vh', marginLeft: '10vw' }}>Driven by <span className="tg-pink">Passion,</span></div>
                            </Tween>
                            <Tween from={{ x: '80vw',transform:'scale(0.4)' }} to={{transform:'scale(1.2)'}} ease="back.out(0.8)">
                                <div className="slide-2-statement" style={{ marginRight: '19vw' }}>Fueled by <span className="tg-yellow">Curiosity,</span></div>
                            </Tween>
                            <Tween from={{ x: '-100vw',transform:'scale(0.4)' }} to={{transform:'scale(1.2)'}} ease="back.out(1.2)">
                                <div className="slide-2-statement" style={{ marginLeft: '15vw' }}>And Inspired by <span className="tg-purple">Innovation.</span></div>
                            </Tween>
                        </ScrollTrigger>
                    </section>
                </div>
            </Scene>
            <Scene pin>
                <section className="slide-3">
                    <span>With a love for </span>
                    <span className="slide-3-statement">automating, tinkering, and simply making things better.</span>
                </section>
            </Scene>

            {
                ['#ddd', 'white', '#ddd'].map((c, i) => (
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
