import { Controller, Scene } from 'react-scrollmagic'
import { Tween, SplitChars, ScrollTrigger, Timeline } from 'react-gsap';
import './App.css'
import { Fragment } from 'react';

import heart from './images/heart.png'
import oven from './images/oven2.png'
import tensorflow from './images/tensorflow.svg'
import raspberry from './images/raspberry.svg'
import wslogo from './images/websocket.svg'
import python from './images/python.svg'
import linux from './images/tux.svg'

const TechBadge = (props) => (
    <div className="tech-badge-container">
        <img src={props.src} className="tech-badge" alt={props.label} style={{ transform: `scale(${props.zoom || 1})` }} />
        <span class="tooltiptext" style={{ backgroundColor: props.color }}>{props.label}</span>
    </div>
)

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
                        <ScrollTrigger start="50px center" end="600px center" scrub={0.5} >
                            <Timeline
                                target={
                                    <div className="slide-2-statement" style={{ marginTop: '20vh', marginLeft: '10vw' }}>Driven by <span className="tg-pink">Passion,</span></div>
                                }>
                                <Tween from={{ x: '-100vw', transform: 'scale(0.4)' }} to={{ transform: 'scale(1.2)' }} ease="back.out(1.7)" />
                                <Tween to={{ transform: 'scale(1)' }} />
                                <Tween to={{ transform: 'scale(0.4)', opacity: 0 }} />
                            </Timeline>
                            <Timeline
                                target={
                                    <div className="slide-2-statement" style={{ marginRight: '19vw' }}>Fueled by <span className="tg-yellow">Curiosity,</span></div>
                                }>
                                <Tween from={{ x: '80vw', transform: 'scale(0.4)' }} to={{ transform: 'scale(1.2)' }} ease="back.out(0.8)" />
                                <Tween to={{ transform: 'scale(1)' }} />
                                <Tween to={{ transform: 'scale(0.4)', opacity: 0 }} />
                            </Timeline>
                            <Timeline
                                target={
                                    <div className="slide-2-statement" style={{ marginLeft: '15vw' }}>And Inspired by <span className="tg-purple">Innovation.</span></div>
                                }>
                                <Tween from={{ x: '-100vw', transform: 'scale(0.4)' }} to={{ transform: 'scale(1.2)' }} ease="back.out(1.2)" />
                                <Tween to={{ transform: 'scale(1)' }} />
                                <Tween to={{ transform: 'scale(0.4)', opacity: 0 }} />
                            </Timeline>
                        </ScrollTrigger>
                    </section>
                </div>
            </Scene>
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
                    <ScrollTrigger start="240vh center" end="900vh center" scrub={0.3}>
                        <Timeline
                            target={
                                <Fragment>
                                    <div className="slide-3-statement">Automating</div>
                                    <div className="slide-3-statement">Tinkering</div>
                                    <div className="slide-3-statement" style={{ display: 'inline-block', textAlign: 'right' }}>and simply&nbsp;</div>
                                    <div className="slide-3-statement" style={{ display: 'inline-block', textAlign: 'left' }}>making things better.</div>

                                    <img src={oven} style={{ width: '50vw', marginTop: '-32vh', marginRight: '35vw' }} alt="oven" />
                                    <div>
                                        <div className="slide-3-statement" style={{ textAlign: 'left', fontSize: 50 }}>Like Inventing<br />The Automated Oven</div>
                                        <div className="para" style={{ width: '30vw' }}><br /><br />
                                            A one of a kind retrofitted feat of engineering, this oven uses IoT sensors and on-device machine learning to identify the
                                            food you place and automatically set the time and temperature.<br /><br />
                                            All you have to do is place the item in.
                                            It's that simple.<br /><br />
                                            Combined with an elegant UI, rich notifications, recipe comprehension, smart home integration, real-time energy analytics and an open API,
                                            the Automated Oven is truly the biggest upgrade to the oven since it was invented.
                                        </div><br /><br /><br />
                                    </div>
                                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                                        {
                                            [
                                                { src: raspberry, color: 'rgba(188,17,66,1)', label: 'IoT', zoom: 1.3 },
                                                { src: tensorflow, color: 'rgba(229,91,44,1)', label: 'TensorFlow' },
                                                { src: wslogo, color: 'rgba(254,102,0,1)', label: 'Websockets' },
                                                { src: python, color: 'rgba(254,209,65,1)', label: 'Python' },
                                                { src: linux, color: 'rgba(0,0,0,1)', label: 'Linux' },
                                            ].map((tb, i) => <TechBadge {...{ ...tb, key: i }} />)
                                        }
                                    </div>
                                    <div style={{ background: 'linear-gradient(0deg, rgba(141,193,253,1) 0%, rgba(216,227,244,1) 100%)', height: '100vh', width: '100vw', zIndex: -10, position: 'absolute', top: 0 }} />
                                    {/* <div style={{ backgroundColor: 'skyblue', height: '600vh', width: '100vw',  zIndex:-10 }}/>
                                    <img src="./screens/1.png" alt="screen1" style={{ height: '80vh', marginTop: '-20vh' }} /> */}
                                </Fragment>
                            }
                            labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                        >

                            <Tween from={{ transform: 'scale(8)', opacity: 0 }} target={0} ease="elastic.out(0.2,1.2)" />
                            <Tween to={{ transform: 'scale(0)', opacity: 0 }} target={0} />
                            <Tween from={{ transform: 'scale(8)', opacity: 0 }} target={1} ease="elastic.out(0.2,1.2)" />
                            <Tween to={{ transform: 'scale(0)', opacity: 0 }} target={1} />
                            <Tween from={{ x: '18vw', transform: 'scale(8)', opacity: 0 }} target={2} to={{ x: '18vw', transform: 'scale(1)', opacity: 1 }} ease="elastic.out(0.2,1.2)" />
                            <Tween to={{ x: '0vw' }} ease="elastic.out(0.2,1.2)" target={2} />
                            <Tween from={{ opacity: 0 }} ease="elastic.out(0.2,1.2)" target={3} />

                            <Tween from={{ delay: 3, transform: 'scale(8)' }} target={4} position="7" />
                            <Tween to={{ delay: 3, transform: 'scale(0.3)', marginRight: '15vw' }} target={2} position="7" />
                            <Tween to={{ delay: 3, transform: 'scale(0.3)', x: '-35vw' }} target={3} position="7" />
                            <Tween to={{ delay: 4, opacity: 0 }} target={2} position="8" />
                            <Tween to={{ delay: 4, opacity: 0 }} target={3} position="8" />

                            <Tween from={{ x: '70vw', y: '-65vh', opacity: 0 }} to={{ x: '65vw', y: '-65vh', opacity: 1 }} target={5} />
                            <Tween from={{ x: '65vw', y: '-60vh', opacity: 0 }} to={{ x: '65vw', y: '-65vh', opacity: 1 }} target={6} />

                            <Tween to={{ delay: 5, opacity: 0, y: '-30vh' }} target={4} position="11" />
                            <Tween to={{ delay: 5, opacity: 0, y: '-105vh' }} target={5} position="11" />
                            <Tween to={{ delay: 5, opacity: 0, y: '-100vh' }} target={6} position="11" />
                            <Tween from={{ opacity: 0 }} to={{ delay: 5, opacity: 1 }} target={7} position="11" />
                        </Timeline>
                    </ScrollTrigger>
                </section>
            </Scene>
            <Scene pin>
                <section className="slide-4" style={{position:'relative',top:'-120vh'}}>
                    <ScrollTrigger start="0vh center" end="300vh center" scrub={0.7}>
                        <Timeline
                            wrapper={<div style={{ position: 'relative', top: '-50vh', left: '-35vw' }} />}
                            target={
                                <Fragment>
                                    <img src="./screens/1.png" alt="screen1" className="oven-screenshot" style={{ left: '-5vw' }} />
                                    <img src="./screens/3.png" alt="screen1" className="oven-screenshot" style={{ top: '10vh' }} /><br />
                                    <img src="./screens/4.png" alt="screen1" className="oven-screenshot" style={{ top: '-15vh', left: '22vw' }} />
                                    <img src="./screens/1.png" alt="screen1" className="oven-screenshot" style={{ top: '-60vh', left: '56vw' }} /><br />
                                    <img src="./screens/2.png" alt="screen1" className="oven-screenshot" style={{ top: '-105vh', left: '55vw' }} /><br />
                                    <img src="./screens/4.png" alt="screen1" className="oven-screenshot" style={{ top: '-174vh', left: '98vw' }} /><br />
                                    <img src="./screens/7.png" alt="screen1" className="oven-screenshot" style={{ top: '-264vh', left: '-14vw' }} /><br/>
                                    <div className="slide-4-statement">And a beautifully designed<br/>revolutionary mobile app.</div>
                                </Fragment>
                            }
                            labels={Array(5).map((_, a) => { return { label: a + '', position: a } })}
                        >
                            {/* 0 1 3 4 6 8 10 */}
                            <Tween from={{  x: '-105vw', y: '-50vh', opacity:0 }} target={4} position="0" ease="back.out(0.8)" />
                            <Tween from={{  x: '-105vw', y: '-155vh', opacity:0 }} target={6} position="0" ease="back.out(0.8)"/>
                            <Tween from={{ x: '135vw', y: '155vh' , opacity:0}} target={8} position="0" ease="back.out(0.8)" />
                            <Tween from={{  x: '145vw', y: '150vh', opacity:0 }} target={0} position="0" ease="back.out(0.8)"/>
                            <Tween from={{ x: '135vw', y: '155vh' , opacity:0}} target={1} position="0" ease="back.out(0.8)" />
                            <Tween from={{  x: '140vw', y: '152vh' , opacity:0}} target={3} position="0" ease="back.out(0.8)" />
                            <Tween from={{  x: '-135vw', y: '-105vh' , opacity:0}} target={10} position="0" ease="back.out(0.8)" />
                            <Tween from={{ delay:0.2,transform:'scale(9)', opacity:0}} target={12} position="0" ease="back.out(0.8)" />
                        </Timeline>
                    </ScrollTrigger>
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
