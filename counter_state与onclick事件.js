import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         count:0
    //     }

    // }

    //简化 初始化state
    state = {
        count: 0
    }

    constructor() {
        super()
        this.handleClick1 = this.handleClick1.bind(this)
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleClick1() {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleClick2 = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}> */}

                {/* 箭头函数解决this指向问题 */}
                <button onClick={() => this.handleClick()}>箭头函数</button>
                {/* 添加构造，利用bind */}
                <button onClick={this.handleClick1}>bind</button>
                {/* class实例 */}
                <button onClick={this.handleClick2}>class实例</button>

            </div>

        )
    }
}

export default Counter