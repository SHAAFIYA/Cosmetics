

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/283902/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_1_display_1609163307_fc67b1cd.jpg",
        name: "LAKME EC EYELIENR",
        details: "Just wing it!",
        rating: 4.9,
        price: 199,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51XDK403WBL._SY450_.jpg",
        name: "LAKME SS EYELINER",
        details: "Throwing a little shade.",
        rating: 4.8,
        price: 299,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51xXbkOuHbL._AC_UL320_.jpg",
        name: "MATLOOK EYELINER",
        details: "Smile, sparkle, shine",
        rating: 4.5,
        price: 209,
    }
    ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71ivQJwsxuL._SY450_.jpg",
        name: "REVOLUTION EYELINER",
        details: "Keep calm and sparkle on",
        rating: 4.6,
        price: 299,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51SgpFfD9GL._AC_UL320_.jpg",
        name: "MAYBELLIEN EYELINER",
        details: "Do you smoke? Only my eyes",
        rating: 4.5,
        price: 299,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/21ndghQOWpL._AC_UL320_.jpg",
        name: "LOREAL PARIS EYELINER",
        details: "When all else fails, turn it into a smokey eye",
        rating: 4.7,
        price: 449,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/21AqJQKcgQL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "SWISS BEAUTY EYELINER",
        details: "Relax – eyeliner can smell fear",
        rating: 4.1,
        price: 280,
    } ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41pxixMpbEL._AC_UL320_.jpg",
        name: "DAZZLER EYELINER",
        details: "Don’t let anyone ever dull your sparkle",
        rating: 4.9,
        price: 99,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71VuJ7Pwn3L._AC_UF1000,1000_QL80_.jpg",
        name: "RONZILE EYELINER",
        details: "I want to cry but my eye makeup looks so good right now",
        rating: 4.2,
        price: 250,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31WpwVbJHPL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "BH EYELINER",
        details: "I won’t cry for you, my eyeliner’s too expensive",
        rating: 4.1,
        price: 270,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31FwvR9Kq5L._SX300_SY300_QL70_FMwebp_.jpg",
        name: "COLOURROAR EYELINER",
        details: "Look me in the eyeliner and say that",
        rating: 4.0,
        price: 188,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61xLt0Hp6QL._SY450_.jpg",
        name: "MARS EYELINER",
        details: "I want to cry but my eye makeup looks so good right now",
        rating: 4.4,
        price: 272,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41qoPcrnL5L._SY450_.jpg",
        name: "MAMAEARTH EYELINER",
        details: "Don’t let anyone ever dull your sparkle",
        rating: 3.9,
        price: 210,
    },   
     {   
        anc: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYQKs-cvJFacbNuIdkNWefAoV8pAmXUJkXw&usqp=CAU",
        name: "COLLOSSAL EYELINER",
        details: "Relax – eyeliner can smell fear",
        rating: 4.0,
        price: 499,
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/517Zg9PuHkL._SY679_.jpg",
        name: "BOBBIE BROWN EYELINER",
        details: "Do you smoke? Only my eyes",
        rating: 4.5,
        price: 868,
    },  
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41U9-GGNO0L._AC_UL320_.jpg",
        name: "NYX EYELINER",
        details: "When all else fails, turn it into a smokey eye",
        rating: 4.3,
        price: 349,
    },    
    {   
        anc: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVTiOFREvOSvYnj5Upqico03QYueU1XH1wQ&usqp=CAU",
        name: "MAC EYELINER",
        details: "Keep calm and sparkle on",
        rating: 4.6,
        price: 549,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61cVWM2W0tL._SY606_.jpg",
        name: "AYA EYELINER",
        details: "Smile, sparkle, shine",
        rating: 4.1,
        price: 279,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61Un+WIzWqL._AC_UL320_.jpg",
        name: "JUSTHERBS EYELINER",
        details: "Throwing a little shade.",
        rating: 4.3,
        price: 399,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61L02+PPV1S._AC_UL320_.jpg",
        name: "FACES CANADA EYELINER",
        details: "Just wing it!",
        rating: 4.0,
        price: 317,
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