// src/store/sagas/cartSaga.ts
import { takeEvery } from 'redux-saga/effects';
import { addToCart } from '../slices/cartSlice';

function* handleAddToCart(action: ReturnType<typeof addToCart>) {
    try {
        console.log('Saga: Đã xử lý action "addToCart" thành công, gửi dữ liệu lên server.', action.payload);
    } catch (error) {
        console.error('Saga: Lỗi khi thêm sản phẩm vào giỏ hàng', error);
    }
}

export function* cartSaga() {
    yield takeEvery(addToCart.type, handleAddToCart);
}