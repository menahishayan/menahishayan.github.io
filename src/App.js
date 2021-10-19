import { Controller, Scene } from 'react-scrollmagic'
import './App.css'

import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'
import Scene6 from './Scene6'
import Scene7 from './Scene7'

function App() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene1 />
            <Scene2 />
            <Scene3 />
            <Scene4 />
            <Scene5 />
            <Scene6 />
            <Scene7 />
            {
                ['white', '#f3f3f3'].map((c, i) => (
                    <Scene key={i} pin>
                        <section style={{ backgroundColor: c }}>
                            <h1>Slide {i + 8}</h1>
                        </section>
                    </Scene>
                ))
            }
        </Controller>
    )
}

export default App;
