const beautyCards = document.getElementById("beautyCards")

const products = [
    {
      id: "img3",
      brand: "LOreal",
      product: "Hair Color & Shampoo Combo",
      price: 710,
      originalPrice: 888,
      discount: "20%",
      rating: 4.5,
      reviews: "2.5k",
      size: "Pack",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24247180/2023/7/31/8902d051-194a-48db-9844-da24ade0fd0f1690787988096SmashboxSetofSuperFanFalseLashMascaraPhotoFinishPrimerHairCo1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24247180/2023/7/31/9311ee2b-8116-4396-a6fb-1c95bd1f26821690787988181SmashboxSetofSuperFanFalseLashMascaraPhotoFinishPrimerHairCo2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24247180/2023/7/31/b09f71a2-17d9-41b7-a536-adb82138f4f11690787988233SmashboxSetofSuperFanFalseLashMascaraPhotoFinishPrimerHairCo6.jpg"
      ],
      url: "https://www.myntra.com/hair-care-combo/loreal/loreal-paris-color-protect-shampoo-180ml--excellence-creme-hair-color---dark-brown-03/24247180/buy"
    },
    {
      id: "img4",
      brand: "Lakme",
      product: "Women Brightening Creme 50g",
      price: 272,
      originalPrice: 349,
      discount: "22%",
      rating: 4.4,
      reviews: "3.1k",
      size: "150gm",
      stockMessage: "Only Few Left!",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1254169/2022/4/25/8136d98e-a8c6-4c6b-9352-34539a4c083f1650873303690-Lakme-Absolute-Perfect-Radiance-Skin-Lightening-Light-Creme--1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13609228/2023/7/20/74e01589-51aa-4a4c-8ea7-b9fa069793a01689833694844-Maybelline-New-York-Fit-Me-12Hr-Oil-Control-SPF-28-PA-Compac-11.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13609228/2023/7/20/2ba1589e-0ad1-4171-ac18-117bca77591e1689833694878-Maybelline-New-York-Fit-Me-12Hr-Oil-Control-SPF-28-PA-Compac-5.jpg"
      ],
      url: "https://www.myntra.com/day-cream/lakme/lakme-absolute-perfect-radiance-skin-brightening-light-creme-spf-20-50-g/1254169/buy"
    },
    {
      id: "img5",
      brand: "Indulekha",
      product: "Bringha Hair Oil 250 ml",
      price: 599,
      originalPrice: 999,
      discount: "40%",
      rating: 4.4,
      reviews: "11.1k",
      size: "250ML",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2508145/2023/5/31/1e1b780b-66b6-42a3-a08e-7a3256c6f4641685528431373-Indulekha-Bringha-Hair-Oil-100-ml-5081685528430928-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23294394/2023/7/17/ec2134a9-e10a-482a-bcdc-95bb374394281689577984662FACESCANADASetofMagneteyesKajal-Black01WeightlessMatteLipsti4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23294394/2023/7/17/709b31b9-8bd4-4aea-a01e-7a4d5900e29b1689577984730FACESCANADASetofMagneteyesKajal-Black01WeightlessMatteLipsti7.jpg"
      ],
      url: "https://www.myntra.com/hair-oil/indulekha/indulekha-bringha-hair-oil-250-ml/11879246/buy"
    },
    {
      id: "img6",
      brand: "Dyson",
      product: "Gift Edition Airwrap Hair Multi-Styler",
      price: 59999,
      originalPrice: 69999,
      discount: "15%",
      rating: 4.7,
      reviews: "5.5k",
      size: "Pack",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22660956/2023/5/4/7b409b9d-0c8c-41ab-8b72-8ceb2e777aeb1683191418526-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22660956/2023/5/4/3fdf8959-d7c1-4b60-b5f1-70a5a138ef031683191418503-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22660956/2023/5/4/69fcfaef-e038-46b0-b92d-..."
      ],
      url: "https://www.myntra.com/multi-styler/dyson/dyson-gift-edition-airwrap-hair-multi-styler---vinca-blue--rose/22660956/buy"
    }
  ];


for(let i =0; i<6; i++){
    products.forEach((item)=> {
        const card = document.createElement("div");
        card.className = "img"
        card.id = item.id


        const carouselImages = item.images.map(imageUrl => `
            <div class="item">
              ${item.id == "img3" ? `<div class="ImageTag">TRENDING </div>` : ""}
              <a><img src="${imageUrl}" alt="${item.product}"></a>
            </div>
          `).join(""); 

        card.innerHTML= `
            <!-- owl Carousel starts -->
                <div class="owl-carousel owl-theme">
                    ${carouselImages}
                </div>
            <!-- owl Carousel ends -->
                    <div class="main-container">
                        <p class="rating">${item.rating} <i class="fa-solid fa-star"></i> | ${item.reviews}</p>
                        <div class="hover">
                            <h3>${item.brand}</h3>
                            <p class="product">${item.product}</p>
                            <h4>Rs. ${item.price} <span class="price"> Rs. ${item.originalPrice}</span> <span class="discount"> (${item.discount} OFF)</span>
                            </h4>
                        </div>
                        <div class="after">
                            <div class="arc"><i class="fa-regular fa-heart"
                                    style="color: gray; margin-right: 5px;"></i>Wishlist
                            </div>
                            <div class="pre">
                                <p>Sizes:${item.size}</p>
                            </div>
                            <h4>Rs. ${item.price - (item.price * item.discount)} <span class="price"> Rs. ${item.originalPrice}</span> <span class="discount"> (${item.discount} OFF)</span>
                            </h4>
                        </div>
                    </div>
        `

        beautyCards.appendChild(card)
    })
}