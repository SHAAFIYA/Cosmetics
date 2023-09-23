
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "mamaearthcompact.jpg",
        name: "MAMAEARTH GLOW OIL CONTROL COMPACT",
        details: "Controls oil",
        rating: 4.2,
        price: 500.00
    },
    {   
        anc: "",
        image: "lakmecompact2.jpg",
        name: "LAKME ULTRA MATTE COMPACT",
        details: "Gives Even-Tone Complexion",
        rating: 4.0,
        price: 299.00
    },
    {   
        anc: "",
        image: "maybellinecompact.jpg",
        name: "MAYBELLINE COMPACT POWDER",
        details: "Protect Skin from Sun,Absorbs Oil",
        rating: 3.9,
        price: 259.00
    },
    {   
        anc: "",
        image: "MyGlammcompact.jpg",
        name: "MYGLAMM SUPER SERUM COMPACT",
        details: "Matte Finish Compact Powder",
        rating: 3.8,
        price: 450.00
    },    
    {   
        anc: "",
        image: "facescanadacompact.jpg",
        name: "FACES CANADA WEIGHTLESS COMPACT",
        details: "Non Oily Matte Look",
        rating: 4.1,
        price: 225.00
    },    
    {   
        anc: "",
        image: "justherbscompact.jpg",
        name: "JUST HERBS COMPACT POWDER",
        details: "Oil Control Radiance Booster Age Defying",
        rating: 3.7,
        price: 450.00
    }, 
    {   
        anc: "",
        image: "blueheavencompacct.jpg",
        name: "BLUE HEAVEN COMPACT POWDER",
        details: "Oil Control Matte Finish",
        rating: 4.0,
        price: 175.00
    } ,
    {   
        anc: "",
        image: "elle18.jpg",
        name: "ELLE18 GLOW COMPACT",
        details: "Long Lasting Glow",
        rating: 3.8,
        price: 299.00 
    },    
    {   
        anc: "",
        image: "lorealcompact.jpg",
        name: "L’Oréal PARIS COMPACT POWDER",
        details: "Lightweight & Blendable",
        rating: 3.9,
        price: 550.00
    },    
    {   
        anc: "",
        image: "coloressencecompact.jpg",
        name: "COLORESSENCE COMPACT POWDER",
        details: "Mattifying Effect & Sweat Resistant",
        rating: 4.2,
        price: 299.00
    },    
    {   
        anc: "",
        image: "mamaearthcompact1.jpg",
        name: "MAMAEARTH GLOW FULL COVERAGE COMPACT",
        details: "Up to 16-Hour Oil Control & Sweat-Resistant",
        rating: 3.8,
        price: 699.00
    },    
    {   
        anc: "",
        image: "reneecompact.jpg",
        name: "RENEE FACE BASE COMPACT POWDER",
        details: "Long - Lasting, Easy Blend, Matte Finish",
        rating: 3.7,
        price: 450.00
    },    
    {   
        anc: "",
        image: "sugarcompact.jpg",
        name: "SUGAR  MATTIFYING COMPACT",
        details: "Lightweight Compact with SPF 15 and Vitamin E",
        rating: 4.0,
        price: 525.00 
    },
    {   
        anc: "",
        image: "marscompact.jpg",
        name: "MARS HD MATTIFYING COMPACT POWDER",
        details: "Lightweight Formula with Oil Control",
        rating: 3.9,
        price: 199.00
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61KoJ0IVriL._SL1500_.jpg",
        name: "GLAM21 POWDER PERFECT COMPLEXION 2-in-1 COMPACT",
        details: "Sweatproof & Flowy Matte Finish",
        rating: 3.7,
        price: 299.00 
    },  
    {   
        anc: "",
        image: "lakmecompact1.jpg",
        name: "LAKMÉ 9 to 5 FLAWLESS MATTE COMPACT POWDER",
        details: "Conceals & Gives Radiant Skin",
        rating: 4.0,
        price: 550.00
    },    
    {   
        anc: "",
        image: "MyGlammcompact1.jpg",
        name: "MyGlamm RADIANT MATTE COMPACT POWDER",
        details: "Radiant Matte Finish",
        rating: 3.8,
        price: 299.00 
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/5153-mToO8L._SL1000_.jpg",
        name: "KIRO BOTANICO TIMELESS MATTE COMPACT",
        details: "Waterproof, Vegan, Matte finish",
        rating: 3.9,
        price: 1500.00
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51cQY9Go3dL._SL1100_.jpg",
        name: "PLUM LEGIT MATTE TALC-FREE COMPACT",
        details: "100% Vegan & Cruelty Free & Tan Glow- 130N",
        rating: 4.2,
        price: 528.00
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51E0w9ckNPL._SL1000_.jpg",
        name: "LAKME ABSOLUTE COMPACT POWDER",
        details: "Long Lasting Face Makeup for a Natural Glow",
        rating: 3.7,
        price: 875.00
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