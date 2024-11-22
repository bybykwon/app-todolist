'use client';

import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '../data/todoData'; // 명시적 import

const Todo = () => {
    const [todos, setTodos] = useState(mockTodoData);

    // 할 일 업데이트 함수 (완료 상태 토글)
    const onUpdate = (id) => {
        setTodos(
            todos.map(
                (todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo) // 상태 토글
            )
        );
    };

    // 할 일 추가 함수
    const addTodo = (task) => {
        setTodos([
            ...todos,
            { id: todos.length + 1, isDone: false, task: task, createDate: new Date().toLocaleDateString() },
            setTodos([newTodo, ...todos]),
        ]);
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
