import React from 'react'
import ReactDOM from 'react-dom'

class Weather extends React.Component {
    state = ({
        isHot: false
    })

    handleWeather = () => {
        this.setState({
            isHot: !(this.state.isHot)
        })
        alert('我变')
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleWeather}>今天天气很{this.state.isHot ? '热' : '冷'}</h1>
                <h2 onClick={demo}>666</h2>
                {/* 注意不是demo() */}
            </div>
        )
    }
}
function demo() {
    alert('666')
}
export default Weather