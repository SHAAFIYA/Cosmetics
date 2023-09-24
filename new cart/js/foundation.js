
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image:"lakme flawless.jpg", 
        name: "LAKME ABSOLUTE OIL SERUM FOUNDATION",
        details: "Foundation with serum helps for oily skin type",
        rating : 4.1,
        price: 635 ,
    },
    {   
        anc: "",
        image: "lakme mousse foundation.jpg",
        name: "LAKME MOUSSE FOUNDATION",
        details: "Gives creme finish to your face",
        rating : 4.2,
        price: 437,
    },
    {   
        anc: "",
        image: "lakme natural beige.jpg",
        name: "LAKME NATURAL BEIGE FOUNDATION",
        details: "Gives full coverage to face",
        rating : 3.9,
        price: 177,
    }
    ,
    {   
        anc: "",
        image: "lakme pearl.jpg",
        name: "LAKME LIQUID PEARL FOUNDATION",
        details: "Gives natural glow",
        rating : 3.7,
        price: 160,
    },    
    {   
        anc: "",
        image: "myclam stick.jpg",
        name: "MY GLAMM STICK FOUNDATION",
        details: "Stick foundation easy to apply",
        rating : 4.1,
        price: 449,
    },    
    {   
        anc: "",
        image: "maybelline fit me.jpg",
        name: "MAYBELLINE FIT ME FOUNDATION",
        details: "Gives you matte finish",
        rating : 3.6,
        price: 343,
    }, 
    {   
        anc: "",
        image: "maybelline new york fit me.jpg", 
        name: "MAYBELLINE NEW YORK FIT ME FOUNDATION",
        details: "Gives a full-coverage to face",
        rating : 4.3,
        price: 629,
    } ,
    {   
        anc: "",
        image: "sugar.jpg",
        name: "MAYBELLINE NEW YORK FIT ME FOUNDATION",
        details: "Super stay ,full coverage",
        rating : 3.9,
        price: 535,
    },    
    {   
        anc: "",
        image: "sb waterproof.jpg",
        name: "SWISS BEAUTY WATERPROOF FOUNDATION",
        details: "Free from sweating",
        rating : 4.3,
        price: 248,
    },    
    {   
        anc: "",
        image: "sb airbrush foundation.jpg",
        name: "SWISS BEAUTY AIRBRUSH WATERPROOF FOUNDATION",
        details: "Full-coverage,24h stay",
        rating : 3.8,
        price: 349,
    },       
    {   
        anc: "",
        image: "sb ivory rose.jpg",
        name: "SWISS BEAUTY FOUNDATION",
        details: "Ivory rose shade",
        rating : 3.7,
        price: 640,
    },    
    {   
        anc: "",
        image: "sb tube.jpg",
        name: "SWISS BEAUTY TUBE FOUNDATION",
        details: "Gives you Matte finish",
        rating : 4.2,
        price: 388,
    },   
     {   
        anc: "",
        image: "me ivory clow.jpg",
        name: "MAMAEARTH GLOW SERUM FOUNDATION ",
        details: "Combination of skincare and Makeup",
        rating : 4.0,
        price: 299,
    },   
     {   
        anc: "",
        image: "me natural glow.jpg",
        name: "MAMAEARTH GLOW SERUM FOUNDATION",
        details: "Mixture of vitamin c to protect your skin",
        rating : 3.9,
        price: 496,
    },  
    {   
        anc: "",
        image: "me creme glow.jpg",
        name: "MAMAEARTH GLOW SERUM FOUNDATION",
        details: "Protect your skin",
        rating : 3.7,
        price: 299,
    },    
    {   
        anc: "",
        image: "mamaearth glow serum.jpg",
        name: "MAMAEARTH glow serum FOUNDATION",
        details: "Gives you natural glow",
        rating : 3.9,
        price: 496,
    },
    {   
        anc: "",
        image: "faces canada cocoa.jpg",
        name: "FACES CANADA TUBE FOUNDATION",
        details: "Gives you weightless matte finish look",
        rating : 4.2,
        price: 159,
    },
    {   
        anc: "",
        image: "fc hd.jpg",
        name: "FACES CANADA HD FOUNDATION",
        details: "Ultimate pro HD ,Runway foundation",
        rating : 3.8,
        price: 1049,
    },
    {   
        anc: "",
        image: "swiss beauty.jpg",
        name: "FACES CANADA FOUNDATION",
        details: "3 in 1 foundation,mouisturizer and sunscreen. All day hydra matte foundation",
        rating : 4.0,
        price: 384,
    },
    {   
        anc: "",
        image: "loreal.jpg",
        name: "Loreal PARIS FOUNDATION",
        details: "Stays upto 24hr,Infallible pro-glow",
        rating : 4.1,
        price: 1230,
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
        var productname=elem.name
        AddToCart(productname);
    })

    head.append(anc,name,details,starMain,price,button);
    document.querySelector("#body").append(head);
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