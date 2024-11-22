'use client';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState(''); // task 상태 정의
    const inputRef = useRef(); // input에 포커스를 위한 ref

    // 입력값 변경 핸들러
    const onChangeTask = (e) => {
        setTask(e.target.value);
    };

    // 제출 핸들러
    const onSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지

        // 빈 입력 방지
        if (!task.trim()) return;

        // 할 일 추가
        addTodo(task);

        // 입력창 초기화 및 포커스
        setTask('');
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        value={task}
                        ref={inputRef}
                        onChange={onChangeTask}
                        placeholder='할 일을 입력하세요.'
                        className='p-3 text-black border rounded'
                    />
                    <button
                        type='submit'
                        disabled={!task.trim()} // 빈 입력값이나 공백만 있을 때 비활성화
                        className={classNames('p-3 ml-2 rounded', task.trim() ? 'bg-blue-300' : 'bg-gray-300')}
                    >
                        할 일 추가
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TodoEditor;
