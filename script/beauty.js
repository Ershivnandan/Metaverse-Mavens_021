const beautyCards = document.getElementById("beautyCards");

const products = [
  {
    id: "img1",
    brand: "LOreal",
    product: "Hair Color - Dark Brown 03",
    price: 661,
    originalPrice: 679,
    discount: "10%",
    rating: 4.5,
    reviews: "2.5k",
    size: "150gm",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12442324/2022/2/21/ae87c9eb-356a-41c3-aee4-5a703add8cb91645432477345LOrealParisExcellenceCremeTripleCareHairColor72ml100g-DarkBr1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/6/15/0efffed1-bb68-4774-9daa-94ff6ad28e121623746468185-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12442324/2022/2/21/ea9e537e-6356-478e-916b-ba54258ad08b1645432477361LOrealParisExcellenceCremeTripleCareHairColor72ml100g-DarkBr4.jpg"
    ],
  },
  {
    id: "img2",
    brand: "Philips",
    product: "Heated Straightening Brush",
    price: 2999,
    originalPrice: 3499,
    discount: "15%",
    rating: 4.3,
    reviews: "1.2k",
    size: "Pack",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10244851/2021/2/10/32c4b366-a522-4d98-91f0-46d413de66031612945921510-Philips-Women-Heated-Straightening-Brush-with-Thermo-Protect-1.jpg",
      'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10244851/2021/2/10/6a0fd2d5-d3c6-4e82-b2f8-235f8a4680291612945921416-Philips-Women-Heated-Straightening-Brush-with-Thermo-Protect-6.jpg',
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10244851/2021/2/10/e0b3fb59-107b-4407-a99d-bdc0b6dfc8991612945921467-Philips-Women-Heated-Straightening-Brush-with-Thermo-Protect-3.jpg"
    ]
  },
  {
    id: "img3",
    brand: "LOreal",
    product: "Hair Color",
    price: 710,
    originalPrice: 888,
    discount: "20%",
    rating: 4.5,
    reviews: "2.5k",
    size: "Pack",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24247180/2023/7/31/8902d051-194a-48db-9844-da24ade0fd0f1690787988096SmashboxSetofSuperFanFalseLashMascaraPhotoFinishPrimerHairCo1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24247180/2023/7/31/9311ee2b-8116-4396-a6fb-1c95bd1f26821690787988181SmashboxSetofSuperFanFalseLashMascaraPhotoFinishPrimerHairCo2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24247180/2023/7/31/b09f71a2-17d9-41b7-a536-adb82138f4f11690787988233SmashboxSetofSuperFanFalseLashMascaraPhotoFinishPrimerHairCo6.jpg"]
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
    ]
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
    ]
  },
  {
    id: "img6",
    brand: "Dyson",
    product: "Gift Edition Airwrap Hair Multi-Styler - Vinca Blue & Rose",
    price: 59999,
    originalPrice: 64999,
    discount: "8%",
    rating: 4.7,
    reviews: "70",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22660956/2023/5/4/7b409b9d-0c8c-41ab-8b72-8ceb2e777aeb1683191418526-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22660956/2023/5/4/3fdf8959-d7c1-4b60-b5f1-70a5a138ef031683191418503-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22660956/2023/5/4/69fcfaef-e038-46b0-b92d-8d73f6628dab1683191418439-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-11.jpg"
    ]
  },
  {
    brand: "Philips",
    product: "HP8302/06 Selfie Straightener",
    price: 1166,
    originalPrice: 1495,
    discount: "22% OFF",
    rating: 4.3,
    reviews: "23.6k",
    size: "Onesize",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2974141/2022/10/3/9b166e4f-2de4-42a2-9001-4f557b85fc8d1664801329679-Philips-HP830206-Selfie-SilkPro-Care-Hair-Straightener---Bla-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14364942/2021/6/30/e315c844-4413-496e-9145-dbddd19ae4c31625049862239-Philips-Women-Silk-Protect-Technology-HS39740-Kerashine-Tita-2.jpg",
      "https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/10/30/c012a495-281c-4f50-89e2-acb46ecf7a451667118524556-123.jpeg"
    ]
  },
  {
    brand: "Philips",
    product: "SkinProtect Beard Trimmer",
    price: 815,
    originalPrice: 995,
    discount: "18% OFF",
    rating: 4.2,
    reviews: 860,
    size: "Onesize",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11878592/2023/8/9/d06afc34-9d7f-440b-a8be-10f7d74688961691570147618-Lifelong-Men-Black-Cordless-Beard-Trimmer-LLPCM13-2821691570-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22358346/2023/5/22/675a9cce-7a8d-467a-9789-bf6717d977041684733283364-Philips-BT123218-SkinProtect-Beard-Trimmer---Blue-8421684733-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22358346/2023/5/22/d4602806-8d95-4a17-8376-10f59d430b8c1684733283307-Philips-BT123218-SkinProtect-Beard-Trimmer---Blue-8421684733-6.jpg"
    ]
  },
  {
    brand: "Ponds",
    product: "Age Miracle Whippped Cream 35g",
    price: 241,
    originalPrice: 679,
    discount: "10% OFF",
    rating: 4.2,
    reviews: "2.5k",
    size: "100gm",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17389758/2022/3/9/677ca21d-7aee-4b0c-bac0-8ff047839ef01646808206624EyeshadowJeffreeStarCosmeticsUnisexEyeshadowJeffreeStarCosme1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17389758/2022/3/9/31117099-23a1-49c0-b46e-4d2374c840551646808206652EyeshadowJeffreeStarCosmeticsUnisexEyeshadowJeffreeStarCosme2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17389758/2022/3/9/ecf3e437-ec62-4855-80b3-0c9c3c3e2d6b1646808206644EyeshadowJeffreeStarCosmeticsUnisexEyeshadowJeffreeStarCosme11.jpg"
    ]
  },
  {
    brand: "Ponds",
    product: "Age Miracle Cell ReGEN Day Cream",
    price: 400,
    originalPrice: 679,
    discount: "10% OFF",
    rating: 4.5,
    reviews: "2.5k",
    size: "50gm",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/136266/2023/8/1/7a8099f5-5e85-4e1c-aa9c-18c7f50bd7571690871769346-Ponds-Age-Miracle-Cell-ReGEN-Day-Cream-4881690871768951-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/136266/2023/8/1/8bf4e949-4a11-438e-92af-9207b68cc91a1690871769333-Ponds-Age-Miracle-Cell-ReGEN-Day-Cream-4881690871768951-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/136266/2023/8/1/f293285e-8899-40aa-a1d9-ef2a7edc7b541690871769296-Ponds-Age-Miracle-Cell-ReGEN-Day-Cream-4881690871768951-5.jpg"
    ]
  },
  {
    brand: "Dove",
    product: "Daily Shine Shampoo",
    price: 233,
    originalPrice: 679,
    discount: "10% OFF",
    rating: 4.5,
    reviews: "2.5k",
    size: "1L",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11852414/2023/6/1/cc8e21cb-78df-496b-8b5f-c3e0709f65d91685619001276DoveUnisexDailyShineShampooForDullHair1L1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11852414/2023/6/1/da0bc6b2-cd3b-4126-a4ec-9b4f2a6d87e91685619001311DoveUnisexDailyShineShampooForDullHair1L2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11852414/2023/6/1/0449a87e-2272-46f9-9f1e-4761fb7073ce1685619001336DoveUnisexDailyShineShampooForDullHair1L4.jpg"
    ]
  },
  {
    brand: "Lakme",
    product: "Mattreal Skin Natural Mousse",
    price: 110,
    originalPrice: 129,
    discount: "16% OFF",
    rating: 4.5,
    reviews: "2.5k",
    size: "150gm",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/55118/2022/3/21/d647d908-2909-4244-ad1a-186fa8f3f89d1647860104751-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/55118/2023/1/23/3a681786-aa8b-4946-914e-f41e1f1e889f1674467298204-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-6.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/55118/2023/1/23/0459a743-35ce-47c7-9154-e4d71269680f1674467298195-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-7.jpg"
    ]
  },
    {
      brand: "Biotique",
      product: "Unisex Sustainable Hair Conditioning Herbcolor - Brown 4N",
      price: 111,
      originalPrice: 629,
      discount: "20% OFF",
      rating: 3.5,
      reviews: "2.5k",
      size: "120gm",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11607150/2020/7/6/ce3829b3-2604-4757-a9b3-35742c33c47b1594016574491-Bio-Herbcolor-1N-Natural-Black-50-gm-110-ml-5851594016573216-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11607146/2021/2/10/066a6eb2-02e2-485a-b90c-e72cda1280bb1612953568834BiotiqueUnisexSustainableHairConditioningHerbcolor-Brown4N2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11607146/2021/2/10/ed26e3fe-fcd9-4ed4-8e8a-d0397b150a401612953568813BiotiqueUnisexSustainableHairConditioningHerbcolor-Brown4N11.jpg"
      ]
    },
    {
      brand: "Maybelline",
      product: "Fit Me Compact - 128",
      price: 261,
      originalPrice: 619,
      discount: "15% OFF",
      rating: 4.5,
      reviews: "2.5k",
      size: "One Size",
      images: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13609228/2023/7/20/bdadf9cb-9261-4054-a22a-0125ce837d031689833694928-Maybelline-New-York-Fit-Me-12Hr-Oil-Control-SPF-28-PA-Compac-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13609228/2023/7/20/e7dc943b-2fdf-4a7a-8309-ab757678a1561689833694917-Maybelline-New-York-Fit-Me-12Hr-Oil-Control-SPF-28-PA-Compac-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13609228/2023/7/20/3ab068bc-7f71-4acf-8579-bcf44ce26d651689833694890-Maybelline-New-York-Fit-Me-12Hr-Oil-Control-SPF-28-PA-Compac-4.jpg"
      ]
    }  
];



