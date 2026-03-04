'use client'
import { IoCart } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'


export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count)
    return (
        <div className="flex flex-wrap p-2 items-center justify-around">
            <SimpleWidget title={count} label='Counter' subTitle='Cart shopping count' icon={<IoCart size={40} />} href='/dashboard/counter' />

        </div>
    )
}
