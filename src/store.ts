import { createEffect, createEvent, createStore } from "effector";
import { TodoProps } from "./Todo";

export const addTodo = createEvent<TodoProps>();
export const removeTodo = createEvent<number>();
export const changeComplete = createEvent<number>();
export const setTodos = createEvent<TodoProps[]>();

export const $todos = createStore<TodoProps[]>([{ value: '123qweqweqweqwe', complete: true, id: 5 }]);

$todos
    .on(setTodos, (state, payload) => payload)
    .on(addTodo, (state, payload) => [
        ...state,
        payload
    ])
    .on(removeTodo, (state, payload) => [
        ...state.filter(elem => elem.id !== payload)
    ])
    .on(changeComplete, (state, payload) => {
        const arr: TodoProps[] = [];

        state.map(elem => {
            if (elem.id !== payload) {
                arr.push(elem)
            } else {
                arr.push({ ...elem, complete: !elem.complete })
            };
        })

        return arr;
    })

const fetchTodos = createEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});