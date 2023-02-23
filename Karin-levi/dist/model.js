var Meal = /** @class */ (function () {
    function Meal(name, imgLink, details, price) {
        this.name = name;
        this.imgLink = imgLink;
        this.details = details;
        this.price = price;
        this.uid = uid();
    }
    return Meal;
}());
