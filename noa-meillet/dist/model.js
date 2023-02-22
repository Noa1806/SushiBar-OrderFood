var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    return User;
}());
//data
var danCohen = new User("danCohen", "danSushiBar147");
var yossiZaban = new User("yossi123", "yossiSushiBar147");
//array for all the users
var usersList = [danCohen, yossiZaban];
var Restaurant = /** @class */ (function () {
    function Restaurant(name, adress, phoneNumber) {
        this.name = name;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
    }
    return Restaurant;
}());
var ashdod = new Restaurant("Sushi-Bar Ashdod", "Herzel 1 Ashdod", "08-9401057");
var tlv = new Restaurant("Sushi-Bar TLV", "Dizengof 147 Tel-Aviv", "07-9401057");
var eilat = new Restaurant("Sushi-Bar Eilat", "Zahal 8 Eilat", "09-9401057");
var restaurantList = [ashdod, tlv, eilat];
