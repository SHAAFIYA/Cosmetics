
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31iuocsx+KL._SL1080_.jpg",
        name: "MILAGRO BEAUTY 2 IN 1 DUAL END CREAM BRUSH",
        details: "All Over Face Makeup Blending Tool ",
        rating: 3.4,
        price: 845,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31wYUJQGSVL._SL1080_.jpg",
        name: "MILAGRO BEAUTY FAN BRUSH ",
        details: "Cheekbones Ultrasoft Vegan Fiber Bristles",
        rating: 4.2,
        price: 250,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/311VZ53vXmL._SL1080_.jpg",
        name: "MILAGRO BEAUTY POWDER CONTOUR BRUSH ",
        details: "Fluffy Angled Vegan Fiber Bristles ",
        rating: 4,
        price: 325,
    }
    ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61oYLkm27CL._SL1500_.jpg",
        name: "SWISS BEAUTY MAKEUP BRUSHES SET",
        details: "Makeup Accessory",
        rating: 4.5,
        price: 299,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51DmaWxsnJL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "RENEE ALL IN 1 PROFESSIONAL MAKEUP BRUSH SET OF 6",
        details: "Cruelty Free & Uniquely Designed Super Soft Bristles",
        rating: 3.2,
        price: 699,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61ghbk1H5pL._SL1100_.jpg",
        name: "MINISO SYNTHETIC BRISTLE MAKEUP BRUSH SET",
        details: "Coral Orange, 7 Piece",
        rating: 4.8,
        price: 275,
    },
    {
        anc: "",
        image: "https://m.media-amazon.com/images/I/71iDrFZYrvL._SL1500_.jpg",
        name: "COLORBAR READY TO WINK PERFECT EYE MAKEUP KIT ",
        details: "Ultra-soft, synthetic bristles",
        rating: 4.2,
        price: 385,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51WQaLRAoHL._SL1200_.jpg",
        name: "GLEVA FOUNDATION MAKEUP BRUSH",
        details: "Brush for Blending Liquid",
        rating: 3.9,
        price: 240,
    } ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71Xu8vzzHcL._SL1500_.jpg",
        name: " MARS ARTIST'S ARSENAL MAKEUP BRUSH SET",
        details: "Soft bristles",
        rating: 3.6,
        price: 899,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31MV5tkGXbL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "EONO DUO EYEBROW BRUSH EYEBROW SPOOLIE PROFESSIONAL ANGLED MAKE UP BRUSH",
        details: "Shaping Brows and Eyes, for Brows or Lashes",
        rating: 3.9,
        price: 260,
    },    
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/c/2/c27a49e8904325012446-1.jpg",
        name: "SWISS BEAUTY FOUNDATION BLENDER BRUSH",
        details: "The soft bristles are gentle on skin",
        rating: 3.5,
        price: 295,
    },    
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/n/y/nybronson0023zx.png",
        name: "BRONSON PROFESSIONAL BEAUTY BLEND MAKEUP SPONGE",
        details: "Applicator,Puffs",
        rating: 4.6,
        price: 129,
    },    
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/a/2/a21e640nypac00000669m_1.jpg",
        name: "PAC BLENDING FOUNDATION BRUSH - 231",
        details: "For instant high coverage",
        rating: 3.8,
        price: 532,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41rRrGqR0BL._SL1000_.jpg",
        name: "SWISS BEAUTY HIGHLIGHTING & LASH BRUSH",
        details: " With Synthetic And Soft Bristles ",
        rating: 3.2,
        price: 145,
    },   
     {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/8/9/8904245710859_1.jpg",
        name: "NYKAA KABUKI BRUSH - SMALL",
        details: "Extra Soft Bristles",
        rating: 4.6,
        price: 305,
    },   
     {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/r/e/replaceblush-brush.jpg",
        name: "NYKAA BLENDPRO BLUSH MAKEUP BRUSH",
        details: "Creates magic makeup look",
        rating: 3.8,
        price: 459,
    },  
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/n/y/nypac00000725n.jpg",
        name: "PAC POWDER BRUSH - 245",
        details: "Optimum coverage with minimal product waste",
        rating: 3.4,
        price: 465,
    },    
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/8/9/8904052421115.jpg",
        name: "COLORBAR BLND-ITUDEBEAUTY SPONGE",
        details: "No latex, No allergens, No effort",
        rating: 4.8,
        price: 179,
    },
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/8/1/819430011216.jpg",
        name: "SIGMA BEAUTY FLAT KABUKI BRUSH",
        details: "Easy blend full coverage",
        rating: 3.9,
        price: 2285,
    },
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/8/c/8c2025a8904086310140_0.jpg",
        name: "VEGA BINDI BRUSH",
        details: "The sharpest and most flexible tip",
        rating: 3.4,
        price: 107,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31rIpBggrAL.jpg",
        name: "MACPLUS 4 IN 1 MULTIFUNCTION MAKEUP BRUSH",
        details: "Applies powder cosmetics perfectly",
        rating: 4.6,
        price: 289,
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
