var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [

 
    {   
        anc: "",
        image: "M20.png",
        name: "SKY HIGH",
        details: "Curling,Lengthening,Nourishing,Volume,Volumizing",
        rating: 4.2,
        price: 999,
    },
    {   
        anc: "",
        image: "https://www.gosupps.com/media/catalog/product/cache/25/small_image/375x450/9df78eab33525d08d6e5fb8d27136e95/4/1/41yuEEZh6ZL.jpg",
        name: "	L'OREAL PARIS",
        details: "Creamy Formula For Smooth Glide Application",
        rating: 4.4,
        price: 170,
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMP_FELHU0R3zcQ4NXLizwvvUBS0IcV2P7kw&usqp=CAU",
        name: "SUGAR",
        details: "Easy-to-use, long-lasting concealer stick",
        rating: 4.2,
        price: 320,
    },
    {   
        anc: "",
        image: "kajal16.jpg",
        name: "DHATHRI KAJAL",
        details: "Natural eye beauty",
        rating: 4.2,
        price: 95,
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
        image: "https://m.media-amazon.com/images/I/71HQF0CcPDL._SL1500_.jpg",
        name: "Just Herbs Natural Blush For Women",
        details: "Chemical & Paraben Free",
        rating: 4.2,
        price: 429,
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
        image: "M5.webp",
        name: "COLORBAR",
        details: " Smooth & Light Weight",
        rating: 4.2,
        price: 399,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51h2xd-LTBL.jpg",
        name: "DAZLLER",
        details: "Moisturizing",
        rating: 4.3,
        price: 250,
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
        image: "es17.jpg",
        name: "ELF EYESHADOW",
        details: "An eye expert",
        rating: 4.1,
        price: 499,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61pfm1PbUrL._AC_UL320_.jpg",
        name: "MOCKUP GLOSS",
        details: "Bold lips for a bold world",
        rating: 4.8,
        price: 149,
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
        image: "https://m.media-amazon.com/images/I/517Zg9PuHkL._SY679_.jpg",
        name: "BOBBIE BROWN EYELINER",
        details: "Do you smoke? Only my eyes",
        rating: 4.5,
        price: 868,
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
        image: "kajal20.jpg",
        name: "AVA KAJAL",
        details: "Look around with elegant eyes",
        rating: 4.1,
        price: 170,
    },
    {   
        anc: "",
        image: "https://img.fruugo.com/product/6/59/940567596_max.jpg",
        name: "MAGICAL HALO",
        details: "Face brightining",
        rating: 4.3,
        price: 320,
    } ,
    {   
        anc: "",
        image: "M14.jpg",
        name: "Las LOVING",
        details: "Easy-to-use, long lasting",
        rating: 4.2,
        price: 900,
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