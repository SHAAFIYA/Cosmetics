
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51pRrNnpfNL._SL1200_.jpg",
        name: "Insight Cosmetics Crème Blusher",
        details: "Face Makeup & Soft Salmon",
        rating: 4.0,
        price: 100,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71cuEb3hy6L._SL1500_.jpg",
        name: "Swiss Beauty Mini Baked Shimmer Blusher",
        details: "Multicolor",
        rating: 3.8,
        price: 250,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61RTVjO5PnL._SL1500_.jpg",
        name: "SUGAR POP Ultra HD Blush ",
        details: "Ultra Matte and Super Blendable ",
        rating: 4.1,
        price: 225,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/815ntSTrDLL._SL1500_.jpg",
        name: "FACES CANADA Berry Blush",
        details: "Lightweight Long Lasting",
        rating: 3.9,
        price: 244,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51oxVVSt3eL._SL1001_.jpg",
        name: "Makeup Revolution- Superdewy Liquid Blush",
        details: "Dewy & Radiant Finish",
        rating: 3.7,
        price: 521,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61JtJ9Ec3UL._SL1000_.jpg",
        name: "Lakme Absolute Face Stylist Blush",
        details: "Illuminating Powder for Glowing Cheeks",
        rating: 4.2,
        price: 775,
    },
    {
        anc: "",
        image: "https://m.media-amazon.com/images/I/41Yj7PGDpmS._SL1200_.jpg",
        name: "Lotus Makeup Herbals Blush",
        details: "Rosy Blush",
        rating: 3.8,
        price: 124,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41talnYuQqL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "Nykaa Sealed with a Kiss Lip Palette",
        details: "Matte Finish & Gives glow cheeks",
        rating: 4.0,
        price: 740,
    } ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/611hvmigH2L._SL1500_.jpg",
        name: "SUGAR Cosmetics - Face Fwd >> - Blush Stick",
        details: "Longlasting Formula, Lightweight Blush",
        rating: 3.9,
        price: 799,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/6183+ubk4SL._SL1000_.jpg",
        name: "Lakmé 9 To 5 Pure Rouge Blusher",
        details: "Longlasting pretty pink",
        rating: 3.7,
        price: 460,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41zmhodX5nL.jpg",
        name: "Nykaa Blush Palette",
        details: "Matte Finish",
        rating: 4.1,
        price: 765,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71HQF0CcPDL._SL1500_.jpg",
        name: "Just Herbs Natural Blush For Women",
        details: "Chemical & Paraben Free",
        rating: 4.2,
        price: 429,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/5180yR67nGL._SL1100_.jpg",
        name: "Plum Cheek-A-Boo Matte Blush",
        details: "Highly Pigmented & Effortless Blending",
        rating: 3.8,
        price: 332,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61dfbklXgfL._SL1500_.jpg",
        name: "Blue Heaven Shimmer Matte Blush",
        details: "Radiant finish",
        rating: 4.0,
        price: 145,
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51Yev+7Qb4L._SL1080_.jpg",
        name: "Makeup Revolution- Mousse Blusher",
        details: "Non-sticky, Cream-to-powder finish",
        rating: 3.7,
        price: 305,
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71d1nB+Og3L._SL1500_.jpg",
        name: "Colorbar Cheekillusion Blush",
        details: "Suitable for all skin types",
        rating: 3.9,
        price: 559,
    },  
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51sQUMWtndL._SL1100_.jpg",
        name: "HUDA BB 3 in 1 Blush",
        details: "Waterproof & Longlasting",
        rating: 4.1,
        price: 265,
    },    
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/2/3/234a29a773602000760_rv__1.jpg",
        name: "M.A.C Matte Powder Blush",
        details: "Longlasting Finish",
        rating: 3.8,
        price: 2798,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/617cvXiBL8L._SL1200_.jpg",
        name: "Biotique Natural Makeup Blush",
        details: "Matte Blush",
        rating: 3.7,
        price: 485,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71O7X3ygpLL._SL1500_.jpg",
        name: "Swiss Beauty mini Baked Shimmer Blusher",
        details: "Multicolor",
        rating: 4.0,
        price: 387,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41MXUriX5ZL._SL1001_.jpg",
        name: "MyGlamm Treasure It Powder Matte Blush",
        details: "Powder Matte Blush With Vitamin E",
        rating: 3.8,
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