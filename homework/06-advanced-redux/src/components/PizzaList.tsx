import React, { useCallback } from "react";
import { PizzaItem } from "./PizzaItem";
import * as R from "ramda";

import { useDispatch, useSelector } from 'react-redux';
import { State, Pizza } from '../types';
import { addPizza } from '../redux/reducers/basket/basket-reducer';


export function PizzaList() {
    const dispatch = useDispatch();
    const pizzas = useSelector<State, Pizza[]>((state) => state.pizza);
    
    const onAdd = useCallback(
        (id: string) => dispatch(addPizza(id)),
        [dispatch]
    );

    return (
        <>
            {R.map((p) =>
                <PizzaItem
                    key={p._id}
                    _id={p._id}
                    name={p.name}
                    price={p.price}
                    onAdd={onAdd}
                />, pizzas)
            }
        </>
    )
}
