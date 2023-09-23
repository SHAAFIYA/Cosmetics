var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  document.addEventListener('DOMContentLoaded', function () {
    const eyeCategory = document.getElementById('eye-category');
    const faceCategory = document.getElementById('face-category');
    const lipCategory = document.getElementById('lip-category');

    const eyeProducts = document.getElementById('eye-products');
    const faceProducts = document.getElementById('face-products');
    const lipProducts = document.getElementById('lip-products');

    // Function to toggle the visibility of product sections
    function toggleProducts(products) {
        eyeProducts.style.display = 'none';
        faceProducts.style.display = 'none';
        lipProducts.style.display = 'none';

        if (products) {
            products.style.display = 'block';
        }
    }

    // Add click event listeners to category elements
    eyeCategory.addEventListener('click', function () {
        toggleProducts(eyeProducts);
    });

    faceCategory.addEventListener('click', function () {
        toggleProducts(faceProducts);
    });

    lipCategory.addEventListener('click', function () {
        toggleProducts(lipProducts);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the search input and search button
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    // Event listener for the search button click
    searchButton.addEventListener("click", function () {
        // Get the user's search input
        const searchTerm = searchInput.value.toLowerCase();

        // Define a mapping of search terms to corresponding HTML pages
        const searchMappings = {
            mascara: "mascara.html",
            eyeliner: "eyeliner.html",
            blush: "blush.html",
            powder: "powder.html",
            foundation : "foundation.html",
            lipstick : "lipstick.html",
            eyeshadow : "eyeshadow.html",
            kajal : "kajal.html"

            // Add more mappings for other products as needed
        };

        // Check if the search term exists in the mapping
        if (searchMappings.hasOwnProperty(searchTerm)) {
            // Redirect the user to the corresponding HTML page
            window.location.href = searchMappings[searchTerm];
        } else {
            // Handle the case where the search term is not found
            alert("Product not found. Please try a different search term.");
        }
    });
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
