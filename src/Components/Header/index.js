import React, {Component} from 'react';
import './style.css';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="header-name">
                    <a href="/">Minusyara</a>
                    <form name="login" action="#" method="get">
                        <table width="100%" cellSpacing="0" cellPadding="4">
                            <tr>
                                <td align="right" width="100">Логин:</td>
                                <td><input type="text" name="login" maxLength="50" size="20"/></td>
                            </tr>
                            <tr>
                                <td align="right">Пароль:</td>
                                <td><input type="password" name="password" maxLength="50" size="20"/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input name="go" type="submit" value="Войти"/></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div className="main-menu">
                    <nav className="main-nav">
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="../About us/">О нас</a></li>
                            <li><a href="../services/">Приложение</a></li>
                            <li><a href="../contact/">Помощь</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;