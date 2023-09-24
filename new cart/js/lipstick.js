
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61fMvdph3kL._SY355_.jpg",
        name: "MARS CREAMY MATTE LIPSTICK",
        details: " Smooth & Light Weight",
        rating: 4.2,
        price: 175,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41XxVBAgtiL._SY355_.jpg",
        name: "LAKME MATTE LIPSTICK",
        details: "Cloral Summer Shade",
        rating: 4,
        price: 276,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51TLoxIRdTL._SY355_.jpg",
        name: "FACES CANADA MATTE LIPSTICK",
        details: "Fuschia Wave Shade",
        rating: 3,
        price: 239,
    },
 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/416yWXBdj0L._SY355_.jpg",
        name: "LAKME 9TO5 MATTE LIPSTICK",
        details: "Blushing Nude Shade",
        rating: 4.6,
        price: 545,
    },

    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/312C7HA98XL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "LAKME LIPSTICK",
        details: "Pink Shade",
        rating: 4.2,
        price: 384,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51H6yLWwKwL._SY355_.jpg",
        name: "FACES CANADA MATTE LIPSTICK",
        details: "Pink Sugar",
        rating: 3.9,
        price: 196,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51IJoGuPowL._SY355_.jpg",
        name: "MY GLAMM LIQUID MATTE LIPSTICK",
        details: "Red Shade",
        rating: 4.5,
        price: 217,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51qWEehZSEL._SY355_.jpg",
        name: "MY GLAMM LIQUID MATTE LIPSTICK",
        details: "Brown Nudes",
        rating: 4.9,
        price: 217,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/517xG-f-LKL._SY355_.jpg",
        name: "MANISH MALHOTRA BEAUTY BY MYGLAMM LIQUID MATTE LIPSTICK",
        details: "Classic Mauve Shade",
        rating: 4.3,
        price: 696,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51EZZt03qRL._SY355_.jpg",
        name: "MANISH MALHOTRA BEAUTY BY MYGLAMM LIQUID MATTE LIPSTICK",
        details: "Light Pinl Shade",
        rating: 4.6,
        price: 559,
    },
    {   
        anc: "",
        image:"https://m.media-amazon.com/images/I/41+0DfGHxOL._SY300_SX300_.jpg", 
        name: "SUGAR MINI LIQUID LIPSTICK",
        details: "Smudge me not lipstick",
        rating: 4.9,
        price: 209 ,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/315jo7nnmvL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "SUGAR MINI CRAYON LIPSTICK",
        details: " Long Lasting Lipwear with Matte Finish, Cruelty-free and Paraben-free ",
        rating: 4.1,
        price: 497,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/513gRYnL1OL._AC_UL600_QL65_.jpg",
        name: "MAMAEARTH NATURAL MATTE LIPSTICK",
        details: "Lipstick with vitamin C,E and F",
        rating: 3.2,
        price: 526,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/514KE9qsPBL._SY355_.jpg",
        name: "LAKME LIPSTICK",
        details: "Crimson Shade",
        rating: 3.5,
        price: 384,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51s4uwij2gL._SY355_.jpg",
        name: "SWISS BEAUTY NAON-TRANSFER WATERPROOF LIPSTICK",
        details: "Roseate Shade",
        rating: 3.9,
        price: 299,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61AuaI-UBEL._SY355_PIbundle-10,TopRight,0,0_AA355SH20_.jpg",
        name: "SUGAR POP MATTE LIPSTICK",
        details: "Non-drying Formula, Long Lasting, Vegetarian, Paraben Free ",
        rating: 4.3,
        price: 269,
    }
    ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71mgCCqWduL._SY355_.jpg",
        name: "SUGAR POP 4 IN 1 LIPSTICK",
        details: "Multi use stackable,Easy to carry",
        rating: 3.2,
        price: 449,
    },    
   
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61dwzLpy7aL._SY355_.jpg",
        name: "MARS MATTE NON-TRANSFER LIPSTICK",
        details: " Up to 12 Hours Long Lasting | Smudge Proof and Waterproof Lipstick ",
        rating: 4,
        price: 299,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41KFOAYa-KL._SX300_SY300_QL70_FMwebp_.jpg", 
        name: "MARS INFINITY LIP PLATTE",
        details: "16 Colors to Infinte Lipstick Colors",
        rating: 3.3,
        price: 279,
    } ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31sOfj9B1EL._SY355_.jpg",
        name: "MARS MATTE LIPSTICK",
        details: "Smooth Application |Transferproof & Smudge Proof | Highly Pigemented Lipstick ",
        rating: 3.3,
        price: 223,
    },    
   
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/412Bzzmj+fL._SY300_SX300_.jpg",
        name: "MAMAEARTH MOUISTER MATTE LIPSTICK",
        details: "Avocado Oil & Vitamin E for 12 Hour Long Stay-01 Carnation Nude - 2 g",
        rating: 4.2,
        price: 433,
    },       
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61EE5+PAyEL._SY355_.jpg",
        name:  "MAMAEARTH MOUISTER MATTE LIPSTICK",
        details: "Melon Red shade",
        rating: 4.4,
        price: 433,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41PcuRhFelL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "MAMAEARTH SOFT MATTE LIPSTICK",
        details: "Mocha Brown Shade",
        rating: 3.3,
        price: 338,
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41KbnXHdb7L._SX300_SY300_QL70_FMwebp_.jpg",
        name: "SWISS BEAUTY HOLD ME MATTE LIPSTICK ",
        details: "Cute Nude Shade",
        rating: 4,
        price: 364,
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51VO1gWaoML._SY355_.jpg",
        name: "SWISS BEAUTY HOLD ME MATTE LIPSTICK",
        details: "Bite Me Red Shade",
        rating: 4,
        price: 364,
    },  
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/31f-XI6wVvL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "SWISS BEAUTY PURE MATTE LIPSTICK",
        details: "Paeches N Cream Shade",
        rating: 3,
        price: 195,
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