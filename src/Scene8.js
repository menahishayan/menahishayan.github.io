import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { Fragment, forwardRef, useImperativeHandle, useRef } from 'react';
import './App.css'

const techStack = [
    ['React', 'Python', 'Linux', 'Shell', 'TensorFlow'],
    ['Firebase', 'C / C++', 'Java', 'Machine Learning', 'Bash'],
    [' HTML / CSS', 'Git', 'Oracle', 'Deep Learning', 'REST'],
    ['WebSockets', 'UI / UX', 'IoT', 'JavaScript', 'CI / CD'],
    ['API Design', 'SQL', 'MEAN Stack', 'Automation', 'Rendering'],
    ['MERN Stack', 'AngularJS', 'Arduino', 'React Native', 'LAMP Stack', 'SOAP'],
    ['LEMP Stack', 'NodeJS', 'MongoDB', 'ExpressJS', 'Photoshop'],
    ['AR', 'VR', 'Illustrator', 'Final Cut Pro', 'Cinema 4D', 'AWS'],
]

const rowLengths = techStack.map(t => t.join(' ').length), minRL = Math.min(...rowLengths), rangeFactor = (Math.max(...rowLengths) - minRL) / 15
const getHoverDistance = (j) => (j % 2 === 0 ? '-' : '') + (10 + ((rowLengths[j] - minRL) / rangeFactor)) + 'vw'
const randoms = techStack.map(r => [...r.slice(-2), ...r, ...r.slice(0, 2)].map(_ => ({ from: (Math.random() / 6) + 0.05, to: (Math.random() / 3) + 0.1 })))

const HoveringWordsBackdrop = forwardRef((props, ref) => {
    const rows = useRef([])
    const words = useRef([...Array(props.list.length)].map((_, j) => Array(rowLengths[j])))

    useImperativeHandle(ref, () => {
        let obj = {}
        rows.current.forEach((r, i) => obj['r' + (i + 1)] = { current: r })
        words.current.forEach((r, i) => r.forEach((w, j) => obj[`r${i + 1}w${j + 1}`] = { current: w }))
        return obj
    });
    return (
        <Fragment>
            <div style={{ position: 'absolute', top: 0, left: '-100vw', zIndex: -1 }} >
                {props.list.map((r, j) => (
                    <div key={j} style={{ whiteSpace: 'nowrap' }} ref={d => rows.current[j] = d}>
                        {[...r.slice(-2), ...r, ...r.slice(0, 2)].map((w, i) => (
                            <span className="word-backdrop" key={i} ref={s => words.current[j][i] = s}>{w}</span>
                        ))}
                        <br />
                    </div>
                ))}
            </div>
        </Fragment>
    );
});

const Scene8 = () => (
    <Scene pin>
        <section className="slide-8" style={{ background: 'radial-gradient(circle farthest-corner at 28.7% 6.3%, #840641 0%, #320b46 90%)' }}>
            <ScrollTrigger start="1200vh center" end="1500vh center" scrub={1}>
                <Tween from={{ transform: 'scale(9)', opacity: 0 }} ease="back.out(0.9)" >
                    <div className="slide-7-statement" >Achieved through mastery in the most number of skills you've ever seen.</div>
                </Tween>
            </ScrollTrigger>
            <ScrollTrigger start="400vh center" end="2200vh center" scrub={1} >
                <Timeline
                    target={<HoveringWordsBackdrop list={techStack} />}
                    labels={Array(1).map((_, a) => { return { label: a + '', position: a } })}
                >
                    {
                        techStack.map((r, j) => (
                            <Fragment key={j}>
                                <Tween to={{ x: getHoverDistance(j) }} target={"r" + (j + 1)} position="0" />
                                {
                                    [...r.slice(-2), ...r, ...r.slice(0, 2)].map((_, i) => (
                                        <Tween key={i} from={{ opacity: randoms[j][i].from }} to={{ opacity: randoms[j][i].to }} target={`r${j + 1}w${i + 1}`} position="0" />
                                    ))
                                }
                            </Fragment>
                        ))
                    }
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene8;