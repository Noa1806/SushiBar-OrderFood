class Meal{
    constructor(
        public name: string,
        public imgLink: string,
        public details: string,
        public price: number,
      ) {}
}

//data
const indianRoll = new Meal(
   "Indian Roll",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
    "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
    79
  );

  const crispyRice = new Meal(
    "CrispyRice",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611373633.jpg",
     "Guacamole seasoned on lettuce with a spicy ponzo sauce",
     89
   );

   const tartarSurprise = new Meal(
    "Tartar Surprise",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
     "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
     85
   );

   const japaneseTartarSachets = new Meal(
    "Japanese Tartar Sachets",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
     "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
     74
   );

   const kamikazeRoll = new Meal(
    "Kamikaze Roll",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
     "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
     81
   );

   const mexicanRoll = new Meal(
    "Mexican Roll",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
     "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
     90
   );




const mealsList: Meal[] = [
    indianRoll,
    crispyRice,
    tartarSurprise,
    japaneseTartarSachets,
    kamikazeRoll,
    mexicanRoll    
  ];