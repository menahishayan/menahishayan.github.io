import { Scene } from 'react-scrollmagic'
import { Tween, SplitChars, ScrollTrigger } from 'react-gsap';
import './App.css'

const Scene1 = () => (
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
)

export default Scene1;