
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
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
        image: "https://m.media-amazon.com/images/I/51AHLhiuJxL._AC_UL320_.jpg",
        name: "BARBIE LIFE LIPGLOSS",
        details: "Be sweet on the inside and glossy on the outside",
        rating: 4.5,
        price: 249,
    } ,
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
        image: "https://cdn.grofers.com/app/images/products/full_screen/pro_506103.jpg?ts=1684834572.jpg",
        name: "MARS",
        details: "Long Lasting & Easy to Carry",
        rating: 3.8,
        price: 320,
    },
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
        image: "https://m.media-amazon.com/images/I/315jo7nnmvL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "SUGAR MINI CRAYON LIPSTICK",
        details: " Long Lasting Lipwear with Matte Finish, Cruelty-free and Paraben-free ",
        rating: 4.1,
        price: 497,
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
        image: "https://m.media-amazon.com/images/I/41Vz9y+I7GL._AC_UL320_.jpg",
        name: "FLICKA LIPGLOSS",
        details: "Bold lips for a bold world",
        rating: 3.9,
        price: 699,
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
        image: "https://m.media-amazon.com/images/I/51wwY4adusL._AC_UF1000,1000_QL80_.jpg",
        name: "MYGLAMM",
        details: "Nourishing,Antioxidant",
        rating: 3.9,
        price: 456,
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
        image: "https://m.media-amazon.com/images/I/71mgCCqWduL._SY355_.jpg",
        name: "SUGAR POP 4 IN 1 LIPSTICK",
        details: "Multi use stackable,Easy to carry",
        rating: 3.2,
        price: 449,
    },   
    {   
        anc: "",
        image: "https://www.echemist.co.uk/media/product/maybelline-color-sensational-shaping-lip-liner3-hr.jpg",
        name: "MAYBELLINE",
        details: "Easily shape the curves of your lips for a fuller, plumper look",
        rating: 3.7,
        price: 550,
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
        image: "https://m.media-amazon.com/images/I/61fMvdph3kL._SY355_.jpg",
        name: "MARS CREAMY MATTE LIPSTICK",
        details: " Smooth & Light Weight",
        rating: 4.2,
        price: 175,
    }, 
    {   
        anc: "",
        image: "https://images-eu.ssl-images-amazon.com/images/I/61+Qh+jee1L._AC_UL600_SR600,400_.jpg",
        name: "ESSENCE",
        details: "shape, outline and fill in",
        rating: 4.2,
        price: 320,
    } ,
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
        image: "https://m.media-amazon.com/images/I/61dwzLpy7aL._SY355_.jpg",
        name: "MARS MATTE NON-TRANSFER LIPSTICK",
        details: " Up to 12 Hours Long Lasting | Smudge Proof and Waterproof Lipstick ",
        rating: 4,
        price: 299,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61A+7eAdVkL._AC_SX425_.jpg",
        name: "NYX PROFESSIONAL MAKEUP",
        details: "This buttery soft, long-wearing lip pencil formula goes on easily and resists bleeding.",
        rating: 3.9,
        price: 590,
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
        image: "https://m.media-amazon.com/images/I/41KFOAYa-KL._SX300_SY300_QL70_FMwebp_.jpg", 
        name: "MARS INFINITY LIP PLATTE",
        details: "16 Colors to Infinte Lipstick Colors",
        rating: 3.3,
        price: 279,
    } ,  
    {   
        anc: "",
        image: "https://www.bigw.com.au/medias/sys_master/images/images/h58/h53/16596631552030.jpg",
        name: "RIMMEL",
        details: "It's a long-wearing matte lip liner that gives all day shape",
        rating: 3.7,
        price: 600,
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
        image: "https://m.media-amazon.com/images/I/31sOfj9B1EL._SY355_.jpg",
        name: "MARS MATTE LIPSTICK",
        details: "Smooth Application |Transferproof & Smudge Proof | Highly Pigemented Lipstick ",
        rating: 3.3,
        price: 223,
    },  
    {   
        anc: "",
        image: "https://www.beautica-cosmetics.com/4685-home_default/bourjois-velvet-the-pencil-lipliner-n02-beige-a-croquer.jpg",
        name: "BOURJOIS",
        details: "Flawless matte finish,Lightweight formula",
        rating: 3.7,
        price: 565,
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
        image: "https://m.media-amazon.com/images/I/513gRYnL1OL._AC_UL600_QL65_.jpg",
        name: "MAMAEARTH NATURAL MATTE LIPSTICK",
        details: "Lipstick with vitamin C,E and F",
        rating: 3.2,
        price: 526,
    },     
    {   
        anc: "",
        image: "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/f/l/flormar-waterproof-lipliner-233-1-14g.jpg",
        name: "FLORMAR",
        details: "natural makeup,Convenient to use",
        rating: 4.0,
        price: 629,
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
        image: "https://m.media-amazon.com/images/I/412Bzzmj+fL._SY300_SX300_.jpg",
        name: "MAMAEARTH MOUISTER MATTE LIPSTICK",
        details: "Avocado Oil & Vitamin E for 12 Hour Long Stay-01 Carnation Nude - 2 g",
        rating: 4.2,
        price: 433,
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
        image: "https://m.media-amazon.com/images/I/61UxshipbhL._AC_UL320_.jpg",
        name: "BIOTIQUE LIPGLOSS",
        details: "So much gloss, so little time",
        rating: 3.9,
        price: 130,
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
        image: "https://target.scene7.com/is/image/Target/GUEST_3426a49e-5ddc-44a6-8526-d805be79baa7?wid=488&hei=488&fmt=pjpeg",
        name: "REVLON",
        details: "Provides longwearing definition,Win Win Situation for All",
        rating: 4.2,
        price: 870,
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
        image: "https://m.media-amazon.com/images/I/41PcuRhFelL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "MAMAEARTH SOFT MATTE LIPSTICK",
        details: "Mocha Brown Shade",
        rating: 3.3,
        price: 338,
    }, 
    {   
        anc: "",
        image: "https://www.drogeria-vmd.com/imgcache/c/0/p38102-vyr-28646PLUME-TUZKA_285_285_28050.jpg",
        name: "MAX FACTOR",
        details: "This lip liner sets accents, surrounds the lips optimally and ensures that tha lipstick does not smear",
        rating: 3.6,
        price: 305,
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
        image: "https://m.media-amazon.com/images/I/41KbnXHdb7L._SX300_SY300_QL70_FMwebp_.jpg",
        name: "SWISS BEAUTY HOLD ME MATTE LIPSTICK ",
        details: "Cute Nude Shade",
        rating: 4,
        price: 364,
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
        image: "https://m.media-amazon.com/images/I/71u+84JOSUL._AC_UL320_.jpg",
        name: "SWISS BEAUTY LIPGLOSS",
        details: "Life is too short for boring lip gloss.",
        rating: 4.0,
        price: 399,
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
        image: "https://di2ponv0v5otw.cloudfront.net/posts/2021/08/31/612ebc9dd737fdfad7fb85f0/m_612ebd21941f17597637b985.jpg",
        name: "ELF",
        details: "Smoothening,Long-lasting",
        rating: 3.8,
        price: 650,
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
        image: "https://m.media-amazon.com/images/I/31f-XI6wVvL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "SWISS BEAUTY PURE MATTE LIPSTICK",
        details: "Paeches N Cream Shade",
        rating: 3,
        price: 195,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71VZk+huPVL._AC_SX425_.jpg",
        name: "KIKO",
        details: "The light, creamy texture smoothes on leaving a matte finish that’s long wearing; waterproof formula",
        rating: 4.2,
        price: 890,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51mAC6Q0B3L._AC_UL320_.jpg",
        name: "MAMAEARTH LIPGLOSS",
        details: "For lips that shine bright",
        rating: 4.0,
        price: 149,
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
        image: "https://m.media-amazon.com/images/I/71fMUP30mTL._AC_SX425_.jpg",
        name: "URDAN DECAY",
        details: "Suitable for indoor and outdoor use",
        rating: 4.1,
        price: 779,
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
        image: "https://brastygroup.vshcdn.net/images/w600/139654-1.jpg?v=1675078930",
        name: "EVELINE",
        details: "Creamy formula confers a burst of colour that moisturizes your lips",
        rating: 4.4,
        price: 599,
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
        image: "https://impala-cosmetics.com/wp-content/uploads/2018/08/impala-flirt-lipliner-pencil-450x450.jpg",
        name: "IMPALA",
        details: "Provides impecable lip contour and prevents lipstick from smudging and smearing",
        rating: 3.8,
        price: 289,
    },

    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41XxVBAgtiL._SY355_.jpg",
        name: "LAKME MATTE LIPSTICK",
        details: "Cloral Summer Shade",
        rating: 4,
        price: 276,
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

