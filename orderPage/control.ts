
function renderOrders(cart): string {
    try {
        let html = `<div class="orders">`
        Object.entries(cart).forEach(([itemName, item]) => {
            debugger
            html +=
                `   <br/><br/>
                    <div class="orders__products">
                    <div class="orders__products__img">
                        <img src=${item.imgLink} alt="">
                    </div>
                    <div class="orders__products__name">${itemName}</div>
                    <div class="orders__products__price">${item.price}</div>
                    <div id=${item.uid} class="orders__products__quantity">${item.quantity}</div>
                    <div class="orders__products__wrapperBtn">
                        <div onclick="addQuantity('${item.uid}')" class="orders__products__wrapperBtn__btnAdd">+</div>
                        <div onclick="deleteQuantity('${item.uid}')" class="orders__products__wrapperBtn__btnRemove">-</div>
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


function addQuantity(itemName: string) {

    const quantityElement = document.getElementById(itemName);
    if (quantityElement !== null) {
        let quantity = Number(quantityElement?.innerText);
        quantity++;
        quantityElement.innerText = String(quantity)
    }
}


function deleteQuantity(itemName: string) {

    const quantityElement = document.getElementById(itemName);
    if (quantityElement !== null) {
        let quantity = Number(quantityElement?.innerText);
        quantity--;
        if (quantity >= 0) {
            quantityElement.innerText = String(quantity)
        }

    }
}