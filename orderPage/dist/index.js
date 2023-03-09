debugger;
var cartStr = localStorage.getItem('cart');
if (cartStr != null) {
    var cartObj = JSON.parse(cartStr);
    var renderedOrders = renderOrders(cartObj);
    if (orderElement != null) {
        orderElement.innerHTML = renderedOrders;
    }
}
