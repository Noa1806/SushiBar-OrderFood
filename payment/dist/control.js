function takeawayChecked() {
    if (!adress || !restaurantSelectList)
        throw new Error("there is no payment form");
    restaurantList.map(function (element, key) {
        restaurantSelectList[key] = new Option(element.name, element.name);
    });
    restaurantSelectList.style.display = "block";
    adress.innerHTML = "  \n  <input type=\"submit\" value=\"Next\" class=\"btn\">";
}
function deliverChecked() {
    if (!adress || !restaurantSelectList)
        throw new Error("there is no payment form");
    restaurantSelectList.style.display = "none";
    adress.innerHTML = "\n    <input type=\"text\" name=\"customerAdress\" class=\"input\" placeholder=\"Enter your full adress\" required/>\n    <input type=\"submit\" value=\"Next\" class=\"btn\">\n    ";
}
function showPaymentForm(event) {
    try {
        if (!paymentChoice)
            throw new Error("there is no payment form");
        paymentChoice.innerHTML = "\n    <input type=\"radio\" name=\"payment\" class=\"input\" id=\"choice1\" onclick=\"visaCardChecked()\"/>\n    <label for=\"choice1\">Visa Card</label>\n    <input type=\"radio\" name=\"payment\" class=\"input\" id=\"choice2\" onclick=\"cashChecked()\"/>\n    <label for=\"choice2\">Cash</label>\n    ";
    }
    catch (error) {
        console.error("something don't work with the load of the customer details");
    }
}
function visaCardChecked() {
    try {
        if (!paymentDetail)
            throw new Error("there is no payment form");
        paymentDetail.innerHTML = "\n        <input type=\"text\" name=\"cardNumber\" class=\"input\" placeholder=\"Enter your card number\" required/>\n        <input type=\"text\" name=\"cardExpired\" class=\"input\" placeholder=\"Enter the date of number\" required/>\n        <input type=\"text\" name=\"cardCvv\" class=\"input\" placeholder=\"Enter your id number\" required/>\n        <input type=\"text\" name=\"customerId\" class=\"input\" placeholder=\"Enter your id number\" required/>\n        <input type=\"submit\" value=\"Pay\" class=\"btn\">\n        ";
    }
    catch (error) {
        console.error("something don't work with the load of the customer details");
    }
}
function cashChecked() {
    try {
        if (!paymentDetail)
            throw new Error("there is no payment form");
        paymentDetail.innerHTML = "<input type=\"submit\" value=\"Pay\" class=\"btn\">";
    }
    catch (error) {
        console.error("something don't work with the load of the customer details");
    }
}
function pay(event) {
    alert("thank you for your order");
}
