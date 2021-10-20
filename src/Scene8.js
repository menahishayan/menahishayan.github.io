import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment } from 'react';
import './App.css'

const techStack = [
    ['React', 'Python', 'Linux', 'Shell', 'TensorFlow'],
    ['Firebase', 'C / C++', 'Java', 'Machine Learning', 'Bash'],
    [' HTML / CSS', 'Git', 'Oracle', 'Deep Learning', 'REST'],
    ['WebSockets', 'UI / UX', 'React Native', 'JavaScript', 'CI / CD'],
    ['API Design', 'SQL', 'MEAN Stack', 'Automation', 'Rendering'],
    ['MERN Stack', 'AngularJS', 'Arduino', 'IoT', 'LAMP Stack', 'SOAP'],
    ['LEMP Stack', 'NodeJS', 'MongoDB', 'ExpressJS', 'Photoshop'],
    ['AR', 'VR', 'Illustrator', 'Final Cut Pro', 'Cinema 4D', 'AWS'],
]

const rowLengths = techStack.map(t => t.join(' ').length), minRL = Math.min(...rowLengths),
    rangeFactor = (Math.max(...rowLengths) - minRL) / 10

const getHoverDistance = (j) => {
    let x = 10 + ((rowLengths[j] - minRL) / rangeFactor)
    return (j % 2 === 0 ? -x : x) + 'vw'
}

const Scene8 = () => (
    <Scene pin>
        <section className="slide-8" style={{ background: 'radial-gradient(circle farthest-corner at 28.7% 6.3%, #840641 0%, #320b46 90%)' }}>
            <ScrollTrigger start="1200vh center" end="2300vh center" scrub={0.7} markers>
                <Timeline
                    target={
                        <Fragment>
                            <div className="slide-7-statement">Achieved through mastery in the most number of skills you've ever seen.</div>
                        </Fragment>
                    }
                    labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                >
                    <Tween from={{ transform: 'scale(9)', opacity: 0 }} target={0} position="0" ease="back.out(0.9)" />
                    <Timeline
                        wrapper={<div style={{ position: 'absolute', top: 0, left: '-100vw', zIndex: -1 }} />}
                        target={
                            <Fragment>
                                {
                                    techStack.map((r, j) => (
                                        <div key={j} style={{ whiteSpace: 'nowrap' }}>
                                            {
                                                [...r.slice(-2), ...r, ...r.slice(0, 2)].map((w, i) => (
                                                    <span className="word-backdrop" key={i} style={{ opacity: (Math.random() / 10) + 0.1 }}>{w}</span>
                                                ))
                                            }
                                            <br />
                                        </div>
                                    ))
                                }
                            </Fragment>
                        }
                        labels={Array(20).map((_, a) => { return { label: a + '', position: a } })}
                    >
                        {
                            techStack.map((_, j) => (
                                <Tween to={{ x: getHoverDistance(j) }} target={j} position="0" ease="ease.inout(0.1,0.2)" />
                            ))
                        }
                    </Timeline>
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene8;