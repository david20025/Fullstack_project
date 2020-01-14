// import React, {Component} from 'react';
// import './style.css';
// import Open_menu from "./js/open-menu.js"
// import Picturefill from "./js/picturefill.min.js"
import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import {Link} from "react-router-dom";
import './style.css';
import Log from '../img/Log.png'
import Was_now from '../img/Was_now.png'
import Name from '../img/Name.png'
// import icon_tick from './img/icon-tick.svg'

class General extends Component {

    // render() {
    //
    //     let userDiv = null;
    //     if (!this.props.user_name) {
    //         userDiv = (
    //             <div className={'user_div'}>
    //                 <div className={'enter button'}
    //                      onClick = {e => {
    //                          e.preventDefault();
    //                          this.props.onEnterClick('Вы: ' + 'Вася Пупкин');
    //                      }}
    //                 >
    //                     Войти
    //                 </div>
    //                 <div className={'register button'}>
    //                     Зарегистрироваться
    //                 </div>
    //             </div>
    //         );
    //     }
    //     else {
    //         userDiv = (
    //             <div className={'user_div'}>
    //                 <span>{this.props.user_name}</span>
    //                 <div
    //                     className={'escape button'}
    //                     onClick={e => {
    //                         e.preventDefault();
    //                         this.props.onEscapeClick();
    //                     }}
    //                 >
    //                     Выйти
    //                 </div>
    //             </div>
    //         );
    //     }
    //
    //
    //     return (
    //         <header>
    //             <div className="left_part">
    //                 <h1>Minusyara</h1>
    //                 <nav className="primary-nav">
    //                     <ul>
    //                         <li className="typical">
    //                             {/*<Link to="/gallery">Галерея</Link>*/}
    //                             {/*<Link to="/gallery">Галерея</Link>*/}
    //                             {/*<Link to="/gallery">Галерея</Link>*/}
    //                             {/*<Link to="/gallery">Галерея</Link>*/}
    //                             <a href="/">Главная</a>
    //                         </li>
    //                         <li className="typical"><a href="../About us/">О нас</a></li>
    //                         <li className="typical"><a href="../services/">Приложение</a></li>
    //                         <li className="typical"><a href="../contact/">Помощь</a></li>
    //                     </ul>
    //                 </nav>
    //             </div>
    //             <div className="header-right">
    //                 {userDiv}
    //             </div>
    //         </header>
    //     );
    // }
    // );
    // <header>
    //     <div className="header-name">
    //         <a href="/">Minusyara</a>
    //         <form name="login" action="#" method="get">
    //             <table width="100%" cellSpacing="0" cellPadding="4">
    //                 <tr>
    //                     <td align="right" width="100">Логин:</td>
    //                     <td><input type="text" name="login" maxLength="50" size="20"/></td>
    //                 </tr>
    //                 <tr>
    //                     <td align="right">Пароль:</td>
    //                     <td><input type="password" name="password" maxLength="50" size="20"/></td>
    //                 </tr>
    //                 <tr>
    //                     <td></td>
    //                     <td><input name="go" type="submit" value="Войти"/></td>
    //                 </tr>
    //             </table>
    //         </form>
    //     </div>
    //     <div className="main-menu">
    //         <nav className="main-nav">
    //             <ul>
    //                 <li><a href="/">Главная</a></li>
    //                 <li><a href="../About us/">О нас</a></li>
    //                 <li><a href="../services/">Приложение</a></li>
    //                 <li><a href="../contact/">Помощь</a></li>
    //             </ul>
    //         </nav>
    //     </div>
    // </header>
    render() {
        return (
            <body>

            <div style={{display: "none"}}>
                <include src="build/img/sprite.svg"/>
            </div>

            <header className="page-header page-header--initial">
                <div className="page-header__wrapper">

                    <Link to='/' className="page-header__logo">
                        <picture>
                            <img src={Log} width="191" height="39" alt="Логотип Musofon"/>
                        </picture>
                    </Link>

                    <nav className="page-header__nav main-nav main-nav--closed main-nav--nojs">
                        <ul className="main-nav__list site-list">
                            <li className="site-list__item site-list__item--active">
                                <a className="site-list__link">Главная</a>
                            </li>
                            <li className="site-list__item">
                                <Link className="site-list__link" to="/form">Вход / Регистрация</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>

            <main className="page-main page-main--initial">

                <div className="page-main__top">
                    <h1 className="page-main__title">Подбор и обработка аудиотреков</h1>
                    <p className="page-main__slogan">Не знаешь, что подарить?</p>
                </div>

                <div className="page-main__container">

                    <Link className="page-main__button" to="/form">Подобрать аудио</Link>

                    <section className="programs">
                        <h2 className="visually-hidden">Программы</h2>
                        <ul className="programs__list">
                            <li className="programs__item program">
                                <h3 className="program__title">Любитель</h3>
                                <p className="program__text">
                                    Вам нравится петь, но вы боитесь скомпрометировать себя в кругу друзей или родных?
                                    Мы подберем вам трек, с которым ваше выступление пройдет на ура!
                                </p>
                                <Link className="program__link" to="/form">Найти решение</Link>
                            </li>
                            <li className="programs__item program">
                                <h3 className="program__title">Профессионал</h3>
                                <p className="program__text">
                                    Вы занимаетесь вокалом многие годы, но ваш репертуар пора обновить? Наша
                                    профессиональная команда подберет лучшее для вашего тембра!
                                </p>
                                <Link className="program__link" to="/form">Найти решение</Link>
                            </li>
                        </ul>
                    </section>

                    <section className="info">
                        <h2 className="info__title">Как это работает</h2>
                        <ul className="info__list">
                            <li className="info__item">
                                <p className="info__text">Вы предоставляете нам информацию о желаемом результате.</p>
                                <p className="info__big">1</p>
                            </li>
                            <li className="info__item">
                                <p className="info__text">Мы применяем новейшие технологии анализа и обработки
                                    звука.</p>
                                <p className="info__big">2</p>
                            </li>
                            <li className="info__item">
                                <p className="info__text">Одна-две проб, на которых вы сможете внести дополнительные комментарии и уточнения.</p>
                                <p className="info__big">3</p>
                            </li>
                            <li className="info__item">
                                <p className="info__text">Уже через неделю наслаждайтесь идеальным сочетанием своего
                                    голоса и нашей аранжировки!</p>
                                <p className="info__big">4</p>
                            </li>
                        </ul>
                    </section>
                </div>

                <section className="example">
                    <div className="example__container">
                        <div className="example__wrapper">
                            <h2 className="example__title">Живой пример</h2>
                            <p className="example__text">
                                Валерий много работал над собой, над своим имиджем и своим голосом. И ему удалось
                                приобразиться. Будь как Валерий, а мы поможем!
                            </p>
                            <div className="example__stats stats">
                                <div className="stats__weight weight">
                                    <span className="success__number">3 Х</span>
                                    <span className="success__text">Успеха</span>
                                </div>
                                <div className="stats__period period">
                                    <span className="period__days">7 дней</span>
                                    <span className="period__text">затрачено времени</span>
                                </div>
                                <div className="stats__cost">
                                    <p className="stats__text">Затраты:</p>
                                    <p className="stats__money">100 руб.</p>
                                </div>
                            </div>
                        </div>

                        <div className="example__slider slider">
                            <ul className="slider__list">
                                <li className="slider__item condition">
                                    <picture>
                                        <img className="condition__photo condition__photo--after"
                                             src={Was_now}
                                             alt="Развитие Валеры"/>
                                    </picture>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
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

                        <nav className="page-header__nav main-nav main-nav--closed main-nav--nojs">
                            <button className="main-nav__toggle" type="button">
                                <span className="visually-hidden">Открыть меню</span>
                            </button>
                            <ul className="main-nav__list site-list">
                                <li className="site-list__item site-list__item--active">
                                    <a className="site-list__link">Главная</a>
                                </li>
                                <li className="site-list__item">
                                    <Link className="site-list__link" to="/form">Вход / Регистрация</Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </footer>

            {/*<script src={Open_menu}/>*/}
            {/*<script src={Picturefill}/>*/}

            </body>
        );
    }
}

export default General;
