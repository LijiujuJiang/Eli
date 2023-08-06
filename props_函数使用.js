import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

function Student1(props) {
    console.log(props);

    return (
        <div>
            <ul>
                <li>
                    姓名：{props.name}<br />
                    年龄：{props.age}<br />
                    性别：{props.sex}
                </li>

            </ul>
        </div>
    )
}
Student1.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func
}
Student1.defaultProps = {
    sex: "6", // 设置默认性别属性为 "6"
    age: 18,
}
export default Student1