import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

const techStack = [
    ['React', 'Python', 'Linux', 'Shell', 'AngularJS', 'TensorFlow'],
    ['Firebase', 'Bash', 'C / C++', 'Java', 'Machine Learning'],
    [' HTML / CSS', 'Git', 'Oracle', 'Deep Learning', 'REST', 'WebSockets','UI / UX'],
    ['CI / CD', 'React Native', 'JavaScript', 'SQL', 'MEAN Stack', 'Automation'],
    ['MERN Stack', 'API Design', 'Arduino', 'IoT', 'LAMP Stack', 'SOAP'],
    ['LEMP Stack', 'Photoshop', 'Illustrator', 'NodeJS', 'MongoDB', 'ExpressJS'],
    ['AR', 'VR', 'Final Cut Pro', 'Rendering', 'Cinema 4D', 'AWS'],
]

const HoveringWordsBackdrop = () => (
    <div style={{ position: 'absolute', top: 0, left: '-100vw', zIndex: -1 }}>
        {
            techStack.map((r, j) => (
                <div key={j} style={{ whiteSpace: 'nowrap' }}>
                    {
                        [...r.slice(-2), ...r, ...r.slice(2)].map((w, i) => (
                            <span className="word-backdrop" key={i} style={{opacity:0.15}}>{w}</span>
                        ))
                    }
                    <br />
                </div>
            ))
        }
    </div>
)

const Scene8 = () => (
    <Scene pin>
        <section className="slide-8" style={{ background: 'radial-gradient(circle farthest-corner at 28.7% 6.3%, #840641 0%, #320b46 90%)' }}>
            <ScrollTrigger start="0vh center" end="1300vh center" scrub={0.7}>
                <Timeline
                    target={
                        <Fragment>
                            {/* <div className="slide-7-statement">Only Possible Through<br />An Incredibly Diverse Tech Stack And A Skillset Like No Other.</div> */}
                            <HoveringWordsBackdrop />
                            <div className="slide-7-statement">Achieved through mastery in the most number of skills you've ever seen.</div>
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ delay: 0.2, transform: 'scale(9)', opacity: 0 }} target={1} position="0" ease="back.out(0.8)" />
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene8;