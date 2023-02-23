function goToCstmrPage() {
  try {
    if (!logInForm) throw new Error(`there is no log In form`);
    logInForm.innerHTML = ``;
    //ENTER THE LINK TO THE CUSTOMER PAGE
  } catch (error) {
    console.error(`The system failed`);
  }
}

function addLogInForm(): void {
  try {
    if (!logInForm) throw new Error(`there is no log In form`);
    logInForm.innerHTML = `
      <input type="text" name="userName" class="input" placeholder="Enter your user name" required/>
      <br />
      <input type="password" name="password" class="input" placeholder="Enter your password" required/>
      <br />
      <input type="submit" id="log_in_btn" value="Log In"/>
      `;
  } catch (error) {
    console.error(`The log to the system failed`);
  }
}
function logInToAdminPage(event): void {
  try {
    event.preventDefault();
    const userName = event.target.elements.userName.value;
    const password = event.target.elements.password.value;
    if (!usersList) throw new Error(`We don't have any administrator users`);
    const user: User | undefined = usersList.find(
      (user) => user.userName == userName
    );
    if (!user) {
      alert(`We can't find an account that match to your user name...`);
    } else if (password != user.password) {
      alert(`The password don't match to your user name... Try again`);
    } else {
      //ENTER THE LINK TO THE ADMIN PAGE
    }
  } catch (error) {
    console.error(`something don't work with the log in function`);
  }
}

function takeawayChecked(): void {
  if (!adress || !restaurantSelectList)
    throw new Error(`there is no payment form`);
  restaurantList.map((element, key) => {
    restaurantSelectList[key] = new Option(element.name, element.name);
  });
  restaurantSelectList.style.display = `block`;
  adress.innerHTML = `  
  <input type="submit" value="Next" class="btn">`;
}

function deliverChecked() {
  if (!adress || !restaurantSelectList)
    throw new Error(`there is no payment form`);
  restaurantSelectList.style.display = `none`;
  adress.innerHTML = `
    <input type="text" name="customerAdress" class="input" placeholder="Enter your full adress" required/>
    <input type="submit" value="Next" class="btn">
    `;
}

function showPaymentForm(event): void {
  try {
    if (!paymentChoice) throw new Error(`there is no payment form`);
    paymentChoice.innerHTML = `
    <input type="radio" name="payment" class="input" id="choice1" onclick="visaCardChecked()"/>
    <label for="choice1">Visa Card</label>
    <input type="radio" name="payment" class="input" id="choice2" onclick="cashChecked()"/>
    <label for="choice2">Cash</label>
    `;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function visaCardChecked() {
  try {
    if (!paymentDetail) throw new Error(`there is no payment form`);
    paymentDetail.innerHTML = `
        <input type="text" name="customerId" class="input" placeholder="Enter your id number" required/>
        <input type="radio" name="payment" class="input" id="choice2" onclick="cashChecked()"/>
        <label for="choice2">Cash</label>
        <input type="submit" value="Pay" class="btn">
        `;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function cashChecked() {
  try {
    if (!paymentDetail) throw new Error(`there is no payment form`);
    paymentDetail.innerHTML = `
        <input type="submit" value="Pay" class="btn">
        `;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function pay(event): void {
  alert("thank you for your order");
}
