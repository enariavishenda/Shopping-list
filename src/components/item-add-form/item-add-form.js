import React, {Component} from "react";
import './item-add-form.css'

export default class AddItem extends Component {

    state = {
        label: ''
    }

    labelChange = (event) => {
        console.log(event.target.value)
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        //отмена перезагрузки страницы, благодаря объекту event в event listener

        event.preventDefault()
        //if (!this.state.label === /  /)
        if (this.state.label === '')
        {
            console.log('Введите название товара')
        }
        else
            {
                console.log('else ' + typeof(event.target.value) + event.target.value)
                this.addItem()
                this.setState({
                    label:''
                })
            }
    }

    addItem = () => {
        const { onAdd } = this.props
        onAdd(this.state.label)
    }

    render () {
        return (
        <form className="item-add-form d-flex"
              onSubmit={this.onSubmit}>
            <input type="text"
                   className="form-control"
                   onChange={this.labelChange}
                   placeholder="Что нужно купить?"
                   value={this.state.label}
            />
            <button type="button"
                    className="btn btn-outline-info"
                    onClick={this.onSubmit}>
                Добавить
            </button>
        </form>
        )
    }
}
