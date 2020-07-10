import React from "react";
import "./app-header.css";

//обычная функция которая принимает объект со свойствами для компонента достаем путем деструктурируем сразу же нужные свойства из объекта Propereties чтобы затем использовать в коде компонента и возвращает эта функиця React элемент
//Ограничения - у Функций нет внутреннего состояния, нам некуда сохранить свойства компонента которые могут изменяться во время работы программы, к примеру счестчик.
//Нам необходимо состояние для одного компонента.
const AppHeader = ({toDo, done}) => {

    return (
        <div className="app-header">
            <nav className="navbar navbar-expand-md bg-info navbar-dark">
                <span className="navbar-brand">
                    <h4>Необходимые покупки</h4>
                 </span>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse"
                     id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link">
                                <h5>{toDo} еще нужно</h5>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                <h5>{done} сделано</h5>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )

}

export default AppHeader;