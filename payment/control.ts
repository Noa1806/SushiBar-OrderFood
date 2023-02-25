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
        <input type="text" name="cardNumber" class="input" placeholder="Enter your card number" required/>
        <input type="text" name="cardExpired" class="input" placeholder="Enter the date of number" required/>
        <input type="text" name="cardCvv" class="input" placeholder="Enter your id number" required/>
        <input type="text" name="customerId" class="input" placeholder="Enter your id number" required/>
        <input type="submit" value="Pay" class="btn">
        `;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function cashChecked() {
  try {
    if (!paymentDetail) throw new Error(`there is no payment form`);
    paymentDetail.innerHTML = `<input type="submit" value="Pay" class="btn">`;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function pay(event): void {
  alert("thank you for your order");
}
