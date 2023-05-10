import react, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DECREAMENT, INCREAMENT } from '../redux/actions/types';

export default function Counter(){

    const countState = useSelector(state=> state.count)
    const dispatch = useDispatch();
    const handleIncrement =()=>{
        dispatch({
            type:INCREAMENT
        });
    }
    const handleDecrement =()=>{
        dispatch({
            type:DECREAMENT
        })
    }
    return (
        <div>
            <p>{countState}</p>

            <button onClick={handleIncrement}>
                Increment
            </button >
            <button  onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    );
}