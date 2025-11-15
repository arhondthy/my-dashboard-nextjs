'use client'
import React, { useEffect } from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store';
import { IoAdd, IoCartOutline, IoHourglass } from 'react-icons/io5';

const WidgetGrid = () => {

    const count = useAppSelector(state => state.counter.count);
    return (
        <div className='flex flex-wrap p-2'>
            <SimpleWidget
                title={count.toString()}
                subtitle='Contador productos'
                href='/dashboard/counter'
                label='contador'
                icon={<IoCartOutline size={70} className='text-blue-600' />}
            />

        </div>
    )
}

export default WidgetGrid
