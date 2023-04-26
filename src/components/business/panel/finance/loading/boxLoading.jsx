import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export function BoxFinanceLoading(){
    return (
        <div className='item-small-finance'>
            <h3><Skeleton /></h3>
            <h1><Skeleton /></h1>

            <span> <Skeleton /> </span>
        </div>
    )
}