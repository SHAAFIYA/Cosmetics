var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
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
        image: "https://m.media-amazon.com/images/I/61LJbU0euuL._AC_UL320_.jpg",
        name: "RENEE LIPGLOSS",
        details: "For lips that shine bright",
        rating: 4.0,
        price: 199,
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
        image: "https://m.media-amazon.com/images/I/616K+m913hL._AC_UL320_.jpg",
        name: "ESSENCE GLOSS",
        details: "The ultimate in shine",
        rating: 4.1,
        price: 250,
    }, 
   
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61gqswgGWML._SX522_.jpg",
        name: "HERBS GLOSS",
        details: "Be sweet like candy, put on some",
        rating: 4.1,
        price: 210,
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
        image: "https://m.media-amazon.com/images/I/71PtZkDnyTL._AC_UL320_.jpg",
        name: "PLUMPER LIPGLOSS",
        details: "Be sweet like candy, put on some in Gloss",
        rating: 3.9,
        price: 289,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51zbvScVVxL._AC_UL320_.jpg",
        name: "INFALLIBLE GLOSS",
        details: "Life is too short for boring lip gloss.",
        rating: 4.5,
        price: 999,
    },   
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/615mum7dbWL._AC_UL320_.jpg",
        name: "SEPHORA LIPGLOSS",
        details: "The ultimate in shine",
        rating: 4.2,
        price: 299,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51Y08Yv8pkL._AC_UL320_.jpg",
        name: "PINK VILLA LIPGLOSS",
        details: "For lips that wow",
        rating: 4.4,
        price: 380,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61UxshipbhL._AC_UL320_.jpg",
        name: "BIOTIQUE LIPGLOSS",
        details: "So much gloss, so little time",
        rating: 3.9,
        price: 130,
    },   
     
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61An-77BP+L._AC_UL320_.jpg",
        name: "GLOSS ANGELS",
        details: "Be sweet on the inside and glossy on the outside",
        rating: 4.3,
        price: 259,
    },   
 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61VubK11lfL._AC_UL320_.jpg",
        name: "FOREVER 21 GLOSS",
        details: "For lips that wow",
        rating: 4.6,
        price: 499,
    },    
 

    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71u+84JOSUL._AC_UL320_.jpg",
        name: "SWISS BEAUTY LIPGLOSS",
        details: "Life is too short for boring lip gloss.",
        rating: 4.0,
        price: 399,
    }, 
        {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61u79YaHiUL._AC_UL320_.jpg",
        name: "CLEAR TINT LIPGLOSS",
        details: "Be sweet on the inside and glossy on the outside",
        rating: 4.1,
        price: 199,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51mAC6Q0B3L._AC_UL320_.jpg",
        name: "MAMAEARTH LIPGLOSS",
        details: "For lips that shine bright",
        rating: 4.0,
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