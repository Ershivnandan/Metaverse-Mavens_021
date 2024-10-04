const dropdown = document.getElementById("hoverDropdown");
const item = document.getElementById("hoverContent");

function showDropdown(category) {
  let dropdownContent;
  let dropdownWidth;
  let translateValue;

  switch (category) {
    case "Men":
      dropdownContent = mensDropdown;
      dropdownWidth = "w-[70rem]";
      translateValue = "-translate-x-[5rem]";
      break;
    case "Women":
      dropdownContent = womensDropdown;
      dropdownWidth = "w-[70rem]";
      translateValue = "-translate-x-[5rem]";
      break;
    case "Kids":
      dropdownContent = kidsDropdown;
      dropdownWidth = "w-[70rem]";
      translateValue = "-translate-x-[5rem]";
      break;
    case "Home & Living":
      dropdownContent = homeLivingDropdown;
      dropdownWidth = "w-[70rem]";
      translateValue = "-translate-x-[5rem]";
      break;
    case "Beauty":
      dropdownContent = beautyDropdown;
      dropdownWidth = "w-[70rem]";
      translateValue = "-translate-x-[5rem]";
      break;
    case "Studio":
      dropdownContent = studioDropdown;
      dropdownWidth = "w-[30rem]";
      translateValue = "translate-x-[10rem]";
      break;
    default:
      return;
  }

  item.innerHTML = `${dropdownContent}`;

  dropdown.classList.remove("w-[70rem]", "w-[30rem]");
  dropdown.classList.add(dropdownWidth);

  dropdown.classList.remove("-translate-x-[5rem]", "translate-x-[10rem]");
  dropdown.classList.add(translateValue);

  dropdown.classList.remove("hidden");
  dropdown.classList.add("opacity-100", "translate-y-1");
}

function hideDropdown() {
  dropdown.classList.add("hidden");
  dropdown.classList.remove("opacity-100", "translate-y-1");
}

document.querySelectorAll(".group").forEach((group) => {
  group.addEventListener("mouseenter", function () {
    showDropdown(this.querySelector("a").innerText);
  });

  group.addEventListener("mouseleave", function () {
    hideDropdown();
  });
});

dropdown.addEventListener("mouseenter", function () {
  dropdown.classList.remove("hidden");
  dropdown.classList.add("opacity-100", "translate-y-1");
});

dropdown.addEventListener("mouseleave", function () {
  hideDropdown();
});

const mensDropdown = `<div class="mens-dropdown">
  <ul class="flex justify-between list-none p-0 overflow-hidden">
    <div> 
      <li class="font-semibold text-red-500 text-sm my-2">Topwear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">T-Shirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Casual Shirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Formal Shirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Sweatshirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Sweaters</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Jackets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Blazers & Coats</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Suits</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Rain Jackets</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-red-500 text-sm my-2">Indian & Festive Wear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Kurtas & Kurta Sets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Sherwanis</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Nehru Jackets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Dhotis</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-red-500 text-sm my-2">Bottomwear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Jeans</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Casual Trousers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Formal Trousers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Shorts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Track Pants & Joggers</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-red-500 text-sm my-2">Innerwear & Sleepwear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Briefs & Trunks</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Boxers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Vests</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Sleepwear & Loungewear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Thermals</li>
      </ul>
    </div>
    <div>
      <li class="font-semibold text-red-500 text-sm my-2">Plus Size</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Plus Size T-Shirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Plus Size Casual Shirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Plus Size Jeans</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Plus Size Jackets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Plus Size Kurtas</li>
      </ul>
    </div>
  </ul>
</div>
`;

