import React from "react";
import {PizzaPrice} from "./PizzaPrice";
import { useSelector } from 'react-redux';
import { State } from '../types';


export function TotalPrice() {
    const price = useSelector<State, number>((state) =>
      state.basket.reduce((acc, { price, count }) => acc + price * count, 0)
    );

    return (
        <div className="flex">
            <span>Total price:</span>
            <PizzaPrice price={price} />
        </div>
    );
}
