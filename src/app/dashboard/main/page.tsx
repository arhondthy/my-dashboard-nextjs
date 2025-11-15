import { SimpleWidget } from '@/components/SimpleWidget'
import WidgetGrid from '@/components/WidgetGrid'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Admin dashboard',
    description: 'dashboard de administracion',
}
const page = () => {
    return (
        <div className='text-black'>
            <div className='mt-2 text-3xl'>Dashboard</div>
            <span className='text-xl '>Informacion general</span>
            <WidgetGrid />

        </div>
    )
}

export default page