const womensDropdown = `
<div class="womens-dropdown">
  <ul class="flex justify-between list-none gap-2 overflow-hidden">
    <div> 
      <li class="font-semibold text-[#fb56c1] text-sm my-2">Indian & Fusion Wear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Kurtas & Suits</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Kurtis, Tunics & Tops</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sarees</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Ethnic Wear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Leggings, Salwars & Churidars</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Skirts & Palazzos</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Dress Materials</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Lehenga Cholis</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Dupattas & Shawls</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Jackets</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#fb56c1] text-sm my-2">Western Wear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Dresses</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Maternity</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sunglasses & Frames</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Tshirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Trousers & Capris بالسالسا</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Shorts & Skirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Co-ords</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Playsuits</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Jumpsuits</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Shrugs</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sweaters & Sweatshirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Jackets & Coats</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Blazers & Waistcoats</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Belts, Scarves & More</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#fb56c1] text-sm my-2">Accessories & Footwear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Watches & Wearables</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Plus Size</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Lingerie & Sleepwear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Shapewear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sleepwear & Loungewear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Swimwear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Camisoles & Thermals</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sports Shoes & Floaters</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#fb56c1] text-sm my-2">Beauty & Gadgets</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Beauty & Personal Care</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Gadgets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Smart Wearables</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Fitness Gadgets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Headphones</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Speakers</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#fb56c1] text-sm my-2">Jewellery & Sports</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Jewellery</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Fashion Jewellery</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Fine Jewellery</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Earrings</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Casual Shoes</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sports Accessories</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sports Equipment</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Fragrances</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Backpacks</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Handbags, Bags & Wallets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Luggages & Trolleys</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#fb56c1] text-sm my-2">Skincare & Active Wear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Skincare</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Sports & Active Wear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Premium Beauty</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs hover:font-bold hover:scale-105 cursor-pointer">Lipsticks</li>
      </ul>
    </div>
  </ul>
</div>
`;

const kidsDropdown = `<div class="kids-dropdown">
  <ul class="flex justify-between list-none p-0 overflow-hidden">
    <div> 
      <li class="font-semibold text-[#f26a10] text-sm my-2">Clothing</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Trousers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Tshirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Clothing Sets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Lehenga Choli</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Kurta Sets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">T-Shirts</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">السا Boys Clothing</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Girls Clothing</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#f26a10] text-sm my-2">Ethnic & Party Wear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Dresses</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Tops</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Clothing Sets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Ethnic Wear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Track Pants & Pyjamas</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Party Wear</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Dungarees & Jumpsuits</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Skirts & Shorts</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#f26a10] text-sm my-2">Footwear</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Casual Shoes</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Flipflops</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Sports Shoes וויייי</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">School Shoes</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#f26a10] text-sm my-2">Accessories & Toys</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bags & Backpacks</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Watches</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Jewellery & Hair accessory</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Sunglasses</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Learning & Development Toys</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Action Figure/Play set</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#f26a10] text-sm my-2">Brands</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Max Kids</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Pantaloons</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">United Colors Of Benetton Kids</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">U.S. Polo Assn. Kids</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Mothercare</li>
      </ul>
    </div>
  </ul>
</div>
`;

const homeLivingDropdown = `<div class="home-living-dropdown">
  <ul class="flex justify-between list-none p-0 overflow-hidden">
    <div> 
      <li class="font-semibold text-[#f2c210] text-sm my-2">Bed Linen & Furnishing</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bed Runners</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Mattress Protectors</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bedsheets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bedding Sets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Blankets, Quilts & Dohars</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Pillows & Pillow Covers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bed Covers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Diwan Sets</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#f2c210] text-sm my-2">Kitchen & Table</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Home Décor</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Home Gift Sets</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bath Towels</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Plants & Planters</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hand & Face Towels</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Aromas & Candles</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Beach Towels</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Clocks</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#f2c210] text-sm my-2">Bathroom Accessories</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Towels Set</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Mirrors</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bath Rugs</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bath Robes</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bathroom Accessories</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Shower Curtains</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Chair Pads & Covers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Sofa Covers</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#f2c210] text-sm my-2">Lamps & Lighting</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Floor Lamps</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Ceiling Lamps</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Table Lamps</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Wall Décor</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Festive Decor</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Pooja Essentials</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Wall Shelves</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Fountains</li>
      </ul>
    </div>
    <div>
      <li class="font-semibold text-[#f2c210] text-sm my-2">Storage & Organisers</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bins</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hangers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Organisers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hooks & Holders</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Laundry Bags</li>
      </ul>
    </div>
    <div>
      <li class="font-semibold text-[#f2c210] text-sm my-2">Pure Home & Living</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Pure Home & Living</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Pure Home & Living</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Pure Home & Living</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Pure Home & Living</li>
      </ul>
    </div>
  </ul>
</div>`;

