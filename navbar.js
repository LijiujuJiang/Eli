import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//组件在页面上调用
//函数组件+函数组件onclick写法(注意函数没有this!)
// function Navbar() {
//     function handleClick() {
//         console.log('click');
//     }
//     return (
//         <div className="bubble center">
//             <button onClick={handleClick}>111</button>
//             <a href="">主页</a>
//             <a href="">个人中心</a>
//             <a href="">联系客服</a>
//             <a href="">付款</a>
//             <a href="">购物车</a>
//         </div>
//     )
// }

//箭头函数的写法
const Navbar = () => (
    <div className="bubble center">
        <a href="">主页</a>
        <a href="">个人中心</a>
        <a href="">联系客服</a>
        <a href="">付款</a>
        <a href="">购物车</a>
    </div>
)
// export default Navbar

//class创建类组件+类组件onclick事件写法
class Navbar1 extends React.Component {
    handleClick() {
        console.log('点击事件')
    }
    handleClick1(e) {
        e.preventDefault()
        console.log('阻止网页默认行为');
    }
    render() {
        return (

            <div className="bubble center">

                <a href="" onClick={this.handleClick1}>主页</a>
                <a href="">个人中心</a>
                <a href="">联系客服</a>
                <a href="">付款</a>
                <a href="">购物车</a>
            </div>
        )
    }
}
export default Navbar1

//组件导出使用
// export default () => (
//     <div className="bubble center">
//         <a href="">主页</a>
//         <a href="">个人中心</a>
//         <a href="">联系客服</a>
//         <a href="">付款</a>
//         <a href="">购物车</a>
//     </div>
// )
