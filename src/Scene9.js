import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

const Scene9 = () => (
    <Scene pin>
        <section className="slide-9" style={{ background: 'linear-gradient(135deg, #f3f3f3 0%, #ece9e6 100%)' }}>
            <ScrollTrigger start="0vh center" end="1300vh center" scrub={0.7} markers>
                <Timeline
                    target={
                        <Fragment>
                            <div className="slide-9-statement">Backed By Strong Recommendations.</div>
                            <div className="recommendation" style={{ background: 'linear-gradient(251deg, #21D4FD 0%, #B721FF 100%)', top: '20vh', left: '10vw' }}>
                                <p className="left-bubble">Shayan has demonstrated excellent communication skills, strong leadership, dilligence, compassion, and admirable helpfulness.</p>
                            </div>
                            <div className="recommendation" style={{ background: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)', top: '20vh', marginLeft: '50vw' }}>
                                <p className="right-bubble">It is clear that he will be an exceptional asset to any institution or workforce he shall be a part of.</p>
                            </div>
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ y:'10vh', opacity:0}} target={0} position="0" />
                    <Tween from={{transform:'scale(0)', x:'-25vw', y:'25vh', opacity:0}} target={1} position="1" ease="back.out(1.7)"/>
                    <Tween from={{delay:0.5, transform:'scale(0)', x:'25vw', y:'25vh', opacity:0}} target={2}  position="1" ease="back.out(1.7)"/>
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene9;