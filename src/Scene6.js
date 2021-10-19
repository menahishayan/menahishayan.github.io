import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

import { techBadges } from './Components'

const Scene6 = () => (
    <Scene pin>
        <section className="slide-6" style={{ background: 'url("./images/router-bg.jpg") no-repeat fixed center', backgroundSize: 'cover' }}>
            <ScrollTrigger start="450vh center" end="1000vh center" scrub={0.5}>
                <Timeline
                    target={
                        <Fragment>
                            <div style={{ background: 'url("./images/router-fg.jpg") no-repeat fixed center', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: '0', left: '0', overflow: 'hidden' }}>
                                <div style={{ height: '100vh', width:'100vw', position: 'absolute', top: '0', left: '0', overflow: 'hidden' }}>
                                    <div className="slide-3-pretext" style={{ textAlign: 'center', color: 'white', marginBottom: '5vh' }}>and</div>
                                    <img src="./images/router4.png" style={{ height: '40vh' }} />
                                    <div className="slide-3-statement" style={{ textAlign: 'center', color: 'white' }}>Bringing Routers In To<br />The IoT Ecosystem.</div>
                                </div>
                            </div>
                            <div className="slide-3-pretext" style={{ textAlign: 'center', color: '#555', marginBottom: '5vh' }}>and</div>
                            <img src="./images/router.png" style={{ height: '40vh' }} />
                            <div className="slide-3-statement" style={{ textAlign: 'center' }}>Bringing Routers In To<br />The IoT Ecosystem.</div>
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ width: '0' }} to={{ width: '100vw' }} target={0} />
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene6;