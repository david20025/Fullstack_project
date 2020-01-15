import React, {Component} from 'react';
import './style.css';
import Log from '../img/Log.png'
import { Link } from "react-router-dom";
import Was_now from '../img/Was_now.png'
import Name from '../img/Name.png'
import {axios} from 'axios';


class Form extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }
    signIn(){
        axios.post('/signin', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    render() {
        return (
            <body>

            <div style={{display: "none"}}>
                <include src="build/img/sprite.svg"/>
            </div>

            <header className="page-header">

                <Link className="page-header__logo" to="/">
                    <picture>
                        <source media="(min-width: 1300px)" srcSet={Log}/>
                        <source media="(min-width: 768px)" srcSet={Log}/>
                        <img src={Log} width="191" height="39"
                             alt="Логотип Musofon"/>
                    </picture>
                </Link>

                <nav className="page-header__nav main-nav main-nav--closed main-nav--nojs">
                    <button className="main-nav__toggle" type="button">
                        <span className="visually-hidden">Открыть меню</span>
                    </button>
                    <ul className="main-nav__list site-list">
                        <li className="site-list__item">
                            <Link className="site-list__link" to="/">Главная</Link>
                        </li>
                        <li className="site-list__item site-list__item--active">
                            <a className="site-list__link">Вход / Регистрация</a>
                        </li>
                    </ul>
                </nav>

            </header>

            <main className="page-main">
                <h1 className="page-main__title">Вход</h1>
                <p className="page-main__text">Введите логин и пароль или зарегистрируйтесь</p>

                <form className="selection">

                    <div className="selection__wrapper">
                        <fieldset className="selection__group user">
                            <p className="selection__item">
                                <label className="user__data" htmlFor="user-name" >Логин: </label>
                                <input onChange={this.handleEmailChange} className="user__text" type="text" name="name" id="user-name"
                                       placeholder="musofon@mail.ru" required/>
                            </p>
                            <p className="selection__item">
                                <label className="user__data" htmlFor="password">Пароль: </label>
                                <input onChange={this.handlePasswordChange} className="user__text" type="text" name="password" id="password"
                                       placeholder="********" required/>
                            </p>
                        </fieldset>
                    </div>

                    <div className="selection__wrapper-bottom">
                        <button onClick={this.signIn} className="selection__button" type="submit">Войти</button>
                        <Link className="site-list__link" to="/personal">Зарегистрироваться</Link>
                    </div>

                </form>

            </main>

            <footer className="page-footer">


                <div className="page-footer__bottom">

                    <div className="page-footer__wrapper">

                        <Link className="page-footer__logo" to="/index.js">
                            <img src={Name} width="128" height="24" alt="Логотип Musofon"/>
                        </Link>

                    </div>
                </div>
            </footer>

            </body>
        );
    }
}

export default Form;
