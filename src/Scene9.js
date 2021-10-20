import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

const Scene9 = () => (
    <Scene pin>
        <section className="slide-9" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
            <ScrollTrigger start="0vh center" end="1300vh center" scrub={0.7}>
                <Timeline
                    target={
                        <Fragment>
                            <div>And a groundbreaking<br />Educational Platform.</div>
                           </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                   
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene9;