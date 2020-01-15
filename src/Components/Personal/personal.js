import React, {Component} from 'react';
import './style.css';
import Log from '../img/Log.png'
import { Link } from "react-router-dom";
import Was_now from '../img/Was_now.png'
import Name from '../img/Name.png'
import {axios} from "axios";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


class Personal extends Component {

    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            name:'',
            email:'',
            password:'',
            error: ''
        };
    }

    submitForm = async (e) => {
        e.preventDefault();
        const data = {
            'username': this.state.login,
            'email': this.state.email,
            'password': this.state.password
        };

        this.setState({
            'password': '',
            'error': ''
        });

        if (!data.username) {
            this.setState({
                error: 'Введите имя пользователя.'
            });
            return;
        }
        if (!data.password) {
            this.setState({
                error: 'Введите пароль.'
            });
            return;
        }
        if (!data.email) {
            this.setState({
                error: 'Введите email.'
            });
            return;
        }

        fetch('http://127.0.0.1:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.ok ? response.json() : Promise.reject(response);
            })
            .then(data => {
                localStorage.setItem('token', data['token']);
                this.props.enter(data.user);
            })
            .catch(response => {
                response.json().then(data => {
                    for (let i in Object.keys(data)) {
                        let error_array = data[Object.keys(data)[i]];
                        for (let j in error_array) {
                            this.setState({
                                error: error_array[j]
                            });
                        }
                    }
                });
            });
    };

    signUp(){
        axios.post('http://localhost:8000//signup', {
            name: this.state.name,
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
    render() {
        let errorText = '';
        if (this.state.error) {
            errorText = (
                <Label style={{color: 'red'}}>{this.state.error}</Label>
            );
        }
        return (
            <body>

            <div style={{display: "none"}}>
                <include src="build/img/sprite.svg"/>
            </div>

            <header className="page-header">

                <Link className="page-header__logo" to="/index.js">
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
                            <Link className="site-list__link" to="/index.js">Главная</Link>
                        </li>
                        <li className="site-list__item">
                            <Link className="site-list__link" to="/form">Вход / Регистрация</Link>
                        </li>
                    </ul>
                </nav>

            </header>

            <main className="page-main">
                <h1 className="page-main__title">Подбор программы</h1>
                <p className="page-main__text">Заполните анкету и мы подберем необходимый трек</p>

                <form className="selection">

                    <div className="selection__wrapper">
                        <fieldset className="selection__group user">
                            <p className="selection__item">
                                <label className="user__data" htmlFor="user-name">Имя:* </label>
                                <input onChange={this.handleNameChange} className="user__text" type="text" name="name" id="user-name" placeholder="Роман"
                                       required/>
                            </p>
                            <p className="selection__item">
                                <label className="user__data" htmlFor="age">Возраст:</label>
                                <input className="user__text" type="text" name="age" id="age" placeholder="27"/>
                            </p>
                        </fieldset>

                        <fieldset className="selection__group purpose">
                            <ul className="selection__list">
                                <li className="selection__item">
                                    <input className="visually-hidden purpose__radio" type="radio" name="purpose"
                                           value="Поп" id="pop" checked/>
                                        <label className="purpose__data" htmlFor="pop">Поп</label>
                                </li>
                                <li className="selection__item">
                                    <input className="visually-hidden purpose__radio" type="radio" name="purpose"
                                           value="Джаз" id="jazz"/>
                                        <label className="purpose__data" htmlFor="jazz">Джаз</label>
                                </li>
                                <li className="selection__item">
                                    <input className="visually-hidden purpose__radio" type="radio" name="purpose"
                                           value="Классика" id="classic"/>
                                        <label className="purpose__data" htmlFor="classic">Классика</label>
                                </li>
                            </ul>
                        </fieldset>
                    </div>

                    <fieldset className="selection__group owner">
                        <legend className="selection__parameter">Контакты</legend>
                        <div className="owner__wrapper">
                            <p className="selection__item">
                                <label className="owner__data" htmlFor="owner-email">E&#8209;mail:*</label>
                                <input onChange={this.handleEmailChange} className="owner__text" type="email" name="email" id="owner-email"
                                       placeholder="musofon@mail.ru" required/>
                                    <svg className="owner__mail" width="18" height="14">
                                        <use href="img/sprite.svg#icon-mail"/>
                                    </svg>
                            </p>
                            <p className="selection__item">
                                <label className="owner__data" htmlFor="owner-pwd">Пароль:*</label>
                                <input onChange={this.handlePasswordChange} className="owner__text" type="pwd" name="pwd" id="owner-pwd"
                                       placeholder="********" required/>
                                    <svg className="owner__phone" width="21" height="21">
                                        <use href="img/sprite.svg#icon-phone"/>
                                    </svg>
                            </p>
                        </div>
                    </fieldset>

                    <fieldset className="selection__group comment">
                        <legend className="selection__parameter">Комментарий</legend>
                        <textarea className="selection__item" name="comment" rows="5"
                                  placeholder="Расскажите обо всем, что вам важно в этой песне"></textarea>
                    </fieldset>

                    <fieldset className="selection__group additionally">
                        <legend className="selection__parameter">Дополнительно</legend>
                        <ul className="selection__list additionally__list">
                            <li className="selection__item">
                                <input className="visually-hidden additionally__checkbox" type="checkbox"
                                       name="musicalear" id="ear" checked/>
                                    <label className="additionally__data" htmlFor="ear">Музыкальный слух</label>
                            </li>
                            <li className="selection__item">
                                <input className="visually-hidden additionally__checkbox" type="checkbox" name="beat"
                                       id="beat"/>
                                    <label className="additionally__data" htmlFor="beat">Чувство ритма</label>
                            </li>
                            <li className="selection__item">
                                <input className="visually-hidden additionally__checkbox" type="checkbox" name="range"
                                       id="range"/>
                                    <label className="additionally__data" htmlFor="range">Широкий диапазон</label>
                            </li>
                            <li className="selection__item">
                                <input className="visually-hidden additionally__checkbox" type="checkbox"
                                       name="karaoke" id="karaoke"/>
                                    <label className="additionally__data" htmlFor="karaoke">Дорожка караоке</label>
                            </li>
                        </ul>
                    </fieldset>

                    <div className="selection__wrapper-bottom">
                        <button onSubmit={this.submitForm} className="selection__button" type="submit">Отправить заявку</button>
                        <p className="selection__text">* — Обязательные поля</p>
                    </div>

                </form>
            </main>

            <footer className="page-footer">

                <div className="page-footer__map">
                    <iframe className="page-footer__map-yandex"
                            src="https://krimmkr.carto.com/builder/1e866a05-8f2c-4df7-86ad-18d33bbfd2fe/embed"
                            allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen
                            msallowfullscreen/>
                </div>

                <div className="page-footer__bottom">

                    <div className="page-footer__wrapper">

                        <Link className="page-footer__logo" to="/index.js">
                            <img src={Name} width="128" height="24" alt="Логотип Musofon"/>
                        </Link>

                    </div>
                </div>
            </footer>

            {/*<script src="js/open-menu.js"></script>*/}
            {/*<script src="js/picturefill.min.js"></script>*/}

            </body>
        );
    }
}

export default Personal;
