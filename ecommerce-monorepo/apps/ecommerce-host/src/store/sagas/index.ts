// src/store/sagas/index.ts
import { all } from 'redux-saga/effects';
import { cartSaga } from './cartSaga';

export default function* rootSaga() {
    yield all([
        cartSaga(),
    ]);
}