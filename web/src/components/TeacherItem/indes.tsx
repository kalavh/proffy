import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/45084197?s=460&u=5a97cbbd0615c948d60df62f1fbb9c06eecb1fcc&v=4"/>
            <div>
                <strong> Jefferson Ferreira</strong>
                <span>Math</span>
            </div>
        </header>
        <p> I Always try to learn new things even if i'm not good enough</p>
        <p> I will try teatch you Math please call me on whatsapp </p>
        <footer>
            <p> price(hour) <strong>5,00 US$</strong></p>
            <button type= "button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Call for him on whatsapp
            </button>
        </footer>
    </article>)
}

export default TeacherItem