function renderOrders(cart) {
    try {
        var html_1 = "<div class=\"orders\">";
        Object.entries(cart).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            html_1 +=
                "   <br/><br/>\n                    <div class=\"orders__products\">\n                    <div class=\"orders__products__img\">\n                        <img src=" + v.imgLink + " alt=\"\">\n                    </div>\n                    <div class=\"orders__products__name\">" + k + "</div>\n                    <div class=\"orders__products__price\">" + v.price + "</div>\n                    <div class=\"orders__products__quantity\">" + v.quantity + "</div>\n                    <div class=\"orders__products__wrapperBtn\">\n                        <div class=\"orders__products__wrapperBtn__btnAdd\">Add</div>\n                        <div class=\"orders__products__wrapperBtn__btnRemove\">Remove</div>\n                    </div>\n                </div>\n            ";
        });
        html_1 += "</div>";
        return html_1;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
