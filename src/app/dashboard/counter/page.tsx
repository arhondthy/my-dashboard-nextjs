import type { Metadata } from 'next';
import CartCounter from '@/app/shoppingCart/component/cartCounter'

export const metadata: Metadata = {
    title: 'shopping cart',
    description: 'un contador'
};

const counterPage = () => {

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Productos en carrito</span>
            <CartCounter value={20} />

        </div>
    )
}

export default counterPage
