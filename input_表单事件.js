import React from 'react'
import ReactDOM from 'react-dom'

//受控组件的使用
class Input extends React.Component {
    state = [{
        txt: '',
        content: '',
        city: 'bj',
        isChecked: false,
    }, {}]
    changeTxt = (e) => {
        this.setState({
            txt: e.target.value
        })
    }
    handleContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleCheck = (e) => {
        this.setState({
            isChecked: e.target.checked
        })
    }
    handleWeather = (e) => {
        this.setState({
            isHot: !this.state.isHot
        })
    }

    //优化，用一个事件处理程序处理多个表单
    handleForm = (e) => {
        const target = e.target
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value
        const name = target.name
        this.setState({
            [name]: value
        }, () => {
            console.log('更新完毕！');
        })
    }
    render() {
        return (
            <div>
                {/* 文本框 */}
                <input type='text' name='txt' value={this.state.txt} onChange={this.handleForm} />
                <div>{this.state.txt}</div>
                {/* 富文本框 */}
                <textarea name='content' value={this.state.content} onChange={this.handleForm} />
                <div>{this.state.content}</div>
                {/* select */}
                <select name='city' value={this.state.city} onChange={this.handleForm}>
                    <option value="sh">上海</option>
                    <option value="bj">北京</option>
                    <option value="gz">广州</option>
                </select>
                {/* 复选框 */}
                <input name='isChecked' type='checkbox' checked={this.state.isChecked} onChange={this.handleForm} />
            </div>
        )
    }
}
export default Input