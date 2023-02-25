function takeawayChecked(): void {
  if (!adress || !restaurantSelectList)
    throw new Error(`there is no payment form`);
  restaurantList.map((element, key) => {
    restaurantSelectList[key] = new Option(element.name+", "+ element.adress, element.name);
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

function showPaymentForm(e): void {
  try {
    e.preventDefault();
    if (!paymentChoice) throw new Error(`there is no payment form`);
    paymentChoice.innerHTML = `
    <input type="radio" name="payment" class="input" id="option1" onclick="visaCardChecked()"/>
    <label for="choice1">Visa Card</label>
    <input type="radio" name="payment" class="input" id="option2" onclick="cashChecked()"/>
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
        <div class="cardDetails">
        <input type="text" name="cardNumber" class="input" id="cardNumber" placeholder="Enter your card number" required/>
        <input type="text" name="cardExpired" class="input" id="cardEDate" placeholder="Enter the date of expiration" required/>
        <input type="text" name="cardCvv" class="input" id="cardCvv" placeholder="Enter your cvv number" required/>
        <input type="text" name="customerId" class="input" id="id" placeholder="Enter your id number" required/>
        </div>
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
