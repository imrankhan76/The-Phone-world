
var mobiles = {
  APPLE: {
      iPhone13: {
          name: "iPhone 13",
          price: "$1000",
          fullName: "Apple iPhone 13 - 128GB, 5G, Midnight",
          category: "Smartphone",
          caption: "The iPhone 13 features a sleek design, powerful A15 Bionic chip, and an advanced dual-camera system. With 5G connectivity and a durable Ceramic Shield front, it offers a cutting-edge experience.",
          Tags: "128GB, Midnight, iPhone 13, A15 Bionic, 5G, Apple, Ceramic Shield",
          color: ["black", "blue", "pink"],
          img: "https://images.priceoye.pk/apple-iphone-13-pro-pakistan-priceoye-qvjw4.jpg",
      },
      iPhone14Pro: {
          name: "iPhone 14 Pro",
          price: "$1500",
          fullName: "Apple iPhone 14 Pro - 256GB, 5G, Space Black",
          caption: "The iPhone 14 Pro introduces Dynamic Island, the most powerful A16 Bionic chip, and a 48MP main camera for professional-grade photography. Experience exceptional performance and design.",
          category: "Smartphone",
          Tags: "256GB, Space Black, iPhone 14 Pro, A16 Bionic, 5G, Apple",
          color: ["black", "silver", "gold"],
          img: "https://images.priceoye.pk/apple-iphone-14-plus-pakistan-priceoye-6dfwo.jpg",
      },
      iPhoneSE: {
          name: "iPhone SE",
          price: "$600",
          fullName: "Apple iPhone SE - 64GB, 5G, Red",
          caption: "The iPhone SE is powered by the A15 Bionic chip, offering incredible performance in a compact design. With 5G connectivity and Touch ID, it’s both modern and familiar.",
          category: "Smartphone",
          Tags: "64GB, Red, iPhone SE, A15 Bionic, 5G, Apple",
          color: ["red", "white", "black"],
          img: "https://images.priceoye.pk/apple-i-phone-se-pakistan-priceoye-k0u7a.jpg",
      },
  },
  SAMSUNG: {
      GalaxyS23Ultra: {
          name: "Galaxy S23 Ultra",
          price: "$1200",
          fullName: "Samsung Galaxy S23 Ultra - 512GB, 5G, Phantom Black",
          caption: "The Galaxy S23 Ultra redefines innovation with its 200MP camera, 6.8-inch Dynamic AMOLED display, and S Pen integration. A premium smartphone for creativity and productivity.",
          category: "Smartphone",
          Tags: "512GB, Phantom Black, Galaxy S23 Ultra, Dynamic AMOLED, 5G, Samsung",
          color: ["black", "green", "cream"],
          img: "https://images.priceoye.pk/samsung-galaxy-s23-ultra-pakistan-priceoye-s4z8j.jpg",
      },
      GalaxyZFlip5: {
          name: "Galaxy Z Flip 5",
          price: "$1000",
          fullName: "Samsung Galaxy Z Flip 5 - 256GB, 5G, Lavender",
          caption: "The Galaxy Z Flip 5 combines innovation and style with its foldable design, 6.7-inch AMOLED display, and compact form factor. It’s a smartphone like no other.",
          category: "Smartphone",
          Tags: "256GB, Lavender, Galaxy Z Flip 5, Foldable, AMOLED, Samsung",
          color: ["lavender", "graphite", "cream"],
          img: "https://images.priceoye.pk/samsung-galaxy-z-flip-pakistan-priceoye-oq16h.jpg",
      },
      GalaxyA14: {
          name: "Galaxy A14",
          price: "$300",
          fullName: "Samsung Galaxy A14 - 64GB, 5G, Black",
          caption: "The Galaxy A14 offers great value with its large display, long-lasting battery, and triple-camera setup. An excellent choice for everyday use.",
          category: "Smartphone",
          Tags: "64GB, Black, Galaxy A14, Affordable, Samsung",
          color: ["black", "green", "white"],
          img: "https://images.priceoye.pk/samsung-galaxy-a05-pakistan-priceoye-42za3.jpg",
      },
  },
  GOOGLE: {
      Pixel7Pro: {
          name: "Pixel 7 Pro",
          price: "$900",
          fullName: "Google Pixel 7 Pro - 128GB, 5G, Obsidian",
          caption: "The Pixel 7 Pro features the powerful Google Tensor G2 chip, advanced AI capabilities, and a pro-level camera system for stunning photos and videos.",
          category: "Smartphone",
          Tags: "128GB, Obsidian, Pixel 7 Pro, Tensor G2, 5G, Google",
          color: ["obsidian", "snow", "hazel"],
          img: "https://images.priceoye.pk/google-pixel-pakistan-priceoye-500x500.webp",
      },
      PixelFold: {
          name: "Pixel Fold",
          price: "$1800",
          fullName: "Google Pixel Fold - 256GB, 5G, Black",
          caption: "The Pixel Fold is Google’s first foldable phone, featuring a stunning 7.6-inch OLED display, innovative multitasking features, and Google’s signature AI capabilities.",
          category: "Smartphone",
          Tags: "256GB, Black, Pixel Fold, Foldable, Google Tensor, Google",
          color: ["black", "silver"],
          img: "https://images.priceoye.pk/honor-x6a-pakistan-priceoye-5gv1q.jpg",
      },
  },
  XIAOMI: {
      Xiaomi13Pro: {
          name: "Xiaomi 13 Pro",
          price: "$800",
          fullName: "Xiaomi 13 Pro - 256GB, 5G, Ceramic White",
          caption: "The Xiaomi 13 Pro offers a flagship experience with its Snapdragon 8 Gen 2 processor, 120Hz AMOLED display, and 50MP Leica-tuned cameras.",
          category: "Smartphone",
          Tags: "256GB, Ceramic White, Xiaomi 13 Pro, Snapdragon 8 Gen 2, 5G",
          color: ["white", "black"],
          img: "https://images.priceoye.pk/xiaomi-redmi-a3x-pakistan-priceoye-pcnjn.jpg",
      },
      RedmiNote12: {
          name: "Redmi Note 12",
          price: "$300",
          fullName: "Xiaomi Redmi Note 12 - 128GB, 5G, Aurora Blue",
          caption: "The Redmi Note 12 delivers great performance at an affordable price, featuring a 120Hz AMOLED display, 5G connectivity, and a powerful 5000mAh battery.",
          category: "Smartphone",
          Tags: "128GB, Aurora Blue, Redmi Note 12, Budget, Xiaomi, 5G",
          color: ["blue", "black", "green"],
          img: "https://images.priceoye.pk/xiaomi-redmi-note-12-pakistan-priceoye-zroyt.jpg",
      },
  },
};


