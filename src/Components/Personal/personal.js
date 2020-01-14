import React, {Component} from 'react';
import './style.css';
import Log from '../img/Log.png'
import Was_now from '../img/Was_now.png'
import Name from '../img/Name.png'


class Personal extends Component {
    render() {
        return (
            <body>

            <div style={{display: "none"}}>
                <include src="build/img/sprite.svg"/>
            </div>

            <header className="page-header">

                <a className="page-header__logo" href="index.js">
                    <picture>
                        <source media="(min-width: 1300px)" srcSet={Log}/>
                            <source media="(min-width: 768px)" srcSet={Log}/>
                                <img src={Log} width="191" height="39"
                                     alt="Логотип Musofon"/>
                    </picture>
                </a>

                <nav className="page-header__nav main-nav main-nav--closed main-nav--nojs">
                    <button className="main-nav__toggle" type="button">
                        <span className="visually-hidden">Открыть меню</span>
                    </button>
                    <ul className="main-nav__list site-list">
                        <li className="site-list__item">
                            <a className="site-list__link" href="index.js">Главная</a>
                        </li>
                        <li className="site-list__item">
                            <a className="site-list__link" href="form.js">Вход / Регистрация</a>
                        </li>
                    </ul>
                </nav>

            </header>

            <main className="page-main">
                <h1 className="page-main__title">Подбор программы</h1>
                <p className="page-main__text">Заполните анкету и мы подберем необходимый трек</p>

                <form className="selection" action="https://echo.htmlacademy.ru" method="post">

                    <div className="selection__wrapper">
                        <fieldset className="selection__group cat">
                            <p className="selection__item">
                                <label className="cat__data" htmlFor="cat-name">Имя:*</label>
                                <input className="cat__text" type="text" name="name" id="cat-name" placeholder="Роман"
                                       required/>
                            </p>
                            <p className="selection__item">
                                <label className="cat__data" htmlFor="cat-age">Возраст:</label>
                                <input className="cat__text" type="text" name="age" id="cat-age" placeholder="27"/>
                            </p>
                        </fieldset>

                        <fieldset className="selection__group purpose">
                            <ul className="selection__list">
                                <li className="selection__item">
                                    <input className="visually-hidden purpose__radio" type="radio" name="purpose"
                                           value="Похудение" id="fat" checked/>
                                        <label className="purpose__data" htmlFor="fat">Поп</label>
                                </li>
                                <li className="selection__item">
                                    <input className="visually-hidden purpose__radio" type="radio" name="purpose"
                                           value="Набор массы" id="thin"/>
                                        <label className="purpose__data" htmlFor="thin">Джаз</label>
                                </li>
                                <li className="selection__item">
                                    <input className="visually-hidden purpose__radio" type="radio" name="purpose"
                                           value="Не знаю (Нужен ваш совет)" id="advice"/>
                                        <label className="purpose__data" htmlFor="advice">Классика</label>
                                </li>
                            </ul>
                        </fieldset>
                    </div>

                    <fieldset className="selection__group owner">
                        <legend className="selection__parameter">Контакты</legend>
                        <div className="owner__wrapper">
                            <p className="selection__item">
                                <label className="owner__data" htmlFor="owner-email">E&#8209;mail:*</label>
                                <input className="owner__text" type="email" name="email" id="owner-email"
                                       placeholder="musofon@mail.ru" required/>
                                    <svg className="owner__mail" width="18" height="14">
                                        <use href="img/sprite.svg#icon-mail"/>
                                    </svg>
                            </p>
                            <p className="selection__item">
                                <label className="owner__data" htmlFor="owner-tel">Телефон:*</label>
                                <input className="owner__text" type="tel" name="tel" id="owner-tel"
                                       placeholder="8 (960) 900-60-90" required/>
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
                                       name="sugarsubstitute" id="sugar" checked/>
                                    <label className="additionally__data" htmlFor="sugar">Музыкальный слух</label>
                            </li>
                            <li className="selection__item">
                                <input className="visually-hidden additionally__checkbox" type="checkbox" name="water"
                                       id="water"/>
                                    <label className="additionally__data" htmlFor="water">Чувство ритма</label>
                            </li>
                            <li className="selection__item">
                                <input className="visually-hidden additionally__checkbox" type="checkbox" name="milk"
                                       id="milk"/>
                                    <label className="additionally__data" htmlFor="milk">Широкий диапазон</label>
                            </li>
                            <li className="selection__item">
                                <input className="visually-hidden additionally__checkbox" type="checkbox"
                                       name="vitamins" id="vitamins"/>
                                    <label className="additionally__data" htmlFor="vitamins">Дорожка караоке</label>
                            </li>
                        </ul>
                    </fieldset>

                    <div className="selection__wrapper-bottom">
                        <button className="selection__button" type="submit">Отправить заявку</button>
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

                        <a className="page-footer__logo" href="index.js">
                            <img src={Name} width="128" height="24" alt="Логотип Musofon"/>
                        </a>

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