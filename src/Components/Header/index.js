// import React, {Component} from 'react';
// import './style.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './style.css';

class Header extends Component {

    render() {

        let userDiv = null;
        if (!this.props.user_name) {
            userDiv = (
                <div className={'user_div'}>
                    <div className={'enter button'}
                        onClick = {e => {
                            e.preventDefault();
                            this.props.onEnterClick('Вы: ' + 'Вася Пупкин');
                        }}
                    >
                        Войти
                    </div>
                    <div className={'register button'}>
                        Зарегистрироваться
                    </div>
                </div>
            );
        }
        else {
            userDiv = (
                <div className={'user_div'}>
                    <span>{this.props.user_name}</span>
                    <div
                        className={'escape button'}
                        onClick={e => {
                            e.preventDefault();
                            this.props.onEscapeClick();
                        }}
                    >
                        Выйти
                    </div>
                </div>
            );
        }


        return (
            <header>
                <div className="left_part">
                    <h1>Minusyara</h1>
                    <nav className="primary-nav">
                        <ul>
                            <li className="typical">
                                {/*<Link to="/gallery">Галерея</Link>*/}
                                {/*<Link to="/gallery">Галерея</Link>*/}
                                {/*<Link to="/gallery">Галерея</Link>*/}
                                {/*<Link to="/gallery">Галерея</Link>*/}
                                <a href="/">Главная</a>
                            </li>
                            <li className="typical"><a href="../About us/">О нас</a></li>
                            <li className="typical"><a href="../services/">Приложение</a></li>
                            <li className="typical"><a href="../contact/">Помощь</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    {userDiv}
                </div>
            </header>
        );
    }
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
}

export default Header;