

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image:"lakme flawless.jpg", 
        name: "LAKME ABSOLUTE OIL SERUM FOUNDATION",
        details: "Foundation with serum helps for oily skin type",
        rating : 4.1,
        price: 635 ,
    },
    {   
        anc: "",
        image: "mamaearthcompact.jpg",
        name: "MAMAEARTH GLOW OIL CONTROL COMPACT",
        details: "Controls oil",
        rating: 4.2,
        price: 500.00
    },
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
        image: "https://m.media-amazon.com/images/I/51pRrNnpfNL._SL1200_.jpg",
        name: "Insight Cosmetics Crème Blusher",
        details: "Face Makeup & Soft Salmon",
        rating: 4.0,
        price: 100,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/415aQ-dO2UL._AC_UL320_.jpg",
        name: "LAKME ABSOLUTE",
        details: "Prime, perfect, and glow.",
        rating: 4.6,
        price: 179,
    },
    {   
        anc: "",
        image: "lakme mousse foundation.jpg",
        name: "LAKME MOUSSE FOUNDATION",
        details: "Gives creme finish to your face",
        rating : 4.2,
        price: 437,
    },
    {   
        anc: "",
        image: "lakmecompact2.jpg",
        name: "LAKME ULTRA MATTE COMPACT",
        details: "Gives Even-Tone Complexion",
        rating: 4.0,
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
        image: "https://m.media-amazon.com/images/I/71cuEb3hy6L._SL1500_.jpg",
        name: "Swiss Beauty Mini Baked Shimmer Blusher",
        details: "Multicolor",
        rating: 3.8,
        price: 250,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61q2HrBfj5L._AC_UL320_.jpg",
        name: "MAYBELINNE",
        details: "Giving you a flawless start.",
        rating: 4.6,
        price: 249,
    },
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
        image: "maybellinecompact.jpg",
        name: "MAYBELLINE COMPACT POWDER",
        details: "Protect Skin from Sun,Absorbs Oil",
        rating: 3.9,
        price: 259.00
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
        image: "https://m.media-amazon.com/images/I/61RTVjO5PnL._SL1500_.jpg",
        name: "SUGAR POP Ultra HD Blush ",
        details: "Ultra Matte and Super Blendable ",
        rating: 4.1,
        price: 225,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/415WsK7GRoL._AC_UL320_.jpg",
        name: "PRO ARTIST",
        details: "Prime and shine, then you're divine.",
        rating: 4.2,
        price: 298,
    },
    {   
        anc: "",
        image: "lakme pearl.jpg",
        name: "LAKME LIQUID PEARL FOUNDATION",
        details: "Gives natural glow",
        rating : 3.7,
        price: 160,
    },
    {   
        anc: "",
        image: "MyGlammcompact.jpg",
        name: "MYGLAMM SUPER SERUM COMPACT",
        details: "Matte Finish Compact Powder",
        rating: 3.8,
        price: 450.00
    },
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
        image: "https://m.media-amazon.com/images/I/815ntSTrDLL._SL1500_.jpg",
        name: "FACES CANADA Berry Blush",
        details: "Lightweight Long Lasting",
        rating: 3.9,
        price: 244,
    },


    {   
        anc: "",
        image: "myclam stick.jpg",
        name: "MY GLAMM STICK FOUNDATION",
        details: "Stick foundation easy to apply",
        rating : 4.1,
        price: 449,
    },   
    {   
        anc: "",
        image: "facescanadacompact.jpg",
        name: "FACES CANADA WEIGHTLESS COMPACT",
        details: "Non Oily Matte Look",
        rating: 4.1,
        price: 225.00
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
        image: "https://m.media-amazon.com/images/I/51oxVVSt3eL._SL1001_.jpg",
        name: "Makeup Revolution- Superdewy Liquid Blush",
        details: "Dewy & Radiant Finish",
        rating: 3.7,
        price: 521,
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
        image: "justherbscompact.jpg",
        name: "JUST HERBS COMPACT POWDER",
        details: "Oil Control Radiance Booster Age Defying",
        rating: 3.7,
        price: 450.00
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
        image: "https://m.media-amazon.com/images/I/61JtJ9Ec3UL._SL1000_.jpg",
        name: "Lakme Absolute Face Stylist Blush",
        details: "Illuminating Powder for Glowing Cheeks",
        rating: 4.2,
        price: 775,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61IxKwQeYAL._AC_UL320_.jpg",
        name: "IT",
        details: "Bringing out your skin's perfection.",
        rating: 4.0,
        price: 360,
    },  
    {   
        anc: "",
        image: "maybelline new york fit me.jpg", 
        name: "MAYBELLINE NEW YORK FIT ME FOUNDATION",
        details: "Gives a full-coverage to face",
        rating : 4.3,
        price: 629,
    } ,
    {   
        anc: "",
        image: "blueheavencompacct.jpg",
        name: "BLUE HEAVEN COMPACT POWDER",
        details: "Oil Control Matte Finish",
        rating: 4.0,
        price: 175.00
    } ,
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
        image: "https://m.media-amazon.com/images/I/41Yj7PGDpmS._SL1200_.jpg",
        name: "Lotus Makeup Herbals Blush",
        details: "Rosy Blush",
        rating: 3.8,
        price: 124,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51q6oXoTvQL._AC_UL320_.jpg",
        name: "BLUE HEAVEN",
        details: "When perfect skin is a must.",
        rating: 4.6,
        price: 299,
    },
    {   
        anc: "",
        image: "sugar.jpg",
        name: "MAYBELLINE NEW YORK FIT ME FOUNDATION",
        details: "Super stay ,full coverage",
        rating : 3.9,
        price: 535,
    },   
    {   
        anc: "",
        image: "elle18.jpg",
        name: "ELLE18 GLOW COMPACT",
        details: "Long Lasting Glow",
        rating: 3.8,
        price: 299.00 
    },
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
        image: "https://m.media-amazon.com/images/I/41talnYuQqL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "Nykaa Sealed with a Kiss Lip Palette",
        details: "Matte Finish & Gives glow cheeks",
        rating: 4.0,
        price: 740,
    } ,


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
        image: "lorealcompact.jpg",
        name: "L’Oréal PARIS COMPACT POWDER",
        details: "Lightweight & Blendable",
        rating: 3.9,
        price: 550.00
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
        image: "https://m.media-amazon.com/images/I/611hvmigH2L._SL1500_.jpg",
        name: "SUGAR Cosmetics - Face Fwd >> - Blush Stick",
        details: "Longlasting Formula, Lightweight Blush",
        rating: 3.9,
        price: 799,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41W25c5PsHL._AC_UL320_.jpg",
        name: "CHAMBOR",
        details: "Skin loving. Planet conscious.",
        rating: 4.4,
        price: 695,
    },  
    {   
        anc: "",
        image: "sb airbrush foundation.jpg",
        name: "SWISS BEAUTY AIRBRUSH WATERPROOF FOUNDATION",
        details: "Full-coverage,24h stay",
        rating : 3.8,
        price: 349,
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
        image: "https://m.media-amazon.com/images/I/41RoQoF9nRL._SY355_.jpg",
        name: "MAYBELLINE",
        details: "Concealer for flawless, natural coverage, Oil-free concealer matches skin tones to deliver a more even complexion",
        rating: 3.9,
        price: 650,
    }, 
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/6183+ubk4SL._SL1000_.jpg",
        name: "Lakmé 9 To 5 Pure Rouge Blusher",
        details: "Longlasting pretty pink",
        rating: 3.7,
        price: 460,
    }, 


    {   
        anc: "",
        image: "sb ivory rose.jpg",
        name: "SWISS BEAUTY FOUNDATION",
        details: "Ivory rose shade",
        rating : 3.7,
        price: 640,
    }, 
    {   
        anc: "",
        image: "mamaearthcompact1.jpg",
        name: "MAMAEARTH GLOW FULL COVERAGE COMPACT",
        details: "Up to 16-Hour Oil Control & Sweat-Resistant",
        rating: 3.8,
        price: 699.00
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
        image: "https://m.media-amazon.com/images/I/41zmhodX5nL.jpg",
        name: "Nykaa Blush Palette",
        details: "Matte Finish",
        rating: 4.1,
        price: 765,
    },


    {   
        anc: "",
        image: "sb tube.jpg",
        name: "SWISS BEAUTY TUBE FOUNDATION",
        details: "Gives you Matte finish",
        rating : 4.2,
        price: 388,
    },   
    {   
        anc: "",
        image: "reneecompact.jpg",
        name: "RENEE FACE BASE COMPACT POWDER",
        details: "Long - Lasting, Easy Blend, Matte Finish",
        rating: 3.7,
        price: 450.00
    }, 
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
        image: "https://m.media-amazon.com/images/I/712E0IYf0VL._AC_UL320_.jpg",
        name: "VEIL",
        details: "It's time to prime to be just fine.",
        rating: 4.2,
        price: 559,
    },
     {   
        anc: "",
        image: "me ivory clow.jpg",
        name: "MAMAEARTH GLOW SERUM FOUNDATION ",
        details: "Combination of skincare and Makeup",
        rating : 4.0,
        price: 299,
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
        image: "sugarcompact.jpg",
        name: "SUGAR  MATTIFYING COMPACT",
        details: "Lightweight Compact with SPF 15 and Vitamin E",
        rating: 4.0,
        price: 525.00 
    }, 

     {   
        anc: "",
        image: "me natural glow.jpg",
        name: "MAMAEARTH GLOW SERUM FOUNDATION",
        details: "Mixture of vitamin c to protect your skin",
        rating : 3.9,
        price: 496,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61ZOfsnHMoL._AC_UL320_.jpg",
        name: "COLORS QUEEN",
        details: "Giving you a flawless start.",
        rating: 3.9,
        price: 280,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/5180yR67nGL._SL1100_.jpg",
        name: "Plum Cheek-A-Boo Matte Blush",
        details: "Highly Pigmented & Effortless Blending",
        rating: 3.8,
        price: 332,
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
        image: "me creme glow.jpg",
        name: "MAMAEARTH GLOW SERUM FOUNDATION",
        details: "Protect your skin",
        rating : 3.7,
        price: 299,
    }, 
    {   
        anc: "",
        image: "marscompact.jpg",
        name: "MARS HD MATTIFYING COMPACT POWDER",
        details: "Lightweight Formula with Oil Control",
        rating: 3.9,
        price: 199.00
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51SpmffFB7L._AC_UL320_.jpg",
        name: "M.A.C BASE",
        details: "Prime, perfect, and glow.",
        rating: 4.0,
        price: 299,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61dfbklXgfL._SL1500_.jpg",
        name: "Blue Heaven Shimmer Matte Blush",
        details: "Radiant finish",
        rating: 4.0,
        price: 145,
    }, 
    {   
        anc: "",
        image: "mamaearth glow serum.jpg",
        name: "MAMAEARTH glow serum FOUNDATION",
        details: "Gives you natural glow",
        rating : 3.9,
        price: 496,
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
        image: "https://m.media-amazon.com/images/I/61KoJ0IVriL._SL1500_.jpg",
        name: "GLAM21 POWDER PERFECT COMPLEXION 2-in-1 COMPACT",
        details: "Sweatproof & Flowy Matte Finish",
        rating: 3.7,
        price: 299.00 
    }, 


    {   
        anc: "",
        image: "faces canada cocoa.jpg",
        name: "FACES CANADA TUBE FOUNDATION",
        details: "Gives you weightless matte finish look",
        rating : 4.2,
        price: 159,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51Yev+7Qb4L._SL1080_.jpg",
        name: "Makeup Revolution- Mousse Blusher",
        details: "Non-sticky, Cream-to-powder finish",
        rating: 3.7,
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
        image: "fc hd.jpg",
        name: "FACES CANADA HD FOUNDATION",
        details: "Ultimate pro HD ,Runway foundation",
        rating : 3.8,
        price: 1049,
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
        image: "https://m.media-amazon.com/images/I/71d1nB+Og3L._SL1500_.jpg",
        name: "Colorbar Cheekillusion Blush",
        details: "Suitable for all skin types",
        rating: 3.9,
        price: 559,
    },

    
    {   
        anc: "",
        image: "swiss beauty.jpg",
        name: "FACES CANADA FOUNDATION",
        details: "3 in 1 foundation,mouisturizer and sunscreen. All day hydra matte foundation",
        rating : 4.0,
        price: 384,
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
        image: "MyGlammcompact1.jpg",
        name: "MyGlamm RADIANT MATTE COMPACT POWDER",
        details: "Radiant Matte Finish",
        rating: 3.8,
        price: 299.00 
    },
    {   
        anc: "",
        image: "loreal.jpg",
        name: "Loreal PARIS FOUNDATION",
        details: "Stays upto 24hr,Infallible pro-glow",
        rating : 4.1,
        price: 1230,
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
        image: "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/l/-/l-a-girl-velvet-bronzer-contour-stick-goddess-5-8g.jpg",
        name: "L.A Girl",
        details: "This luxurious formula is paraben free with added jojoba seed oil",
        rating: 3.8,
        price: 980,
    },
    {   
        anc: "",
        image: "loreal carmel beige.jpg",
        name: "LOREAL PARIS FOUNDATION",
        details: "Infallible matte finish foundation",
        rating : 3.9,
        price: 750,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/5153-mToO8L._SL1000_.jpg",
        name: "KIRO BOTANICO TIMELESS MATTE COMPACT",
        details: "Waterproof, Vegan, Matte finish",
        rating: 3.9,
        price: 1500.00
    },
    {   
        anc: "",
        image: "https://images-static.nykaa.com/media/catalog/product/2/3/234a29a773602000760_rv__1.jpg",
        name: "M.A.C Matte Powder Blush",
        details: "Longlasting Finish",
        rating: 3.8,
        price: 2798,
    },
    {   
        anc: "",
        image: "l.jpg",
        name: "LOREAL PARIS FOUNDATION",
        details: "Foundation with SPF 17 protect from sun",
        rating : 4.3,
        price: 2308,
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
        image: "https://m.media-amazon.com/images/I/51cQY9Go3dL._SL1100_.jpg",
        name: "PLUM LEGIT MATTE TALC-FREE COMPACT",
        details: "100% Vegan & Cruelty Free & Tan Glow- 130N",
        rating: 4.2,
        price: 528.00
    },
    {   
        anc: "",
        image: "my glamm oil foundation.jpg",
        name: "MY GLAMM OIL CONTROL FOUNDATION",
        details: "Suitable f0r oily face",
        rating : 3.8,
        price: 995,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/617cvXiBL8L._SL1200_.jpg",
        name: "Biotique Natural Makeup Blush",
        details: "Matte Blush",
        rating: 3.7,
        price: 485,
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
        image: "my glamm serum foundation.jpg",
        name: "MY GLAMM GLOW SERUM FOUNDATION",
        details: "Combination of foundation and serum",
        rating : 4.2,
        price: 524,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/51E0w9ckNPL._SL1000_.jpg",
        name: "LAKME ABSOLUTE COMPACT POWDER",
        details: "Long Lasting Face Makeup for a Natural Glow",
        rating: 3.7,
        price: 875.00
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/71O7X3ygpLL._SL1500_.jpg",
        name: "Swiss Beauty mini Baked Shimmer Blusher",
        details: "Multicolor",
        rating: 4.0,
        price: 387,
    },
    {   
        anc: "",
        image: "lakme waterproof marble.jpg",
        name: "LAKME PRIMER + MATTE FOUNDATION",
        details: "Free from fear of sweating",
        rating : 4.1,
        price: 236,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/61YxFr1pwPL._SY355_.jpg",
        name: "COLORBAR",
        details: "The best way to apply this product is with fingertips as it will warm up the product before application",
        rating: 3.9,
        price: 283,
    },
    {   
        anc: "",
        image: "https://m.media-amazon.com/images/I/41MXUriX5ZL._SL1001_.jpg",
        name: "MyGlamm Treasure It Powder Matte Blush",
        details: "Powder Matte Blush With Vitamin E",
        rating: 3.8,
        price: 289,
    },
    {   
        anc: "",
        image: "mg hd.jpg",
        name: "MY GLAMM STICK FOUNDATION",
        details: "Easy-to-use, long-lasting",
        rating : 3.7,
        price: 509,
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