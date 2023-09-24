

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image:"../image/M1.jpg", 
        
        name: "NARS",
        details: "Nars Climax Dramatic volumizing Mascara",
        rating: 4.1,
        price: 250,
    },
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
        image: "../image/es1.jpg",
        name: "LAKME EYESHADOW",
        details: "Be classiful and be beautiful",
        rating: 4.1,
        price: 585,
    },
    {   
        anc: "",
        image: "../image/kajal3.jpg",
        name: "LAKME ELITE KAJAL",
        details: "Make Your Eyes Look Eligant",
        rating: 4.2,
        price: 95,
    },
    {   
        anc: "",
        image: "../image/M2.jpg",
        name: "RIMMELs",
        details: " Extra Super Lash Building Mascara",
        rating: 3.9,
        price: 300,
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
        image: "../image/es2.jpg",
        name: "MARS EYESHADOW",
        details: "Beauty is priceless when it is on ur eyes",
        rating: 3.9,
        price: 730,
    },
    {   
        anc: "",
        image: "../image/kajal4.jpg",
        name: "FARM HERBS KAJAL",
        details: "Beauty refined",
        rating: 3.9,
        price: 150,
    },
    {   
        anc: "",
        image: "../image/M3.webp",
        name: "NAITO",
        details: "Super Long Lash Mascara ",
        rating: 3.7,
        price: 450,
    },
    {
    anc: "",
    image: "https://m.media-amazon.com/images/I/51xXbkOuHbL._AC_UL320_.jpg",
    name: "MATLOOK EYELINER",
    details: "Smile, sparkle, shine",
    rating: 4.5,
    price: 209,
    },
    {   
        anc: "",
        image: "../image/es3.jpg",
        name: "THE BLUSHED NUDES",
        details: "Let ur beauty speaks for u",
        rating: 3.8,
        price: 899,
    },
    {   
        anc: "",
        image: "../image/kajal5.jpg",
        name: "MAMAEARTH KAJAL",
        details: "Color-Enhancing kajal",
        rating: 4.0,
        price: 262,
    },    
    {   
        anc: "",
        image: "../image/M4.webp",
        name: "EYECINIC",
        details: "Lash Cruling Mascara",
        rating: 4.0,
        price: 500,
    }, 
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
        image: "../image/es4.jpg",
        name: "REVOLUTION EYESHADOW",
        details: "Makeup which makes u love urself",
        rating: 4.2,
        price: 807,
    }, 
    {   
        anc: "",
        image: "../image/kajal6.jpg",
        name: "LAKME NATURAL KAJAL",
        details: "Look Around",
        rating: 3.7,
        price: 465,
    },   
    {   
        anc: "",
        image: "../image/M5.webp",
        name: "COLORBAR",
        details: " Smooth & Light Weight",
        rating: 4.2,
        price: 399,
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
        image: "../image/es5.jpg",
        name: "M.A.C EYESHADOW",
        details: "Create an outrageous look",
        rating: 3.7,
        price: 1900,
    },
    {   
        anc: "",
        image: "../image/kajal7.jpg",
        name: "HYPNOT KAJAL",
        details: "Create an ave",
        rating: 4.1,
        price: 179,
    } ,    
    {   
        anc: "",
        image: "../image/M6.webp",
        name: "DIORSHOW",
        details: " Las Extension Effect Volume",
        rating: 3.7,
        price: 699,
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
        image: "../image/es6.jpg",
        name: "NAKED5 EYESHADOW",
        details: "Eyes as u like it",
        rating: 4.0,
        price: 350,
    }, 
    {   
        anc: "",
        image: "../image/kajal8.jpg",
        name: "BABY KAJAL",
        details: "Shiny bright eyes",
        rating: 3.8,
        price: 229,
    }, 
    {   
        anc: "",
        image: "../image/M7.jpg",
        name: " MISS ROSE",
        details: "Natural Water Proof Mascara ",
        rating: 4.0,
        price: 540,
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
        image: "../image/es7.jpg",
        name: "ALEX AVIENS EYESHADOW",
        details: "For whom to deserves beautiful",
        rating: 3.9,
        price: 740,
    } ,
    {   
        anc: "",
        image: "../image/kajal9.jpg",
        name: "MAC KAJAL",
        details: "For ur eyes",
        rating: 3.9,
        price: 750,
    },   
    {   
        anc: "",
        image: "../image/M8.jpg",
        name: "SNAPSCARA",
        details: "Best Fibre Mascara ",
        rating: 3.9,
        price: 799,
    },
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
        image: "../image/es8.jpg",
        name: "THE 24 NUDES EYESHADOW",
        details: "Inspire others by ur eyes",
        rating: 3.7,
        price: 1529,
    },
    {   
        anc: "",
        image: "../image/kajal10.jpg",
        name: "HIMALAYA KAJAL",
        details: "Get ur spark",
        rating: 4.1,
        price: 129,
    },    
    {   
        anc: "",
        image: "../image/M9.jpg",
        name: "KUSH MASCARA",
        details: "mooth-free, transfer -proof finish",
        rating: 4.1,
        price: 800,
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
        image: "../image/kajal11.jpg",
        name: "MAYBELLINE COLLASAL KAJAL",
        details: "May be she is born beauty",
        rating: 3.7,
        price: 190,
    }, 
    {   
        anc: "",
        image: "../image/es9.jpg",
        name: "NAKED3 URBAN EYESHADOW",
        details: "Love begins with eye contact",
        rating: 4.2,
        price: 1599,
    },       
    {   
        anc: "",
        image: "../image/M10.png",
        name: "KOSAS",
        details: "Hypoallergenic,Lengthening,Nourishing",
        rating: 3.9,
        price: 390,
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
        image: "../image/kajal12.jpg",
        name: "EYETEX KAJAL",
        details: "Have a eligant eyes",
        rating: 4.2,
        price: 125,
    }, 
    {   
        anc: "",
        image: "../image/es10.jpg",
        name: "BLOOMHOUSE EYESHADOW",
        details: "The glam every women is beauty",
        rating: 4.0,
        price: 190,
    },   
    {   
        anc: "",
        image: "../image/M11.jpg",
        name: "AIR Volume",
        details: "Separating",
        rating: 4.0,
        price: 199,
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
        image: "../image/kajal13.jpg",
        name: "BLUE HEAVEN KAJAL",
        details: "Change ur look",
        rating: 3.8,
        price: 126,
    },
    {   
        anc: "",
        image: "../image/es11.jpg",
        name: "BELIEVE EYESHADOW",
        details: "Fablous colours for pretty faces",
        rating: 3.8,
        price: 250,
    }, 
     {   
        anc: "",
        image: "../image/M12.jpg",
        name: "MABELLINE ",
        details: "High Volume and Nourishing",
        rating: 3.7,
        price:550,
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
        image: "../image/kajal14.jpg",
        name: "BIOTIQUE KAJAL",
        details: "Long-Lasting Kajal",
        rating: 4.0,
        price: 150,
    }, 
    {   
        anc: "",
        image: "../image/es12.jpg",
        name: "DIER EYESHADOW",
        details: "Beuty is not free,its worth",
        rating: 3.7,
        price: 214,
    },
     {   
        anc: "",
        image: "../image/M13.webp",
        name: "SUGAR",
        details: "Growth of your natural lashes,fuels on regular use",
        rating: 3.9,
        price:299,
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
        image: "../image/kajal15.jpg",
        name: "BOBBIE BROWN KAJAL",
        details: "Skin loving kajal",
        rating: 3.9,
        price: 550,
    }, 
    {   
        anc: "",
        image: "../image/es13.jpg",
        name: "UTOPIA EYESHADOW",
        details: "Eyes as u like it",
        rating: 4.1,
        price: 3200,
    }, 
    {   
        anc: "",
        image: "../image/M14.jpg",
        name: "Las LOVING",
        details: "Easy-to-use, long lasting",
        rating: 4.2,
        price: 900,
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
        image: "../image/kajal16.jpg",
        name: "DHATHRI KAJAL",
        details: "Natural eye beauty",
        rating: 4.2,
        price: 95,
    }, 
    {   
        anc: "",
        image: "../image/es14.jpg",
        name: "KOEN EYESHADOW",
        details: "Time to treat ur eyes",
        rating: 3.9,
        price: 2050,
    }, 
    {   
        anc: "",
        image: "../image/M15.jpeg",
        name: "GLOSSIER",
        details: "Lengthening",
        rating: 4.0,
        price: 875,
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
        image: "../image/kajal17.jpg",
        name: "FACESCANADA KAJAL",
        details: "Let them stare",
        rating: 3.7,
        price: 250,
    },
    {   
        anc: "",
        image: "../image/es15.jpg",
        name: "M.A.C EYESHADOW",
        details: "Feathers on eyes",
        rating: 4.0,
        price: 2150,
    }, 
    {   
        anc: "",
        image: "../image/M16.webp",
        name: "GLOSSAL",
        details: "Volumizing",
        rating: 3.7,
        price: 700,
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
        image: "../image/kajal18.jpg",
        name: "IBA KAJAL",
        details: "Gaze deep",
        rating: 4.0,
        price: 212,
    },
    {   
        anc: "",
        image: "../image/es16.jpg",
        name: "RUBIES EYESHADOW",
        details: "Wings to fly ur shades",
        rating: 3.8,
        price: 352,
    }, 
    {   
        anc: "",
        image: "../image/M17.png",
        name: "Dior DIORSHOW",
        details: "Softening and Thickening",
        rating: 4.1,
        price: 470,
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
        image: "../image/kajal19.jpg",
        name: "REVLON KAJAL",
        details: "Create an awe",
        rating: 3.8,
        price: 533,
    },
    {   
        anc: "",
        image: "../image/es17.jpg",
        name: "ELF EYESHADOW",
        details: "An eye expert",
        rating: 4.1,
        price: 499,
    },
    {   
        anc: "",
        image: "../image/M18.png",
        name: "L'Oreal Telescopic",
        details: "Separating and Lengthening",
        rating: 3.8,
        price: 689,
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
        image: "../image/kajal20.jpg",
        name: "AVA KAJAL",
        details: "Look around with elegant eyes",
        rating: 4.1,
        price: 170,
    },
    {   
        anc: "",
        image: "../image/es18.jpg",
        name: "LORAC EYESHADOW",
        details: "Be classy and beautiful",
        rating: 3.7,
        price: 2200,
    },
    {   
        anc: "",
        image: "../image/M19.png",
        name: "LASH PARADISE",
        details: "Full Lash Fringe, Feathery Soft",
        rating: 4.0,
        price: 379,
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
        image: "../image/es19.jpg",
        name: "PEACH EYESHADOW",
        details: "Perfect shades perfect you",
        rating: 4.2,
        price: 1299,
    },
    {   
        anc: "",
        image: "../image/M20.png",
        name: "SKY HIGH",
        details: "Curling,Lengthening,Nourishing,Volume,Volumizing",
        rating: 4.2,
        price: 999,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61L02+PPV1S._AC_UL320_.jpg",
        name: "FACES CANADA EYELINER",
        details: "Just wing it!",
        rating: 4.0,
        price: 317,
    },
    {   
        anc: "",
        image: "../image/es20.jpg",
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