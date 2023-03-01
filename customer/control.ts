//data


//starters
const salmonTartare = new Product(
    "salmon Tartare",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022102814290450.jpg",
    "On a matzah of rice, purple onion, coriander, pepper, chili, avocado and green onion",
    69
)

const cevicheTrio = new Product(
    "Cerviche Trio",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022122013521047.jpg",
    "Tuna salmon and locus and ponzo sauce on top",
    63
)

const tatakiButchers = new Product(
    "Tataki Butchers",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611281780.jpg",
    "Slices of butcher's slice on a bed of dairy puree, with hot pepper, in marinade sauce with coriander over sweet potato chips",
    63
)

const adamame = new Product(
    "Adamame",
    "https://uppsale.blob.core.windows.net/frameimages/thumb_rest38_2019031322291583.jpg",
    "Soy beans blanched in salt and lemon.",
    38
)

const japanesePickledVegetables = new Product(
    "Japanese Vegetables",
    "https://uppsale.blob.core.windows.net/frameimages/thumb_rest38_2016121312514575.jpg", 
    "Bok Choy, carrots, cucumber, served with a spicy chili and sesame sauce.",
    26
)

//sushi
const indianRoll = new Product(
    "Indian Roll",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
    "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
    79
);

const crispyRice = new Product(
    "Crispy Rice",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611373633.jpg",
    "Guacamole seasoned on lettuce with a spicy ponzo sauce",
    89
);

const tartarSurprise = new Product(
    "Tartar Surprise",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061621051902.jpg",
    "4 pieces of rice circles with guacamole and tempura shrimp from them 2 pieces of lemon salmon tartare, avocado, green onion and chives 2 tuna tartare, pineapple, chives in ponzo sauce.",
    76
);

const japaneseTartarSachets = new Product(
    "Japanese Tartar Sachets",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712261873.jpg",
    "6 pcs nori dumplings, 3 pcs stuffed with tuna tartare and 3 pcs stuffed with salmon tartare garnished with guacamole and sesame leaves in tempura",
    74
);

const kamikazeRoll = new Product(
    "Kamikaze Roll",
    "https://uppsale.blob.core.windows.net/frameimages/thumb_rest38_2020031317503132.jpg",
    "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
    81
);

const mexicanRoll = new Product(
    "Mexican Roll",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712283568.jpg",
    "Salmon, cucumber, avocado, zipotella mayonnaise in salmon shell, guacamole, chili in tempura and orange tobiko",
    90
);


//drinkes
const pinkFlow = new Product(
    "Pink flow",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022111516175347.jpg",
    "Ketel One, lemon juice, watermelon monin, red grapefruit monin, basil",
    55
)

const pimmsCup = new Product(
    "Pimm's cup",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921401507.jpg",
    "Pimms dessert, lychee liqueur, sour and ginger ale",
    54
)

const japanJin = new Product(
    "Japan jin",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921411299.jpg",
    "Pimms Tanqueray gin, lemon grass, lemon, yuzu, cucumber, cilantro, Mediterranean tonic garnished with dried seaweed, a sour and refreshing cocktail.",
    59
)

const gingerBomb = new Product(
    "Ginger bomb",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921420836.jpg",
    "Ouzo, berry monin, lemon juice, ginger beer",
    62
)

const captainCoco = new Product(
    "Captain coco",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921423381.jpg",
    "Ouzo, berry monin, Coconut sorbet, spicy Captain Morgan rum, passion fruit monin, lemon juice garnished with dried banana juice, ginger beer",
    66
)




const products = {
    "Sushi": [
        indianRoll,
        crispyRice,
        tartarSurprise,
        japaneseTartarSachets,
        kamikazeRoll,
        mexicanRoll
    ],
    "Drinks": [
        pinkFlow,
        pimmsCup,
        japanJin,
        gingerBomb,
        captainCoco

    ],
    "Starters": [
        salmonTartare,
        cevicheTrio,
        tatakiButchers,
        adamame,
        japanesePickledVegetables

    ]
}



function renderMeals(): string {
    try {
        let html = `<div class="menu">`
        for (const product of [ "Starters", "Sushi", "Drinks"]) {
            html += `<br/><br/> <div class="menu__productCategory">${product} </div>`
            html += products[product]
                .map((item) => {
                    return `
                <br/>
                <div class="menu__meal">
                <div class="menu__meal__img"><img src=${item.imgLink} alt=""></div>
                <div class="menu__meal__details">
                    <div class="menu__meal__details__name">${item.name}</div>
                    <div class="menu__meal__details__detailsWrapper">
                        <div class="menu__meal__details__detailsWrapper__description">${item.details} </div>
                        <div class="menu__meal__details__detailsWrapper__price">${item.price}</div>
                    </div>
                </div>
                <div class="menu__meal__btnAdd">
                    <button onclick="addToCart('${item.uid}')">Add</button>
                </div>
            </div>
            `;
                }).join(" ");
        }

        html += `</div>`

        return html;
    } catch (error) {
        console.error(error);
        return "";
    }

}

let cart = new Map();


function addToCart(uid: string) {
    const meal = products.find(element => element.uid == uid);
    if (cart.has(meal)) {
        cart.set(meal, cart.get(meal) + 1)
    } else {
        cart.set(meal, 1)
    }

    const cartData = JSON.stringify(cart);
    localStorage.setItem('cart', cartData);

}