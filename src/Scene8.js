import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

const Scene8 = () => (
    <Scene pin>
        <section className="slide-7" style={{  background: 'radial-gradient(circle farthest-corner at 28.7% 6.3%, #840641 0%, #320b46 90%)' }}>
            <ScrollTrigger start="0vh center" end="1300vh center" scrub={0.7}>
                <Timeline
                    target={
                        <Fragment>
                            <div className="slide-7-statement">Only Possible Through<br/>An Incredibly Diverse Tech Stack And A Skillset Like No Other.</div>
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ delay: 0.2, transform: 'scale(9)', opacity: 0 }} target={0} position="0" ease="back.out(0.8)" />
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene8;