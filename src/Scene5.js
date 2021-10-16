import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline, SplitChars } from 'react-gsap';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './App.css'
import { Fragment } from 'react';

gsap.registerPlugin(TextPlugin);

const Scene5 = () => (
    <Scene pin>
        <section className="slide-5" style={{ background: 'linear-gradient(315deg, #2d3436 0%, #000000 74%)', paddingTop: '5vh' }}>
            <ScrollTrigger start="150px center" end="2000px center" scrub={0.7} markers>
                <Timeline
                    target={
                        <Fragment>
                            <div style={{ background: 'linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)', height: '100vh', width: '100vw', zIndex: -10, position: 'absolute', top: '0', left: '0' }} />
                            <div style={{ background: 'radial-gradient(farthest-corner at 17vw 40vh, rgba(239,194,132,1) 0%, rgba(71,68,58,0) 60%)', height: '100vh', width: '100vh', zIndex: -9, position: 'absolute', top: '0', left: '0' }} />
                            <img src="./images/ledglow1.png" alt="lightbulb" className="lightbulb" />
                            <img src="./images/ledglow2.png" alt="lightbulb" className="lightbulb" />
                            <div className="slide-3-pretext" style={{ textAlign: 'left', marginLeft: '35vw', marginBottom: '0', color: '#555' }}>or...<br /><br /><br /></div>
                            <div className="slide-3-statement" style={{ textAlign: 'left', marginLeft: '35vw', fontSize: 70 }}>Building A Popular<br />Home Automation API</div>
                        </Fragment>
                    }
                    labels={Array(30).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ opacity: 0 }} to={{ delay: 1, opacity: 1 }} target={1} position="1" />
                    <Tween to={{ delay: 1.5, opacity: 0 }} target={2} position="1" />
                    <Tween from={{ opacity: 0 }} to={{ delay: 1, opacity: 1 }} target={3} position="1" />
                    <Tween from={{ opacity: 0 }} to={{ delay: 1, opacity: 0.3 }} target={0} position="1" />

                    <Timeline
                        target={
                            <Fragment>
                                <SplitChars wrapper={<span className="slide-5-code" style={{ color: 'rgba(255,206,252,0.4)' }} />}>
                                    .set('light',#efc385)
                                </SplitChars>
                            </Fragment>
                        }
                        labels={Array(30).map((_, a) => { return { label: a + '', position: a } })}
                    >
                        <Tween from={{ opacity: 0 }} position="0" stagger={0.03} ease="elastic.out(0.4, 0.1)" />
                        {
                            ['ef8a85', 'e685ef', '85b1ef', 'b685ef', 'efc385'].map((str, j) => {
                                return Array.from(str).map((c, i) =>
                                    <Tween from={{ opacity: 0 }} to={{ delay: 0.06 * i, text: c, opacity: 1 }} target={14 + i} position={((1 + j) * 2) + ""} />
                                )
                            })
                        }
                    </Timeline>
                    {
                        [-32, -180, -127, 0].map((h, i) => (
                            <Fragment>
                                <Tween to={{ filter: `hue-rotate(${h}deg) saturate(${h !== 0 ? 2 : 1})` }} target={1} position={((i * 2) + 5) + ""} />
                                <Tween to={{ filter: `hue-rotate(${h}deg) saturate(${h !== 0 ? 2 : 1})` }} target={3} position={((i * 2) + 5) + ""} />
                            </Fragment>
                        ))
                    }
                    <Tween to={{ delay: 1.5, opacity: 1 }} target={2} position="13" />
                    <Tween to={{ delay: 1, opacity: 0 }} target={3} position="13" />
                    <Tween to={{ delay: 1, opacity: 0 }} target={1} position="13" />

                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene5;