
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "es1.jpg",
        name: "LAKME EYESHADOW",
        details: "Be classiful and be beautiful",
        rating: 4.1,
        price: 585,
    },
    {   
        anc: "",
        image: "es2.jpg",
        name: "MARS EYESHADOW",
        details: "Beauty is priceless when it is on ur eyes",
        rating: 3.9,
        price: 730,
    },
    {   
        anc: "",
        image: "es3.jpg",
        name: "THE BLUSHED NUDES",
        details: "Let ur beauty speaks for u",
        rating: 3.8,
        price: 899,
    },
    {   
        anc: "",
        image: "es4.jpg",
        name: "REVOLUTION EYESHADOW",
        details: "Makeup which makes u love urself",
        rating: 4.2,
        price: 807,
    },    
    {   
        anc: "",
        image: "es5.jpg",
        name: "M.A.C EYESHADOW",
        details: "Create an outrageous look",
        rating: 3.7,
        price: 1900,
    },    
    {   
        anc: "",
        image: "es6.jpg",
        name: "NAKED5 EYESHADOW",
        details: "Eyes as u like it",
        rating: 4.0,
        price: 350,
    }, 
    {   
        anc: "",
        image: "es7.jpg",
        name: "ALEX AVIENS EYESHADOW",
        details: "For whom to deserves beautiful",
        rating: 3.9,
        price: 740,
    } ,
    {   
        anc: "",
        image: "es8.jpg",
        name: "THE 24 NUDES EYESHADOW",
        details: "Inspire others by ur eyes",
        rating: 3.7,
        price: 1529,
    },    
    {   
        anc: "",
        image: "es9.jpg",
        name: "NAKED3 URBAN EYESHADOW",
        details: "Love begins with eye contact",
        rating: 4.2,
        price: 1599,
    },    
    {   
        anc: "",
        image: "es10.jpg",
        name: "BLOOMHOUSE EYESHADOW",
        details: "The glam every women is beauty",
        rating: 4.0,
        price: 190,
    },    
    {   
        anc: "",
        image: "es11.jpg",
        name: "BELIEVE EYESHADOW",
        details: "Fablous colours for pretty faces",
        rating: 3.8,
        price: 250,
    },    
    {   
        anc: "",
        image: "es12.jpg",
        name: "DIER EYESHADOW",
        details: "Beuty is not free,its worth",
        rating: 3.7,
        price: 214,
    },    
    {   
        anc: "",
        image: "es13.jpg",
        name: "UTOPIA EYESHADOW",
        details: "Eyes as u like it",
        rating: 4.1,
        price: 3200,
    },   
     {   
        anc: "",
        image: "es14.jpg",
        name: "KOEN EYESHADOW",
        details: "Time to treat ur eyes",
        rating: 3.9,
        price: 2050,
    },   
     {   
        anc: "",
        image: "es15.jpg",
        name: "M.A.C EYESHADOW",
        details: "Feathers on eyes",
        rating: 4.0,
        price: 2150,
    },  
    {   
        anc: "",
        image: "es16.jpg",
        name: "RUBIES EYESHADOW",
        details: "Wings to fly ur shades",
        rating: 3.8,
        price: 352,
    },    
    {   
        anc: "",
        image: "es17.jpg",
        name: "ELF EYESHADOW",
        details: "An eye expert",
        rating: 4.1,
        price: 499,
    },
    {   
        anc: "",
        image: "es18.jpg",
        name: "LORAC EYESHADOW",
        details: "Be classy and beautiful",
        rating: 3.7,
        price: 2200,
    },
    {   
        anc: "",
        image: "es19.jpg",
        name: "PEACH EYESHADOW",
        details: "Perfect shades perfect you",
        rating: 4.2,
        price: 1299,
    },
    {   
        anc: "",
        image: "es20.jpg",
        name: "MATTE EYESHADOW",
        details: "Let love on shades",
        rating: 3.9,
        price: 358,
    },
    
]

productDetails.map(function(elem,index){


    

    var head = document.createElement("div");

    var anc = document.createElement("a");
    anc.setAttribute("href", elem.anc);

    var image = document.createElement("img");
    image.setAttribute("src", elem.image);

    anc.append(image);

    var name = document.createElement("h4");
    name.innerText = elem.name;

    var details = document.createElement("p")
    details.innerText = elem.details;

    var star1 = document.createElement("span");
    star1.setAttribute("class","material-icons-outlined");
    star1.innerText = "star";
    var star2 = document.createElement("span");
    star2.setAttribute("class","material-icons-outlined");
   
    var star3 = document.createElement("span");
    star3.setAttribute("class","material-icons-outlined");
    
    var star4 = document.createElement("span");
    star4.setAttribute("class","material-icons-outlined");
    
    var star5 = document.createElement("span");
    star5.setAttribute("class","material-icons-outlined");
    

    var star6 = document.createElement("span");
    star6.innerText = "("+elem.rating+")";

    var starMain = document.createElement("p");
    starMain.setAttribute("class","rating");
    
    var starSpan = document.createElement("span");
    starSpan.setAttribute("class", "material-icons-outlined");
    starSpan.innerText = "star";

    var ratingText = document.createElement("span");
    ratingText.innerText = "(" + elem.rating + ")";

    starMain.append(starSpan, ratingText); // Append both elements to the rating container

    var price = document.createElement("p");
    price.innerText = "₹"+elem.price+".00";

    var button = document.createElement("button");
    button.innerText = "ADD TO BAG";
    button.addEventListener("click",function(){
        addToBag(elem);
    })

    head.append(anc,name,details,starMain,price,button);
    document.querySelector("#body").append(head);
    
    
    // Add To Bag
    function addToBag(elem){
        elem.quantity = 1;
        cartArr.push(elem);
        // cartArr.push("new");
        localStorage.setItem("cartItems",JSON.stringify(cartArr));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    
    searchButton.addEventListener("click", function () {

        const searchTerm = searchInput.value.toLowerCase();

        const searchMappings = {
            mascara: "mascara.html",
            eyeliner: "eyeliner.html",
            blush: "blush.html",
            facepowder: "powder.html",
            foundation : "foundation.html",
            lipstick : "lipstick.html",
            lipgloss : "lipgloss.html",
            eyeshadow : "eyeshadow.html",
            kajal : "kajal.html",
            lipliner : "lipliner.html",
            contour : "contour.html",
            primer : "primer.html",
            brush : "brush.html",
            face : "face.html",
            eyes : "eyes.html",
            lip : "lip.html"

        };

      
        if (searchMappings.hasOwnProperty(searchTerm)) {
         
            window.location.href = searchMappings[searchTerm];
        } else {
            
            alert("Product not found. Please try a different search term.");
        }
    });
});
