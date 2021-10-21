import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

import dp from './images/dp.png'
import linkedin from './images/linkedin.svg'
import github from './images/github.svg'

const Scene10 = () => (
    <Scene pin>
        <section className="slide-10" style={{ background: '#d5d5d5' }}>
            <ScrollTrigger start="0vh center" end="500vh center" scrub={0.7}>
                <Timeline
                    target={
                        <Fragment>
                            <div className="slide-10-statement">Connect With Me</div>
                            <div className="card">
                                <img className="profile-pic" src={dp} alt="dp" />
                                <div className="card-right-subcontainer">
                                    <div className="para selectable" style={{ fontSize: 26, fontWeight: 700, color: 'black', marginTop: 20, lineHeight: '4vh'}}>Menahi Shayan</div>
                                    <div className="para selectable" style={{ fontSize: 20, lineHeight: '3vh', marginTop: 3 }}>menahi.shayan@gmail.com<br />+91 89717 29383</div>
                                </div>
                            </div>
                            <div className="slide-10-statement" style={{ fontSize: 24, fontWeight: 700, top: '35vh' }}>Find Me On</div>
                            <div style={{ flexDirection: 'row', display: 'flex', position: 'relative', top: '35vh', paddingLeft: '42vw', paddingRight: '42vw' }}>
                                <div className="link-badge-container"><img src={linkedin} className="link-badge" alt="linkedin" onClick={() => window.location.href = 'https://www.linkedin.com/in/menahi-shayan/'} /></div>
                                <div className="link-badge-container"><img src={github} className="link-badge" alt="github" onClick={() => window.location.href = 'https://github.com/menahishayan'} /></div>
                            </div>
                            <div className="read-more" style={{ color: '#777', position: 'relative', top: '38vh', left: 10, fontSize: 18 }} onClick={() => window.location.href = './Resume.pdf'}>Download Resumé</div>
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ y: '8vh', opacity: 0 }} target={0} position="0" />
                    <Tween from={{ y: '10vh', opacity: 0 }} target={1} position="0" ease="back.out(0.9)" />
                    <Tween from={{ delay: 0.5, y: '5vh', opacity: 0 }} target={2} position="0" ease="back.out(0.9)" />
                    <Tween from={{ delay: 0.5, y: '5vh', opacity: 0 }} target={3} position="0" ease="back.out(0.9)" />
                    <Tween from={{ delay: 1, y: '5vh', opacity: 0 }} target={4} position="0" ease="back.out(0.9)" />
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene10;