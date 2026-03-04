
"use client";
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, substractOne, initCounter } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

interface Props {
  value?: number,
}

export interface CounterResponse {
  count: number;
}


const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json())

  return data
}


export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector(state => state.counter.count)

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounter(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter().then(({count}) => dispatch (initCounter(count)))
  }, [dispatch])
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center rounded-xl p-2 bg-gray-900 text-white hover:bg-gray-600 transition-all w-24 mr-2"
          onClick={() => dispatch(addOne())}
        >
          Agregar
        </button>
        <button
          className="flex items-center justify-center rounded-xl p-2 bg-gray-900 text-white hover:bg-gray-600 transition-all w-24 mr-2"
          onClick={() => dispatch(substractOne())}
          disabled={count === 0}
        >
          Remover
        </button>
      </div>
    </>

  )
}
