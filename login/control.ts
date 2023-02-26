function goToCstmrPage() {
  try {
    if (!logInForm) throw new Error(`there is no log In form`);
    logInForm.innerHTML = ``;
    if (!customerLink) throw new Error(`We can't show the customer page`);
    customerLink.click();
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
      if (!adminLink) throw new Error(`We can't show the customer page`);
      adminLink.click();
    }
  } catch (error) {
    console.error(`something don't work with the log in function`);
  }
}
