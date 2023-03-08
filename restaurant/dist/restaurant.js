function showRestaurant() {
    try {
        if (!restaurant)
            throw new Error("We can't show the list of restaurants");
        restaurantList.map(function (rest) { return restaurant.innerHTML += "\n        <div class=\"restaurant\">\n        <h2>" + rest.name + "</h2>\n        <h3>Adress: " + rest.address + "</h3>\n        <h5>Phone number: " + rest.phoneNumber + "</h5>\n        </div>"; });
    }
    catch (error) {
        console.error("something don't work with the function that show the list of restaurants");
    }
}
