import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment, forwardRef, useImperativeHandle, useRef } from 'react';
import './App.css'

import { techBadges } from './Components'

import heart from './images/heart.png'
import oven from './images/oven2.png'

const HalfSplitSentence = forwardRef((props, ref) => {
    const wrapper = useRef(null), first = useRef(null), last = useRef(null)
    useImperativeHandle(ref, () => ({ wrapper, first, last }));
    return (
        <div ref={wrapper}>
            <div className="slide-3-statement" ref={first} style={{ display: 'inline-block', textAlign: 'left', position: 'relative', top: '-110vh' }}>{props.first}&nbsp;</div>
            <div className="slide-3-statement" ref={last} style={{ display: 'inline-block', textAlign: 'left', position: 'relative', top: '-110vh' }}>{props.last}</div>
        </div>
    )
});

const Scene3 = () => (
    <Scene pin>
        <section className="slide-3" >
            <ScrollTrigger start="-300vh center" end="510vh center" scrub={1}>
                <Timeline
                    wrapper={<div className="slide-3-pretext" />}
                    target={
                        <Fragment>
                            <span>with a</span>
                            <img src={heart} alt="love" style={{ height: 60, width: 60, verticalAlign: 'middle', marginLeft: 10, marginRight: 10 }} />
                            <span>for</span>
                        </Fragment>
                    }
                >
                    <Tween to={{ transform: 'scale(1.3)', marginLeft: 20, marginRight: 20 }} target={1} />
                    <Tween to={{ transform: 'scale(1)', marginLeft: 10, marginRight: 10 }} target={1} />
                    <Tween to={{ delay: 5, transform: 'scale(1.3)', marginLeft: 20, marginRight: 20 }} target={1} />
                    <Tween to={{ transform: 'scale(1)', marginLeft: 10, marginRight: 10 }} target={1} />
                    <Tween to={{ delay: 15, opacity: 0 }} />
                </Timeline>
            </ScrollTrigger>
            <ScrollTrigger start="240vh center" end="1000vh center" scrub={0.3}>
                <Timeline
                    target={
                        <Fragment>
                            <div className="slide-3-statement">Automating</div>
                            <div className="slide-3-statement">Tinkering</div>
                            <br /><br />
                            <img src={oven} style={{ width: '50vw', marginTop: '-32vh', marginRight: '35vw' }} alt="oven" />
                            <div>
                                <div className="slide-3-statement" style={{ textAlign: 'left', fontSize: '5vh' }}>Like Inventing<br />The Automated Oven</div>
                                <div className="para" style={{ width: '30vw', fontSize: '2.5vh' }}><br /><br />
                                    A one of a kind retrofitted feat of engineering, this oven uses IoT sensors and on-device machine learning to identify the
                                    food you place and automatically set the time and temperature.<br /><br />
                                    All you have to do is place the item in.
                                    It's that simple.<br /><br />
                                    Combined with an elegant UI, rich notifications, recipe comprehension, smart home integration, real-time energy analytics and an open API,
                                    the Automated Oven is truly the biggest upgrade to the oven since it was invented.
                                </div><br /><br /><br />
                            </div>
                            <div style={{ flexDirection: 'row', display: 'flex' }}>
                                {techBadges(['IoT', 'TensorFlow', 'Websockets', 'Python', 'Linux'])}
                            </div>
                            <div style={{ background: 'linear-gradient(0deg, rgba(141,193,253,1) 0%, rgba(216,227,244,1) 100%)', height: '100vh', width: '100vw', zIndex: -10, position: 'fixed', top: 0 }} />
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >

                    <Tween from={{ transform: 'scale(8)', opacity: 0 }} target={0} ease="elastic.out(0.2,1.2)" />
                    <Tween to={{ transform: 'scale(0)', opacity: 0 }} target={0} />
                    <Tween from={{ transform: 'scale(8)', opacity: 0 }} target={1} ease="elastic.out(0.2,1.2)" />
                    <Tween to={{ transform: 'scale(0)', opacity: 0 }} target={1} />
                    <Timeline
                        target={<HalfSplitSentence first="and simply" last="making things better." />}
                        labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                    >
                        <Tween from={{ x: '18vw', transform: 'scale(8)', opacity: 0 }} target="first" to={{ x: '18vw', transform: 'scale(1)', opacity: 1 }} ease="elastic.out(0.2,1.2)" position="0" />
                        <Tween to={{ x: '0vw' }} ease="elastic.out(0.2,1.2)" target="first" position="1" />
                        <Tween from={{ opacity: 0 }} ease="elastic.out(0.2,1.2)" target="last" position="2" />
                        <Tween to={{ delay: 2, transform: 'scale(0.3)', y: '-78vh', x: '-20vw' }} target="wrapper" position="4" />
                        <Tween to={{ delay: 4, opacity: 0 }} target="wrapper" position="6" />
                    </Timeline>

                    <Tween from={{ delay: 3, transform: 'scale(8)' }} target={4} position="7" />
                    <Tween from={{ x: '68vw', y: '-70vh', opacity: 0 }} to={{ x: '63vw', y: '-70vh', opacity: 1 }} target={5} />
                    <Tween from={{ x: '63vw', y: '-65vh', opacity: 0 }} to={{ x: '63vw', y: '-70vh', opacity: 1 }} target={6} />

                    <Tween to={{ delay: 8, opacity: 0, y: '-30vh' }} target={4} position="11" />
                    <Tween to={{ delay: 8, opacity: 0, y: '-105vh' }} target={5} position="11" />
                    <Tween to={{ delay: 8, opacity: 0, y: '-100vh' }} target={6} position="11" />
                    <Tween from={{ opacity: 0 }} to={{ delay: 8, opacity: 1 }} target={7} position="11" />
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene3;