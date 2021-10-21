import './App.css'

import tensorflow from './images/tensorflow.svg'
import raspberry from './images/raspberry.svg'
import reactlogo from './images/react.svg'
import wslogo from './images/websocket.svg'
import python from './images/python.svg'
import pypi from './images/pypi.svg'
import github from './images/github.svg'
import linux from './images/tux.svg'

const _techBadges = {
    'IoT': { src: raspberry, color: 'rgba(188,17,66,1)', zoom: 1.3 },
    'TensorFlow': { src: tensorflow, color: 'rgba(229,91,44,1)' },
    'Websockets': { src: wslogo, color: 'rgba(254,102,0,1)' },
    'Python': { src: python, color: 'rgba(254,209,65,1)' },
    'PyPI': { src: pypi, color: 'rgba(254,209,65,1)', zoom: 1.4 },
    'GitHub': { src: github, color: 'rgba(0,0,0,1)' },
    'Linux': { src: linux, color: 'rgba(0,0,0,1)' },
    'React Native': { src: reactlogo, color: 'rgba(94,218,250,1)', zoom: 1.7 }
}

export const TechBadge = (props) => (
    <div className="tech-badge-container">
        <img src={props.src} className="tech-badge" alt={props.label} style={{ transform: `scale(${props.zoom || 1})`, cursor: props.url ? 'pointer' : 'default' }} onClick={() => { if (props.url) window.location.href = props.url }} />
        <span className="tooltiptext" style={{ backgroundColor: props.color }}>{props.label}</span>
    </div>
)

export const techBadges = props => props.map((t, i) => <TechBadge {...{ ..._techBadges[t.title ? t.title : t], label: t.title ? t.title : t, key: i, url: t.url || undefined }} />)