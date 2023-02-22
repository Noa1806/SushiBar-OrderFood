class User {
  constructor(public userName: string, public password: string) {}
}

//data
const danCohen = new User("danCohen", "danSushiBar147");
const yossiZaban = new User("yossi123", "yossiSushiBar147");

//array for all the users
const usersList: User[] = [danCohen, yossiZaban];

class Restaurant {
  constructor(public name: string, public adress: string, public phoneNumber: string) {}
}

const ashdod= new Restaurant("Sushi-Bar Ashdod", "Herzel 1 Ashdod", "08-9401057");
const tlv= new Restaurant("Sushi-Bar TLV", "Dizengof 147 Tel-Aviv", "07-9401057");
const eilat= new Restaurant("Sushi-Bar Eilat", "Zahal 8 Eilat", "09-9401057");

const restaurantList: Restaurant[] = [ashdod, tlv, eilat];