// pages/index.js
'use client'; // 이 줄을 추가하여 클라이언트 컴포넌트로 명시합니다.

import useState from 'react';

export default function Home() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (todo) {
            setTodos([...todos, { text: todo, date: new Date().toLocaleDateString() }]);
            setTodo('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className='max-w-3xl mx-auto p-6'>
            <h1 className='text-3xl font-bold text-center mb-6'>Todo List</h1>

            {/* Todo Editor */}
            <div className='mb-4'>
                <input
                    type='text'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder='새로운 Todo 작성하기 ✏️'
                    className='w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                    onClick={handleAddTodo}
                    className='mt-3 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition'
                >
                    할 일 추가
                </button>
            </div>

            <h2 className='text-2xl font-semibold mb-4'>할 일 목록 📋</h2>

            {/* Todo List */}
            <div>
                {todos.map((todoItem, index) => (
                    <div
                        key={index}
                        className='flex justify-between items-center bg-gray-100 p-4 mb-3 rounded-lg shadow-md'
                    >
                        <span className='text-lg'>
                            {todoItem.text} - {todoItem.date}
                        </span>
                        <button
                            onClick={() => handleDeleteTodo(index)}
                            className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
