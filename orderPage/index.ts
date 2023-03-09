debugger
const cartStr = localStorage.getItem('cart');
if (cartStr != null) {
    const cartObj = JSON.parse(cartStr);

    const renderedOrders = renderOrders(cartObj)
    if (orderElement != null) {
        orderElement.innerHTML = renderedOrders
    }
}
