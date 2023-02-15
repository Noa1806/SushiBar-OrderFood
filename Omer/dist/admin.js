//creating local storage for items for the first time only
if (!localStorage.getItem("items")) {
    localStorage.setItem("items", JSON.stringify([]));
}
else {
    renderToAdmin(".display", getItems());
}
//adding to storage
function pushToStorage(item) {
    try {
        var temp = getItems();
        if (temp != null) {
            temp.push(item);
            localStorage.setItem("items", JSON.stringify(temp));
        }
        else {
            localStorage.setItem("items", JSON.stringify(item));
        }
    }
    catch (error) {
        console.error(error);
    }
}
//adding event listener to form
try {
    if (!form)
        throw new Error("Form was not found");
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        if (!ev.target)
            throw new Error("Target of event is null");
        var name = ev.target.elements.name.value;
        var details = ev.target.elements.details.value;
        var img = ev.target.elements.img.value;
        var price = ev.target.elements.price.value;
        var item = new Item(name, details, img, price);
        pushToStorage(item);
        if (!getItems())
            throw new Error("Item could not be added to storage");
        renderToAdmin(".display", getItems());
        ev.target.reset();
    });
}
catch (error) {
    console.error(error);
}
//render
function renderToAdmin(whereTo, items) {
    var display = document.querySelector(whereTo);
    if (!display)
        throw new Error("Display not found");
    if (!items)
        throw new Error("Items empty");
    var html = items.map(function (item) {
        return "\n        <div class=\"display__card\">\n            <div class=\"display__card__item\">\n                <h2>" + item.name + "</h2>\n                <img src=\"" + item.img + "\" width=\"100px\" height=\"100px\">\n                <h4>" + item.details + "</h4>\n                <h5>" + item.price + "</h5>\n            </div>\n            <div class=\"display__card__change\">\n                <button id=\"delete\" onclick=\"deleteFromAdmin('" + item.id + "')\">Delete</button>\n            </div>\n        </div>\n        ";
    }).join("\n");
    display.innerHTML = html;
}
//delete item
function deleteFromAdmin(id) {
    try {
        var items = getItems();
        if (!items)
            throw new Error("No items");
        var index = items.findIndex(function (item) { return item.id == id.toString(); });
        if (index == -1)
            throw new Error("Item is not in storage");
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items));
        renderToAdmin(".display", getItems());
    }
    catch (error) {
        console.error(error);
    }
}
