import * as R from "ramda";
import React, {useCallback} from "react";
import {PizzaBasketItem} from "./PizzaBasketItem";

import { useDispatch, useSelector } from 'react-redux'
import { removePizzaFromBasket } from '../redux/reducers/basket/basket-actionCreators';
import { BasketState, State } from '../types';



export function PizzaBasket() {
    const dispatch = useDispatch();
    const basket = useSelector<State, BasketState>((state) => state.basket);
    const onRemovePizza = useCallback(
        (id: string) => dispatch(removePizzaFromBasket(id)),
        [dispatch]
    );

    return(
        <>
            {R.map(
                (p) => (
                    <PizzaBasketItem
                    _id={p._id}
                    onMinus={onRemovePizza}
                    key={p._id}
                    price={p.price}
                    name={p.name}
                    count={p.count}
                    />
                ),
            basket
            )}
        </>
    )
}
