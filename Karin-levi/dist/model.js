var Meal = /** @class */ (function () {
    function Meal(name, imgLink, details, price) {
        this.name = name;
        this.imgLink = imgLink;
        this.details = details;
        this.price = price;
    }
    return Meal;
}());
//data
var indianRoll = new Meal("Indian Roll", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 79);
var crispyRice = new Meal("CrispyRice", "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611373633.jpg", "Guacamole seasoned on lettuce with a spicy ponzo sauce", 89);
var tartarSurprise = new Meal("Tartar Surprise", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 85);
var japaneseTartarSachets = new Meal("Japanese Tartar Sachets", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 74);
var kamikazeRoll = new Meal("Kamikaze Roll", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 81);
var mexicanRoll = new Meal("Mexican Roll", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 90);
var mealsList = [
    indianRoll,
    crispyRice,
    tartarSurprise,
    japaneseTartarSachets,
    kamikazeRoll,
    mexicanRoll
];
