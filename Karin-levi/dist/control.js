//data
var indianRoll = new Meal("Indian Roll", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 79);
var crispyRice = new Meal("CrispyRice", "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611373633.jpg", "Guacamole seasoned on lettuce with a spicy ponzo sauce", 89);
var tartarSurprise = new Meal("Tartar Surprise", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 85);
var japaneseTartarSachets = new Meal("Japanese Tartar Sachets", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 74);
var kamikazeRoll = new Meal("Kamikaze Roll", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 81);
var mexicanRoll = new Meal("Mexican Roll", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 90);
var meals = [
    indianRoll,
    crispyRice,
    tartarSurprise,
    japaneseTartarSachets,
    kamikazeRoll,
    mexicanRoll
];
function renderMeals() {
    try {
        var html = "<div class=\"menu\">";
        html += meals
            .map(function (meal) {
            return "\n                <br/>\n          <div class=\"menu__meal\">\n          <div class=\"menu__meal__img\"><img src=" + meal.imgLink + " alt=\"\"></div>\n          <div class=\"menu__meal__details\">\n               <div class=\"menu__meal__details__name\">" + meal.name + "</div>\n               <div class=\"menu__meal__details__detailsWrapper\">\n                  <div class=\"menu__meal__details__detailsWrapper__description\">" + meal.details + " </div>\n                  <div class=\"menu__meal__details__detailsWrapper__price\">" + meal.price + "</div>\n               </div>\n          </div>\n          <div class=\"menu__meal__btnAdd\">\n              <button>Add</button>\n          </div>\n      </div>\n        ";
        })
            .join(" ");
        html += "</div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
