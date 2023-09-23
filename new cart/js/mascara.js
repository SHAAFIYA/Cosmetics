
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
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
        image: "M2.jpg",
        name: "RIMMELs",
        details: " Extra Super Lash Building Mascara",
        rating: 3.9,
        price: 300,
    },
    {   
        anc: "",
        image: "M3.webp",
        name: "NAITO",
        details: "Super Long Lash Mascara ",
        rating: 3.7,
        price: 450,
    }
    ,
    {   
        anc: "",
        image: "M4.webp",
        name: "EYECINIC",
        details: "Lash Cruling Mascara",
        rating: 4.0,
        price: 500,
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
        image: "M6.webp",
        name: "DIORSHOW",
        details: " Las Extension Effect Volume",
        rating: 3.7,
        price: 699,
    }, 
    {   
        anc: "",
        image: "M7.jpg",
        name: " MISS ROSE",
        details: "Natural Water Proof Mascara ",
        rating: 4.0,
        price: 540,
    },    
    {   
        anc: "",
        image: "M8.jpg",
        name: "SNAPSCARA",
        details: "Best Fibre Mascara ",
        rating: 3.9,
        price: 799,
    },    
    {   
        anc: "",
        image: "M9.jpg",
        name: "KUSH MASCARA",
        details: "mooth-free, transfer -proof finish",
        rating: 4.1,
        price: 800,
    },       
    {   
        anc: "",
        image: "M10.png",
        name: "KOSAS",
        details: "Hypoallergenic,Lengthening,Nourishing",
        rating: 3.9,
        price: 390,
    },    
    {   
        anc: "",
        image: "M11.jpg",
        name: "AIR Volume",
        details: "Separating",
        rating: 4.0,
        price: 199,
    },   
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
        image: "M13.webp",
        name: "SUGAR",
        details: "Growth of your natural lashes,fuels on regular use",
        rating: 3.9,
        price:299,
    },  
    {   
        anc: "",
        image: "M14.jpg",
        name: "Las LOVING",
        details: "Easy-to-use, long lasting",
        rating: 4.2,
        price: 900,
    },    
    {   
        anc: "",
        image: "M15.jpeg",
        name: "GLOSSIER",
        details: "Lengthening",
        rating: 4.0,
        price: 875,
    },
    {   
        anc: "",
        image: "M16.webp",
        name: "GLOSSAL",
        details: "Volumizing",
        rating: 3.7,
        price: 700,
    },
    {   
        anc: "",
        image: "M17.png",
        name: "Dior DIORSHOW",
        details: "Softening and Thickening",
        rating: 4.1,
        price: 470,
    },
    {   
        anc: "",
        image: "M18.png",
        name: "L'Oreal Telescopic",
        details: "Separating and Lengthening",
        rating: 3.8,
        price: 689,
    },
    {   
        anc: "",
        image: "M19.png",
        name: "LASH PARADISE",
        details: "Full Lash Fringe, Feathery Soft",
        rating: 4.0,
        price: 379,
    },
    {   
        anc: "",
        image: "M20.png",
        name: "SKY HIGH",
        details: "Curling,Lengthening,Nourishing,Volume,Volumizing",
        rating: 4.2,
        price: 999,
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