products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card border p-4 m-4 w-64";

  const carousel = document.createElement("div");
  carousel.className = "owl-carousel owl-theme";
  product.images.forEach(image => {
    const item = document.createElement("div");
    item.className = "item";
    const imgTag = document.createElement("div");
    imgTag.className = "ImageTag";
    imgTag.textContent = "TRENDING";
    const link = document.createElement("a");
    link.href = product.url;
    const img = document.createElement("img");
    img.src = image;
    img.alt = product.product;
    img.className = "h-48 object-cover";  // Set fixed height and cover
    link.appendChild(img);
    item.appendChild(imgTag);
    item.appendChild(link);
    carousel.appendChild(item);
  });
  card.appendChild(carousel);

  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const rating = document.createElement("p");
  rating.className = "rating";
  rating.innerHTML = `${product.rating} <i class="fa-solid fa-star"></i> | ${product.reviews}`;
  mainContainer.appendChild(rating);

  const hover1 = document.createElement("div");
  hover1.className = "hover1";
  const brand = document.createElement("h3");
  brand.textContent = product.brand;
  hover1.appendChild(brand);
  const productName = document.createElement("p");
  productName.className = "product";
  productName.textContent = product.product;
  hover1.appendChild(productName);
  const price = document.createElement("h4");
  price.innerHTML = `Rs. ${product.price} <span class="price"> Rs. ${product.originalPrice}</span> <span class="discount"> (${product.discount} OFF)</span>`;
  hover1.appendChild(price);
  mainContainer.appendChild(hover1);
  card.appendChild(mainContainer);
  beautyCards.appendChild(card);
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    // margin: 10,
    // nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: true
  });
});