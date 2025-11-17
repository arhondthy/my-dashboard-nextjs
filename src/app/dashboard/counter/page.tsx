import CartCounter from '@/shoppingCart/component/cartCounter';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'shopping cart',
    description: 'un contador'
};

const counterPage = () => {

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Productos en carrito</span>
            <CartCounter />

        </div>
    )
}

export default counterPage
