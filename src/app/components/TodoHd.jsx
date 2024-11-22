// 오늘 날짜 표시

import React from 'react';
import * as dateFns from 'date-fns';
const TodoHd = () => {
    return (
        <div>
            <h2 className='text-2xl'>{dateFns.format(new Date(), 'yyyy.MM.dd')}</h2>
            <p className='text-2xl'>오늘 할 일을 적어보세요.</p>
        </div>
    );
};

export default TodoHd;
