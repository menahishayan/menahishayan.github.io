import { Controller, Scene } from 'react-scrollmagic'
import './App.css'

import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'
import Scene6 from './Scene6'
import Scene7 from './Scene7'
import Scene8 from './Scene8'
import Scene9 from './Scene9'

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
            <Scene8 />
            <Scene9 />
            <Scene pin><section style={{ backgroundColor: 'white' }}><h1>End Scene</h1></section></Scene>
        </Controller>
    )
}

export default App;
