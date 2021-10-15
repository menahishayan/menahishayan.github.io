import { Scene } from 'react-scrollmagic'
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import './App.css'

const Scene5 = () => (
    <Scene pin>
        <section className="slide-5" style={{backgroundColor: '#f3f3f3'}}>
            <ScrollTrigger start="50px center" end="600px center" scrub={0.5} >
                <Timeline
                    target={
                        <div/>
                    }>
                </Timeline>
            </ScrollTrigger>
        </section>
    </Scene>
)

export default Scene5;