
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [

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
        image: "kajal4.jpg",
        name: "FARM HERBS KAJAL",
        details: "Beauty refined",
        rating: 3.9,
        price: 150,
    },    
    {   
        anc: "",
        image: "kajal5.jpg",
        name: "MAMAEARTH KAJAL",
        details: "Color-Enhancing kajal",
        rating: 4.0,
        price: 262,
    },    
    {   
        anc: "",
        image: "kajal6.jpg",
        name: "LAKME NATURAL KAJAL",
        details: "Look Around",
        rating: 3.7,
        price: 465,
    }, 
    {   
        anc: "",
        image: "kajal7.jpg",
        name: "HYPNOT KAJAL",
        details: "Create an ave",
        rating: 4.1,
        price: 179,
    } ,
    {   
        anc: "",
        image: "kajal8.jpg",
        name: "BABY KAJAL",
        details: "Shiny bright eyes",
        rating: 3.8,
        price: 229,
    },    
    {   
        anc: "",
        image: "kajal9.jpg",
        name: "MAC KAJAL",
        details: "For ur eyes",
        rating: 3.9,
        price: 750,
    },    
    {   
        anc: "",
        image: "kajal10.jpg",
        name: "HIMALAYA KAJAL",
        details: "Get ur spark",
        rating: 4.1,
        price: 129,
    },    
    {   
        anc: "",
        image: "kajal11.jpg",
        name: "MAYBELLINE COLLASAL KAJAL",
        details: "May be she is born beauty",
        rating: 3.7,
        price: 190,
    },    
    {   
        anc: "",
        image: "kajal12.jpg",
        name: "EYETEX KAJAL",
        details: "Have a eligant eyes",
        rating: 4.2,
        price: 125,
    },    
    {   
        anc: "",
        image: "kajal13.jpg",
        name: "BLUE HEAVEN KAJAL",
        details: "Change ur look",
        rating: 3.8,
        price: 126,
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
        image: "kajal15.jpg",
        name: "BOBBIE BROWN KAJAL",
        details: "Skin loving kajal",
        rating: 3.9,
        price: 550,
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
        image: "kajal17.jpg",
        name: "FACESCANADA KAJAL",
        details: "Let them stare",
        rating: 3.7,
        price: 250,
    },
    {   
        anc: "",
        image: "kajal18.jpg",
        name: "IBA KAJAL",
        details: "Gaze deep",
        rating: 4.0,
        price: 212,
    },
    {   
        anc: "",
        image: "kajal19.jpg",
        name: "REVLON KAJAL",
        details: "Create an awe",
        rating: 3.8,
        price: 533,
    },
    {   
        anc: "",
        image: "kajal20.jpg",
        name: "AVA KAJAL",
        details: "Look around with elegant eyes",
        rating: 4.1,
        price: 170,
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