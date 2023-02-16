//creating local storage for items for the first time only
if (!localStorage.getItem("items")) {
    localStorage.setItem("items", JSON.stringify([]))
} else {
    renderToAdmin(".display", getItems());
}
//adding to storage
function pushToStorage(item: Item) {
    try {
        const temp = getItems()
        if (temp != null) {
            temp.push(item)
            localStorage.setItem("items", JSON.stringify(temp));
        } else {
            localStorage.setItem("items", JSON.stringify(item));
        }
    } catch (error) {
        console.error(error);
    }


}
//adding event listener to form
try {
    if (!form) throw new Error("Form was not found");
    form.addEventListener("submit", (ev: any) => {
        ev.preventDefault();
        if (!ev.target) throw new Error("Target of event is null");
        const name = ev.target.elements.name.value;
        const details = ev.target.elements.details.value;
        const img = ev.target.elements.img.value;
        const price = ev.target.elements.price.value;
        const item: Item = new Item(name, details, img, price);
        pushToStorage(item);
        if (!getItems()) throw new Error("Item could not be added to storage");
        renderToAdmin(".display", getItems());
        ev.target.reset();
    })

} catch (error) {
    console.error(error);
}
//revealing adding form
let changeBoolean = true;
try {
    if(!revealBtn) throw new Error("No HTML element");
    revealBtn.addEventListener("click", () => {
        if(!form) throw new Error("Form not found");
        if(changeBoolean) {
            form.classList.remove("none");
            revealBtn.innerText = "Dismiss"
            changeBoolean = false;
        } else {
            form.classList.add("none");
            revealBtn.innerText = "Add"
            changeBoolean = true;
        }
    });
} catch (error) {
    console.error(error);
}
//render
function renderToAdmin(whereTo: string, items: Item[] | null) {
    const display = <HTMLElement>document.querySelector(whereTo);
    if (!display) throw new Error("Display not found");
    if (!items) throw new Error("Items empty");
    const html = items.map((item) => {
        return `
        <div class="display__card">
            <div class="display__card__item">
                <h2>${item.name}</h2>
                <img src="${item.img}" width="100px" height="100px">
                <h4>${item.details}</h4>
                <h5>${item.price}$</h5>
            </div>
            <div class="display__card__change">
                <button id="delete" onclick="deleteFromAdmin('${item.id}')">Delete</button>
                <a href="#change"><button id="update" onclick="updateFromAdmin('${item.id}')">Uptade</button></a>
            </div>
        </div>
        `
    }).join("\n");
    display.innerHTML = html;
}
//delete item
function deleteFromAdmin(id: string) {
    try {
        const items = getItems();
        if (!items) throw new Error("No items");
        const index = items.findIndex((item) => item.id == id.toString());
        if (index == -1) throw new Error("Item is not in storage");
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items))
        renderToAdmin(".display", getItems());
    } catch (error) {
        console.error(error);
    }
}

//update item
function updateFromAdmin(id: string) {
    try {
        const items = getItems();
        if (!items) throw new Error("No items");
        const index = items.findIndex((item) => item.id == id.toString());
        if (index == -1) throw new Error("Item is not in storage");
        const item: Item = <Item>items[index];
        const html = `
            <form class="form" id="changeForm">
                <input type="text" name="name" placeholder="${item.name}">
                <textarea name="details"cols="30" rows="10" placeholder="${item.details}"></textarea>
                <input type="number" name="price" placeholder="${item.price}">
                <input type="text" name="img" placeholder="${item.img}">
                <a href="#theForm"><input class="btn" type="submit" value="Submit"></a>
            </form>
        `;
        if (!change) throw new Error("HTML element not found");
        change.innerHTML = html;
        updateItem(item, index);
    } catch (error) {
        console.error(error);
    }
}
function updateItem(item: Item, index: number) {
    try {
        const changeForm = document.getElementById("changeForm");
        if (!changeForm) throw new Error("Form not found");
        changeForm.addEventListener('submit', (ev: any) => {
            ev.preventDefault();
            if (!ev.target) throw new Error("Target of event is null");
            const name = ev.target.elements.name.value;
            const details = ev.target.elements.details.value;
            const img = ev.target.elements.img.value;
            const price = ev.target.elements.price.value;
            if (name) {
                item.name = name;
            }
            if (details) {
                item.details = details;
            }
            if (price) {
                item.price = price;
            }
            if (img) {
                item.img = img;
            }
            const items = getItems();
            if (!items) throw new Error("No items");
            items[index] = item;
            localStorage.setItem("items", JSON.stringify(items))
            renderToAdmin(".display", getItems());
            change.innerHTML = "";
        })
    } catch (error) {
        console.error(error);
    }

}