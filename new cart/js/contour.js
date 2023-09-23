
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dw1094242a/images/hi-res/FastBasecontourstick.png",
        name: "REVOLUTION",
        details: "Discoloration neutralizer for undereyes & face",
        rating: 4.1,
        price: 2117,
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
        image: "https://m.media-amazon.com/images/I/41N4aNc9uAL._AC_UF350,350_QL80_.jpg",
        name: "BEGGIE",
        details: "Waterproof Undereye concealer designed to conceal dark circle",
        rating: 4.0,
        price: 232,
    }
    ,
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51yRsJblpFL._SY355_.jpg",
        name: "SWISS BEAUTY",
        details: "It delivers highly pigmented, long-lasting, full coverage for dark circles and it also improves the appearance of wrinkles without creasing or cracking.",
        rating: 3.8,
        price: 50,
    },    
    {   
        anc: "",
        image: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/141106/ny-bae-foundation-concealer-contour-color-corrector-stick-toffee-for-the-harlem-dance-6_7_display_1629294775_9ada7d92.jpg",
        name: "NY Bae",
        details: "Consistent Shade,Consistent Texture,Easy Layering,Fadeproof,Long Lasting,Smooth Application,Smudgeproof",
        rating: 3.9,
        price: 339,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41lK2GBQpML._AC_UF1000,1000_QL80_.jpg",
        name: "WODWOD",
        details: "Ultra-fine shimmer powder, can highlight face bright and delicate sheen with the light reflection, showing three-dimensional facial contour",
        rating: 3.7,
        price: 500,
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
        image: "https://www.byrdie.com/thmb/Vma7djjU3nu5IRLrgCREdzTqarI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-contour-sticks-recirc-f4b0698c9a6e44bfacc950add7e75b74.jpg",
        name: "NYX",
        details: "smoothining",
        rating: 4.2,
        price: 390,
    },    
    {   
        anc: "",
        image: "https://www.instyle.com/thmb/_WdSMURCZrK3R5o3IxF_jxTy_eQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-elf-lead-5f46f2805db14906a99721159442e5b5.jpg",
        name: "ELF",
        details: "blends perfectly and has a nice glow to it",
        rating: 3.8,
        price: 600,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41RoQoF9nRL._SY355_.jpg",
        name: "MAYBELLINE",
        details: "Concealer for flawless, natural coverage, Oil-free concealer matches skin tones to deliver a more even complexion",
        rating: 3.9,
        price: 650,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61XB3pol7oL._SY450_.jpg",
        name: "INSIGHT",
        details: "The creamy texture blends effortlessly on the skin and gives a streak-free finish",
        rating: 3.7,
        price: 429,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61EoTRt6tqL._SY355_.jpg",
        name: "BLUE HEAVEN",
        details: "Hydrating Mango Butter moisturizes, and is ideal for sensitive or acne-prone skin",
        rating: 4.2,
        price: 699,
    },    
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61I-ObTpF0L._SY355_.jpg",
        name: "WET N WLID",
        details: "The contouring shade helps define and chisel while the highlighter illuminates your best features",
        rating: 3.7,
        price: 450,
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51c0iVxbTaL._SY355_.jpg",
        name: "DAZLLER",
        details: "Achieve your desired level of perfection with customizable coverage, from natural and effortless ",
        rating: 3.9,
        price: 305,
    },   
     {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51y0OQYPZGL._SY450_.jpg",
        name: "STAR STRUCK",
        details: "These water resistant sticks gives you a long wearing impact",
        rating: 4.1,
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
        image: "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/l/-/l-a-girl-velvet-bronzer-contour-stick-goddess-5-8g.jpg",
        name: "L.A Girl",
        details: "This luxurious formula is paraben free with added jojoba seed oil",
        rating: 3.8,
        price: 980,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41vtvaVf6QL._SY355_.jpg",
        name: "LAKME",
        details: "Built-in Primer + Matte Foundation with SPF 20",
        rating: 4.1,
        price: 850,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/7100wPV+HEL._SY355_.jpg",
        name: "BELLA VOSTE",
        details: "Long-lasting and velvet matte finish for a flawless look",
        rating: 3.8,
        price: 899,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61YxFr1pwPL._SY355_.jpg",
        name: "COLORBAR",
        details: "The best way to apply this product is with fingertips as it will warm up the product before application",
        rating: 3.9,
        price: 283,
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