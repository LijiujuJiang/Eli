//1.导入react
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import Counter from './counter_state与onclick事件'
import Input from './input_表单事件'
import Weather from './isHot'
import Student from './props_类使用'
import Student1 from './props_函数使用'
import './index.css'

//条件渲染,三元表达式
const isLoading = false;
const loadData = () => {
  //   if (isLoading) {
  //     return <div>loading...</div>
  //   }
  //   return <div>数据加载完成！</div>

  return isLoading ? (<div>loading...</div>) : (<div>数据加载完成！</div>)
}

//列表渲染
const songs = [
  { id: 1, name: '111' },
  { id: 2, name: '222' },
  { id: 3, name: '333' },
]
//map函数映射
const list = (
  <ul>
    {songs.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
)



const p = [{ name: "11", age: 18, sex: "男" },
{ name: "Alice", sex: "女" },
{ name: "bob", age: 22 },]

// const people = (
//   <ul>{
//     p.map(item => <li key={item.name}>{item.name},{item.age},{item.sex}</li>)
//   }</ul>

// )

function speak() {
  console.log('lll');
}

//2.创建react元素
const title1 = (

  <div>
    <div className="top">{<Navbar />}</div>
    <div className="banner">
      {p.map((person, index) => (
        <Student1 key={index} {...person} />
      ))}
      {<Student1 name="J" age={20} />}
    </div>
    <div className="box">

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li className="item">4</li>
      </ul>
    </div>
    <div className="footer"><Counter /><Input /><Weather /></div>
  </div >
)



//3.渲染react元素
ReactDOM.render(title1, document.getElementById('root'))
