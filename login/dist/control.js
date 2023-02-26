function goToCstmrPage() {
    try {
        if (!logInForm)
            throw new Error("there is no log In form");
        logInForm.innerHTML = "";
        if (!customerLink)
            throw new Error("We can't show the customer page");
        customerLink.click();
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
            if (!adminLink)
                throw new Error("We can't show the customer page");
            adminLink.click();
        }
    }
    catch (error) {
        console.error("something don't work with the log in function");
    }
}
