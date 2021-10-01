import { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollMagic from 'scrollmagic';

function App() {
    useEffect(() => {
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
            triggerElement: '#header',
        })
            .setPin('#logo'); // the element we want to pin

        // Add Scene to ScrollMagic Controller
        controller.addScene(scene);

        var slides = document.querySelectorAll("section.content");

        for (var i = 0; i < slides.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
                .setPin(slides[i], { pushFollowers: false })
                .addTo(controller);
        }
    }, [])

    return (
        <div className="App">
            <section className="App-header" id="header" >
                <img src={logo} className="App-logo" alt="logo" id="logo" />
                {
                    [...Array(3)].map((a, i) => (
                        <div key={i} style={{ margin: 50 }}>Lorem Ipsum dolor sit amet</div>
                    ))
                }
            </section>
            <section className="content" style={{ backgroundColor: 'white' }}>
                <img src={logo} className="App-logo" alt="logo" />
                {
                    [...Array(3)].map((a, i) => (
                        <div key={i} style={{ margin: 50 }}>Lorem Ipsum dolor sit amet</div>
                    ))
                }
            </section>
            <section  className="content" style={{ backgroundColor: 'grey' }}>
                <img src={logo} className="App-logo" alt="logo" />
                {
                    [...Array(3)].map((a, i) => (
                        <div key={i} style={{ margin: 50 }}>Lorem Ipsum dolor sit amet</div>
                    ))
                }
            </section>
            <section  className="content" style={{ backgroundColor: 'white' }}>
                <img src={logo} className="App-logo" alt="logo" />
                {
                    [...Array(3)].map((a, i) => (
                        <div key={i} style={{ margin: 50 }}>Lorem Ipsum dolor sit amet</div>
                    ))
                }
            </section>
        </div>
    );
}

export default App;
