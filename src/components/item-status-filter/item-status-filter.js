import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'Все'},
        { name: 'active', label: 'Активные'},
        { name: 'done', label: 'Завершенные'}
    ]



    render() {

        const { FilterButton, ButtonChange } = this.props

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = FilterButton === name
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => ButtonChange(name)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="item-status btn-group">
                {buttons}
            </div>
        )
    }
}
