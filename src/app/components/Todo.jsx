'use client';
//할 일 데이터 관리

import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
    const [todos, setTodos] = useState('');

    const onUpdate = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    // 마운트시 useEffect

    useEffect(() => {
        // 로컬스토리지에서 데이터를 가져와서
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        //todos 상태에 저장
        setTodos(savedTodos);
    }, []);

    // todos 업데이트시
    useEffect(() => {
        //로컬스토리지에 데이터를 저장
        //jSON.stringify() 자바스크립트 값이나 객체를 JSON문자열로 변환
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (task) => {
        const newTodo = {
            id: todos.length + 1,
            isDone: false,
            task: task,
            createDate: new Date().toLocaleDateString(),
        };
        setTodos([newTodo, ...todos]);
    };

    return (
        <div className='flex flex-col gap-4 p-8'>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList
                mockTodoData={todos}
                onUpdate={onUpdate}
            />
        </div>
    );
};

export default Todo;
