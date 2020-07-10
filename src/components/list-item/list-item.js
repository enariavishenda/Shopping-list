import React, {Component} from "react";
import "./list-item.css";

//Компоненты-Классы с внутренним состоянием.

export default class ListItem extends Component {

    //удаляем State и setState функции done и important, т.к. данные теперь у App
    render() {

        const { label,
            onDeleted,
            onListImportant,
            onListDone,
            done,
            important } = this.props

        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        // const lispanStyle = {
        //     color: important ? '#d43939' : 'black',
        //     fontWeight: important ? 'bols' : 'normal',
        // }
        return <span className={classNames}>
        <span
            className="todo-list-item-label"
            // style={lispanStyle}
            onClick={ onListDone }>
            {/*onClick={ this.onLabelClick.bind(this) }> не красиво так привязывать намертво к this - создается новая функция которую оборачивает bind*/}
            {/*мы передаем функцию а не вызываем, без (), иначе выведет undefande*/}
            {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onListImportant }>
            <i className="fa fa-exclamation"/>
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}
        >
            <i className="fa fa-trash-o"/>
        </button>


    </span>
    }
}

//у Функций нет внутреннего состояния, нам некуда сохранить свойства компонента которые могут изменяться во время работы программы, к примеру счестчик.
/*
const ListItem = ( { label, important = false} ) => {

    const lispanStyle = {
        color: important ? '#bf3f3f' : 'black',
        fontWeightw: important ? 'bols' : 'normal',
    }
    return <span>

        <span
            className="todo-list-item-label"
            style={lispanStyle}>
            {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation-circle" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
        </button>


    </span>
}

export default ListItem
*/