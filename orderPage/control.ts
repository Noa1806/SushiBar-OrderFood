













function renderOrders(cart): string {
    try {
        let html = `<div class="orders">`
        Object.entries(cart).forEach(([k, v]) => {
            html +=
                `   <br/><br/>
                    <div class="orders__products">
                    <div class="orders__products__img">
                        <img src=${v.imgLink} alt="">
                    </div>
                    <div class="orders__products__name">${k}</div>
                    <div class="orders__products__price">${v.price}</div>
                    <div class="orders__products__quantity">${v.quantity}</div>
                    <div class="orders__products__wrapperBtn">
                        <div class="orders__products__wrapperBtn__btnAdd">Add</div>
                        <div class="orders__products__wrapperBtn__btnRemove">Remove</div>
                    </div>
                </div>
            `;
        })

        html += `</div>`

        return html;

    } catch (error) {
        console.error(error);
        return "";
    }

}