
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "M12.jpg",
        name: "MABELLINE ",
        details: "High Volume and Nourishing",
        rating: 3.7,
        price:550,
    }, 
    {   
        anc: "",
        image: "https://www.sephora.com/productimages/sku/s2092948-main-hero.jpg",
        name: "MAC",
        details: "Smoothening",
        rating: 3.8,
        price: 950,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61v2MU3Oe2L._SX355_.jpg",
        name: "MYGLAMM",
        details: "Use as a concealer, highlighter or contour",
        rating: 4.0,
        price: 650,
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
        image: "https://m.media-amazon.com/images/I/51TLoxIRdTL._SY355_.jpg",
        name: "FACES CANADA MATTE LIPSTICK",
        details: "Fuschia Wave Shade",
        rating: 3,
        price: 239,
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
        image: "kajal14.jpg",
        name: "BIOTIQUE KAJAL",
        details: "Long-Lasting Kajal",
        rating: 4.0,
        price: 150,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41Vz9y+I7GL._AC_UL320_.jpg",
        name: "FLICKA LIPGLOSS",
        details: "Bold lips for a bold world",
        rating: 3.9,
        price: 699,
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
    image:"M1.jpg", 
    name: "NARS",
    details: "Nars Climax Dramatic volumizing Mascara",
    rating: 4.1,
    price: 250,
},
{   
    anc: "",
    image: "https://m.media-amazon.com/images/I/41MAw1LRPZL.jpg",
    name: "BUY INSIGHT",
    details: "Longlasting,Smoothening",
    rating: 3.9,
    price: 279,
},
{   
    anc: "",
    image: "https://m.media-amazon.com/images/I/41N4aNc9uAL._AC_UF350,350_QL80_.jpg",
    name: "BEGGIE",
    details: "Waterproof Undereye concealer designed to conceal dark circle",
    rating: 4.0,
    price: 232,
}
,
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
    image: "https://m.media-amazon.com/images/I/51AHLhiuJxL._AC_UL320_.jpg",
    name: "BARBIE LIFE LIPGLOSS",
    details: "Be sweet on the inside and glossy on the outside",
    rating: 4.5,
    price: 249,
} ,
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
    image: "es1.jpg",
    name: "LAKME EYESHADOW",
    details: "Be classiful and be beautiful",
    rating: 4.1,
    price: 585,
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
    image: "maybellinecompact.jpg",
    name: "MAYBELLINE COMPACT POWDER",
    details: "Protect Skin from Sun,Absorbs Oil",
    rating: 3.9,
    price: 259.00
},
{   
    anc: "",
    image: "kajal3.jpg",
    name: "LAKME ELITE KAJAL",
    details: "Make Your Eyes Look Eligant",
    rating: 4.2,
    price: 95,
},
{   
    anc: "",
    image: "https://m.media-amazon.com/images/I/61RTVjO5PnL._SL1500_.jpg",
    name: "SUGAR POP Ultra HD Blush ",
    details: "Ultra Matte and Super Blendable ",
    rating: 4.1,
    price: 225,
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