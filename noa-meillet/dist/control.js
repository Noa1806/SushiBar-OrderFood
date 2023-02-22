function goToCstmrPage() {
    try {
        if (!logInForm)
            throw new Error("there is no log In form");
        logInForm.innerHTML = "";
        //ENTER THE LINK TO THE CUSTOMER PAGE
    }
    catch (error) {
        console.error("The system failed");
    }
}
function addLogInForm() {
    try {
        if (!logInForm)
            throw new Error("there is no log In form");
        logInForm.innerHTML = "\n      <input type=\"text\" name=\"userName\" class=\"input\" placeholder=\"Enter your user name\" required/>\n      <br />\n      <input type=\"password\" name=\"password\" class=\"input\" placeholder=\"Enter your password\" required/>\n      <br />\n      <input type=\"submit\" id=\"log_in_btn\" value=\"Log In\"/>\n      ";
    }
    catch (error) {
        console.error("The log to the system failed");
    }
}
function logInToAdminPage(event) {
    try {
        event.preventDefault();
        var userName_1 = event.target.elements.userName.value;
        var password = event.target.elements.password.value;
        if (!usersList)
            throw new Error("We don't have any administrator users");
        var user = usersList.find(function (user) { return user.userName == userName_1; });
        if (!user) {
            alert("We can't find an account that match to your user name...");
        }
        else if (password != user.password) {
            alert("The password don't match to your user name... Try again");
        }
        else {
            //ENTER THE LINK TO THE ADMIN PAGE
        }
    }
    catch (error) {
        console.error("something don't work with the log in function");
    }
}
function takeawayChecked() {
    if (!restaurantSelectList)
        throw new Error("there is no select list for restaurant");
    restaurantList.forEach(function (restaurant) {
        restaurantSelectList.innerHTML += "\n    <option value=\"" + restaurant.name + "\"></option>\n    ";
    });
    if (!cstDetailsForm)
        throw new Error("there is no payment form");
    cstDetailsForm.innerHTML += "\n    <input type=\"submit\" value=\"Next\" class=\"btn\">\n    ";
}
function deliverChecked() {
    if (!cstDetailsForm)
        throw new Error("there is no payment form");
    cstDetailsForm.innerHTML += "\n    <input type=\"text\" name=\"customerAdress\" class=\"input\" placeholder=\"Enter your full adress\" required/>\n    <input type=\"submit\" value=\"Next\" class=\"btn\">\n    ";
}
function showPaymentForm() {
    try {
        if (!paymentForm)
            throw new Error("there is no payment form");
        paymentForm.innerHTML = "\n    <div class=\"paymentChoice\">\n    <input type=\"radio\" name=\"payment\" class=\"input\" id=\"choice1\" onclick=\"visaCardChecked()\"/>\n    <label for=\"choice1\">Visa Card</label>\n    <input type=\"radio\" name=\"payment\" class=\"input\" id=\"choice2\"/>\n    <label for=\"choice2\">Cash</label>\n    </div>\n    ";
    }
    catch (error) {
        console.error("something don't work with the load of the customer details");
    }
}
