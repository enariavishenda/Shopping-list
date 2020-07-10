import React from "react";
import ListItem from "../list-item";
import './todo-list.css';

const TodoList = ({ todos, onDel, onToggleImportant, onToggleDone }) => {

    const elementsTodos = todos.map((item) =>  {
        const { id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <ListItem
                {...itemProps}
                onDeleted={() => {
                    console.log('Deleted')
                    onDel(id)
                }}
                onListImportant={() => onToggleImportant(id)}
                onListDone={() => onToggleDone(id)}
            />
            </li>
        );
        // убираем лишнее свойство id передаваемое в ListItem
        //return (
         //  <li key={item.id}><ListItem
         //       label={item.label}
         //       important={item.important}/>
         //   </li>
        //);
    })

    return (
        <ul className="list-group  todo-list">
            {elementsTodos}
        </ul>
    );
}

export default TodoList;