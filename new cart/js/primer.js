var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/415aQ-dO2UL._AC_UL320_.jpg",
        name: "LAKME ABSOLUTE",
        details: "Prime, perfect, and glow.",
        rating: 4.6,
        price: 179,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61q2HrBfj5L._AC_UL320_.jpg",
        name: "MAYBELINNE",
        details: "Giving you a flawless start.",
        rating: 4.6,
        price: 249,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/415WsK7GRoL._AC_UL320_.jpg",
        name: "PRO ARTIST",
        details: "Prime and shine, then you're divine.",
        rating: 4.2,
        price: 298,
    },  
       
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41W-LvBDmtL._AC_UL320_.jpg",
        name: "L'OREAL",
        details: "Keep calm and prime on.",
        rating: 4.5,
        price: 350,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51wEShxtkxL._AC_UL320_.jpg",
        name: "COLORBAR",
        details: "The magic of a flawless face.",
        rating: 4.4,
        price: 332,
    } ,
      
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61IxKwQeYAL._AC_UL320_.jpg",
        name: "IT",
        details: "Bringing out your skin's perfection.",
        rating: 4.0,
        price: 360,
    },    
     
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51q6oXoTvQL._AC_UL320_.jpg",
        name: "BLUE HEAVEN",
        details: "When perfect skin is a must.",
        rating: 4.6,
        price: 299,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71WpdUugRiL._AC_UL320_.jpg",
        name: "SMASHBOX2",
        details: "keep calm and prime on.",
        rating: 4.3,
        price: 329,
    },    
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41W25c5PsHL._AC_UL320_.jpg",
        name: "CHAMBOR",
        details: "Skin loving. Planet conscious.",
        rating: 4.4,
        price: 695,
    },  
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71G-iHxSD3L._AC_UL320_.jpg",
        name: "WET N WILD",
        details: "The secret weapon to perfect skin.",
        rating: 4.6,
        price: 659,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61fP6uiT5nL._AC_UL320_.jpg",
        name: "SWISS BEAUTY2",
        details: "Replenishing, peptide-infused cream",
        rating: 4.4,
        price: 798,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/712E0IYf0VL._AC_UL320_.jpg",
        name: "VEIL",
        details: "It's time to prime to be just fine.",
        rating: 4.2,
        price: 559,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61ZOfsnHMoL._AC_UL320_.jpg",
        name: "COLORS QUEEN",
        details: "Giving you a flawless start.",
        rating: 3.9,
        price: 280,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51SpmffFB7L._AC_UL320_.jpg",
        name: "M.A.C BASE",
        details: "Prime, perfect, and glow.",
        rating: 4.0,
        price: 299,
    },

    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41cRjsRd2KL._AC_UL320_.jpg",
        name: "GLAM21",
        details: "Prime and shine, then you're divine.",
        rating: 4.4,
        price: 465,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51QaO15lvdL._AC_UL320_.jpg",
        name: "MILLION COLOURS",
        details: "The secret weapon to perfect skin.",
        rating: 4.4,
        price: 149,
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