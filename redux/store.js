import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})


/*
액션을 스토어로 디스패치하면 스토어는 리듀서를 호출하고 리듀서는 액션을 받아 수행한 후 리턴한다.
스토어는 상태를 업데이트하여 가진다.
Redux는 애플리케이션의 상태인 store를 단일 객체로 관리하며, 이 객체는 여러 부분으로 나누어 질 수 있다.
이 작은 부분으로 나누어진 것을 슬라이스라고 표현한다.
Redux 슬라이스는 특정 부분의 상태와 그 상태를 관리하기 위한 Reducer 및 Action Creator를 포함한다.
각 슬라이스는 고유한 이름을 가지며, 전체 애플리케이션 상태에서 해당 부분을 식별할 수 있도록 한다.
*/