const beautyDropdown = `<div class="beauty-dropdown">
  <ul class="flex justify-between list-none p-0 overflow-hidden">
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Skincare & Bath</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Skincare</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Bath & Body</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Haircare</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Shampoo</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Conditioner</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Cream</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Oil</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Gel</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Color</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Serum</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Accessory</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Makeup</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Eyeshadow</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Foundation</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Concealer</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Nail Polish</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Fragrances</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Fragrances</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Perfume</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Deodorant</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Body Mist</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Appliances</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Appliances</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Straightener</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Dryer</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Epilator</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Top Brands</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Maybelline</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">THE BODY SHOP</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Mamaearth</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">MCaffeine</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Lotus Herbals</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">KAMA AYURVEDA</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Forest Essentials</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Men's Grooming</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Men's Grooming</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Beard Oil</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Trimmers</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Hair Wax</li>
      </ul>
    </div>
    <div> 
      <li class="font-semibold text-[#0db7af] text-sm my-2">Beauty Gift & Makeup Set</li>
      <ul class="dropdown-items">
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Beauty Gift</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Makeup Kit</li>
        <li class="font-normal pb-2 ps-1 text-gray-800 text-xs transition-all duration-300 ease-in-out hover:font-bold hover:scale-105 cursor-pointer">Beauty Gift & Makeup Set</li>
      </ul>
    </div>
  </ul>
</div>`;

const studioDropdown = `
  <div class="text-center text-[#2c3042]">
      <div class="flex justify-center px-2 py-2">
        <img class="w-44" src="https://i.ibb.co/xMp3F4F/studio-logo-new.png" alt="studio-logo-new" >
      </div>
      <p class="font-normal text-sm pb-3">Your daily inspiration for everything fashion</p>
      <img src="https://i.ibb.co/kqQCycQ/sudio-nav-banner.png" alt="sudio-nav-banner">
       <div class="group flex justify-center items-center gap-2 my-2">
          <button class="flex items-center transition-transform duration-300 ease-in-out  py-1 px-2">
            explore studio
            <img class="w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" src="https://img.icons8.com/?size=100&id=60671&format=png&color=000000" alt="arrow">
          </button>
        </div>
    </div>
`;

// Open and close side drawer

const hamburger = document.querySelector(".hamburger");
const drawer = document.getElementById("drawer-navigation");

hamburger.addEventListener("click", () => {
  drawer.style.transform = "translateX(0)";
});

document.addEventListener("click", function (event) {
  if (!drawer.contains(event.target) && !hamburger.contains(event.target)) {
    drawer.style.transform = "translateX(-100%)";
  }
});

let touchStartX = 0;

drawer.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

drawer.addEventListener("touchend", function (e) {
  const touchEndX = e.changedTouches[0].screenX;

  if (touchStartX - touchEndX > 50) {
    drawer.style.transform = "translateX(-100%)";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll("[data-collapse-toggle]");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const dropdownId = button.getAttribute("aria-controls");
      const dropdown = document.getElementById(dropdownId);
      dropdown.classList.toggle("hidden");
    });
  });
});

function handleProfileDropdown(isHover) {
  const dropdown2 = document.getElementById("hoverDropdown2");

  if (isHover) {
    dropdown2.classList.remove("hidden");
    dropdown2.classList.remove("opacity-0");
    dropdown2.classList.add("block");
    setTimeout(() => {
      dropdown2.classList.remove("opacity-0");
    }, 0);
  } else {
    dropdown2.classList.add("opacity-0");
    setTimeout(() => {
      dropdown2.classList.add("hidden");
    }, 300);
  }
}
