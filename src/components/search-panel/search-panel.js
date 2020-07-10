import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    state ={
        term: '' //и без этого работает
    }
    filterChange = (event) => {
        const term = event.target.value
        this.setState({term}) //и без этого работает
        this.props.OnFilter(term)
    }
    render() {
        const searchText = 'Поиск наименования товаров';
        return (<input type="text"
                       placeholder={searchText}
                       className="form-control search-input"
                       value={this.state.term} //и без этого работает
                       onChange={this.filterChange}
            // запомни className аналог class в html
            // htmlFor=""      //запомни аналог for в html
            // style={searchStyle} //редко будешь использовать, обычно через className и класса в css
            // disabled
        />)
    }
}