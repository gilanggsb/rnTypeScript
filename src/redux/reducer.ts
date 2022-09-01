import Constant from '../constants/constant'

type CounterProps = {
    type: string;
}

export const initialData = {
    counter: 0
}

export const counterReducer = (state = initialData, action: CounterProps) => {
    switch (action.type) {
        case Constant.ACTION_INCREMENT:
            console.log(`increment`)
            return { ...state, counter: state.counter + 1 }
        case Constant.ACTION_DECREMENT:
            console.log(`decrement`)
            return { ...state, counter: state.counter - 1 }
        default:
            return state;
    }

}