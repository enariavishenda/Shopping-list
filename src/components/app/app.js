import React, { Component } from 'react';
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import Footer from "../footer";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../item-add-form/item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100;  //генерит айдишки сервер, поэтому мы просто взяли 100

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    state={
        todoData : [
            this.createTodoItem('кровать'),
            this.createTodoItem('трубы в ванную и кухню'),
            this.createTodoItem('туалет'),
            this.createTodoItem('кран с душем в ванную'),
        ],
        term: '',
        filter:'all' //все, сделанные, активные
    }

    deleteListItem = (id) => {
        console.log(id)
        this.setState(({ todoData }) => {

            const id_i = todoData.findIndex((el) => el.id === id);
            console.log('id_i ' + id_i)
            //неьзя изменять сам TodoData, нужно создать копию, без элемента id_i, не изменяя существующий массив, нельзя изменять существующий State
            //[a, b, c, d, e]
            //[a, b,    d, e]
            const before = todoData.splice(0, id_i) // [ a, b ]
            const after = todoData.splice(id_i + 1) // [ d, e ]
            const newTodoData = [ ...before, ...after ]; // [ a, b, d,  ]
            //вернем новый массив
            return {
                todoData: newTodoData
            }
            //неизменность State
        })
    }
    addItemList = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            //add element in array ?
            const newItemData = [ ...todoData, newItem]
            return {
                todoData: newItemData
            }
        })
    }
    toggleProperty(arr, id, propName) {
        const id_i = arr.findIndex((el) => el.id ===id)

        //update object
        const oldItem = arr[id_i]
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]}
        //construct new array
        const newArray = [
            ...arr.slice(0, id_i),
            newItem,
            ...arr.slice(id_i+1)
        ]
        return newArray
    }
    onDone = (id) => {
        this.setState(({ todoData }) =>{
            return{
                todoData: this.toggleProperty(todoData,id,'done')
            }
            })
    }
    onImportant = (id) => {
        this.setState(({ todoData }) =>{
            return{
                todoData: this.toggleProperty(todoData,id,'important')
            }//обновили state в одной строке(toggleProperety),
            //обновили элемент внутри массива, когда нам нужно сменить свойство объекта, самый сложный кейс обновления State - если в State есть массив, внутри этого массива находятся объекты, и нужно сменить свойство одного объекта, главное не изменить ни один элемент старого State

        })
    }
    search(data, term) {
        console.log(data)
        if (term.lenght ===0){
            return data
        }
        else return data.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    onSearch = (term) => {
        this.setState({ term })
    }

    filter(items, filter) {
        switch (filter) {       //заменяет несколько if
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items;
        }

    }
    onfilterButton = (filter) => {
        this.setState({ filter })
    }

    render () {
        const {todoData, term, filter} = this.state
        const visibleItems = this.filter(this.search(todoData, term), filter)

        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.length - doneCount
        return (
            <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel OnFilter={this.onSearch}/>
                <ItemStatusFilter
                    FilterButton={filter}
                    ButtonChange={this.onfilterButton}
                />
            </div>
            <TodoList
                todos={visibleItems}
                onDel={this.deleteListItem}
                //когда мы кликаем на кнопку(событие кнопки) в List-Item, мы вызываем функцию которую нам передал Todo-List, Todo-List в свою очередь вызывает функцию. которую передал App, таким образом App узнает о том, что один из List-Item решил удалиться (его id). Теперь нам нужно состояние App, чтобы он состояние компонента именилась и React заново вызывает функцию render, функция рендер возвраает новую структуру для нашего компонента, Реакт запускает реконсилейшен алгоритм и находит что изменился только класс, и обновляет егов DOM дереве
                onToggleImportant={this.onImportant}
                onToggleDone={this.onDone}
            />
            <AddItem onAdd={this.addItemList}/>
            <Footer/>
        </div>
        )

    }
}