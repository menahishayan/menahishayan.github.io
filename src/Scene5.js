import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import './App.css'
import { Fragment } from 'react';

const Scene5 = () => (
    <Scene pin>
        <section className="slide-5" style={{ background: 'linear-gradient(315deg, #2d3436 0%, #000000 74%)' }}>
            <ScrollTrigger start="50px center" end="600px center" scrub={0.5} >
                <Timeline
                    wrapper={<div style={{ position: 'relative' }} />}
                    target={
                        <Fragment>
                            <div style={{ background: 'radial-gradient(farthest-corner at 20vw 35vh, rgba(226,195,125,1) 0%, rgba(71,68,58,0) 60%)', height: '100vh', width: '100vw', zIndex: -9, position: 'absolute', top: '0', left: '0' }} ></div>
                            <img src="./images/ledglow1.png" alt="lightbulb" className="lightbulb" />
                            <img src="./images/ledglow2.png" alt="lightbulb" className="lightbulb" />
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                    >
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} target={0} position="1"/>
                    <Tween to={{ opacity: 0 }} target={1} position="1" />
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} target={2} position="1"/>
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene5;