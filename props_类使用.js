import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';


class Student extends React.Component {
    constructor(props) {
        //props的接收与传递取决于是否要在构造中用this访问prop
        super(props)
        console.log(props);
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        sex: PropTypes.string,
        age: PropTypes.number,
        speak: PropTypes.func
    }
    static defaultProps = {
        sex: "6", // 设置默认性别属性为 "6"
        age: 18,
    }
    state = {

    }
    render() {
        const { name, age, sex } = (this.props)
        //this.props.age=age+1  props只读，不能修改

        return (
            <div>
                <ul>
                    <li>
                        姓名：{name}<br />
                        年龄：{age + 1}<br />
                        性别：{sex}
                    </li>

                </ul>
            </div>
        )
    }


}

export default Student
