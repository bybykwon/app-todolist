//검색에 따라 필터링된 할 일 목록 표시

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import mockTodoData from './Todo';

const TodoList = () => {
    const [search, setSearch] = useState('');

    const filteredTodos = Array.isArray(mockTodoData)
        ? mockTodoData.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
        : [];

    return (
        <div>
            <h2>할 일 목록</h2>
            <input
                type='search'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                placeholder='검색어를 입력하세요.'
                className='p-3 text-black w-full'
            />
            {filteredTodos.length > 0 ? (
                <ul>
                    {filteredTodos.map((item) => (
                        <TodoItem
                            key={item.id}
                            isDone={item.isDone}
                            task={item.task}
                            createDate={item.createDate}
                        />
                    ))}
                </ul>
            ) : (
                <p>일치하는 항목이 없습니다.</p>
            )}
        </div>
    );
};

export default TodoList;