var selectbrand = document.getElementById("selectbrand")
var selectproduct = document.getElementById("selectproduct")
var selectedbrand ;
var selectedproduct ;
for(var brand in mobiles){
  selectbrand.innerHTML += `
      <option value="${brand}">${brand}</option>
  `
}


function selectbrandfunc(){
  selectedbrand = event.target.value
  selectproduct.innerHTML = `<option value="" selected disabled >Select Product</option>`;
  for(var product in mobiles[selectedbrand]){
      selectproduct.innerHTML += `
          <option value="${mobiles[selectedbrand][product].name}"  >${mobiles[selectedbrand][product].name}</option>
          
      `
  }
}

function selectproductfunc(){
  selectedproduct = event.target.value
}
function search(){
  for(var item in mobiles[selectedbrand]){
      if(selectedproduct == mobiles[selectedbrand][item].name){        
          var card = document.getElementById("card-parent") 
          card.innerHTML = `
                <div class="card d-block d-sm-block d-md-none d-lg-none mt-5"  >
                  <img class="mt-4" height="300px" width="100%" src="${mobiles[selectedbrand][item].img}" alt="">
                  <div style="width: 90%; margin: 0px auto;  padding-top: 10px; class="info " > 
                      <p class=" mt-4 mb-2 values text-start"><b>Name: </b>${mobiles[selectedbrand][item].name}</p>
                      <p class="my-2 text-start values"><b>Price: </b> ${mobiles[selectedbrand][item].price}</p>
                      <p class="my-2 text-start values"><b>Full Name: </b> ${mobiles[selectedbrand][item].fullName}</p>
                      <p class="my-2 text-start values"><b>Category: </b> ${mobiles[selectedbrand][item].category}</p>
                      <p class="my-2 text-start values"><b>Caption: </b> ${mobiles[selectedbrand][item].caption}</p>
                      <p class="my-2 text-start values"><b>Tags: </b> ${mobiles[selectedbrand][item].Tags}</p>
                      <p class="mt-2 mb-4 text-start values"><b>Color: </b> ${mobiles[selectedbrand][item].color}</p>
                  </div>
                </div>
                <div class="card-md d-none d-sm-none d-md-flex  " style="width:100%;" >
                  <div class="div-img">
                    <img style="display:flex; justify-content:center; align-items:center; margin: 0px;" height="300px"  width="300px" src="${mobiles[selectedbrand][item].img}" alt="">
                  </div>
                <div class="div text-center " style="margin: 0px auto; width:80% ;">
                  <p class="text-start values mt-3"><b>Name: </b>${mobiles[selectedbrand][item].name}</p>
                  <p class="text-start values"><b>Price: </b> ${mobiles[selectedbrand][item].price}</p>
                  <p class="text-start values"><b>Full Name: </b>${mobiles[selectedbrand][item].fullName}</p>
                  <p class="text-start values"><b>Category: </b>${mobiles[selectedbrand][item].category}</p>
                  <p class="text-start values"><b>Caption: </b>${mobiles[selectedbrand][item].caption}</p>
                  <p class="text-start values"><b>Tags: </b>${mobiles[selectedbrand][item].Tags}</p>
                  <p class="text-start values"><b>Color: </b>${mobiles[selectedbrand][item].color}</p>
              </div>


                </div>
          `
      } 
     
  }
}

