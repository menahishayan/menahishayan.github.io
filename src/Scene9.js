import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

const RandomBubbles = props => [...Array(props.count)].map((_, i) => (
    <div key={i} className="recommendation-bg"
        style={{
            top: `${Math.random().toFixed(1) * 70}vw`,
            left: `${Math.random().toFixed(1) * 80}vw`,
            width: `${Math.random().toFixed(1) * 10 + 2}vw`,
            opacity: (Math.random() / 2) + 0.1,
            transform: `scale(${Math.random().toFixed(1) * 1.1 + 0.2})`
        }}
    ><p className={`${Math.random() > 0.5 ? 'left' : 'right'}-bubble-grey`}>&nbsp;</p></div>
))

const Scene9 = () => (
    <Scene pin>
        <section className="slide-9" style={{ background: 'linear-gradient(135deg, #f8f8f8 0%, #ece9e6 100%)' }}>
            <ScrollTrigger start="0vh center" end="1400vh center" scrub={1} markers>
                <Timeline
                    target={
                        <Fragment>
                            {[...Array(10)].map((_, i) => <RandomBubbles key={i} count={3} />)}
                            <div className="slide-9-statement">Backed By Strong Recommendations.</div>
                            <div className="recommendation" style={{ background: 'linear-gradient(251deg, #21D4FD 0%, #B721FF 100%)', top: '20vh', left: '10vw', boxShadow: '0 3px 3rem rgba(82, 80, 80, 0.405)' }}>
                                <p className="left-bubble">Shayan has demonstrated excellent communication skills, strong leadership, dilligence, compassion, and admirable helpfulness.</p>
                                <div className="read-more">Source</div>
                            </div>
                            <div className="recommendation" style={{ background: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)', top: '25vh', marginLeft: '50vw' }}>
                                <p className="right-bubble">It is clear that he will be an exceptional asset to any institution or workforce he shall be a part of.</p>
                                <div className="read-more">Source</div>
                            </div>
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ y: '10vh', opacity: 0 }} target={0} position="0" />
                    <Tween from={{ transform: 'scale(0)', x: '-25vw', y: '25vh', opacity: 0 }} target={1} position="1" ease="back.out(1.5)" />
                    <Tween from={{ delay: 0.5, transform: 'scale(0)', x: '25vw', y: '25vh', opacity: 0 }} target={2} position="1" ease="back.out(1.5)" />

                    <Tween to={{ delay: 0.7,y: '-4vh' }} target={0} position="2" ease="power2.inOut" />
                    <Tween to={{ delay: 0.7,y: '-6vh' }} target={1} position="2" ease="power2.inOut" />
                    <Tween to={{ delay: 0.7,y: '-8vh' }} target={2} position="2" ease="power2.inOut" />
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene9;