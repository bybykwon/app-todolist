import React from 'react';

const TodoList = () => {
    return (
        <div>
            <h2>할 일 목록</h2>
            <ul>
                <li>
                    <strong>제목</strong>
                    <span>2024.11.22</span>
                    <button>삭제</button>
                </li>
                <li>
                    <strong>제목1</strong>
                    <span>2024.11.22</span>
                    <button>삭제</button>
                </li>
                <li>
                    <strong>제목2</strong>
                    <span>2024.11.22</span>
                    <button>삭제</button>
                </li>
            </ul>
        </div>
    );
};

export default TodoList;
