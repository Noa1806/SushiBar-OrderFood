function showRestaurant():void{
    try {
        if (!restaurant) throw new Error(`We can't show the list of restaurants`);
        restaurantList.map(rest => restaurant.innerHTML+= `
        <div class="restaurant">
        <h2>${rest.name}</h2>
        <h3>Adress: ${rest.address}</h3>
        <h5>Phone number: ${rest.phoneNumber}</h5>
        </div>`); 
    } catch (error) {
        console.error(`something don't work with the function that show the list of restaurants`);
    }
  }