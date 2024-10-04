class myntraFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
            <footer class="bg-gray-100 p-6 mt-10">
      <div
        class="upper grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-[90%] my-0 mx-auto"
      >
        <div
          class="grid grid-cols-2 gap-10 text-xs leading-6 text-[#696b79] py-1"
        >
          <ul class="capitalize">
            <h4 class="uppercase text-black font-bold text-xs">
              online shopping
            </h4>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
          <ul class="capitalize">
            <h4 class="uppercase text-black font-bold text-xs">
              customer policies
            </h4>
            <li>Contsct Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>terms Of Use</li>
            <li>Track orders</li>
            <li>Shipping</li>
            <li>cancellation</li>
            <li>returns</li>
            <li>privecy policy</li>
            <li>Grivence officer</li>
          </ul>
          <ul class="capitalize -mt-20">
            <h4 class="uppercase text-black font-bold text-xs">useful links</h4>
            <li>blog</li>
            <li>career</li>
            <li>site map</li>
            <li>corporate information</li>
            <li>cleartrip</li>
          </ul>
        </div>

        <div class="py-1">
          <h4 class="uppercase text-black font-bold text-xs pb-2">
            EXPERIENCE MYNTRA APP ON MOBILE
          </h4>

          <div class="flex gap-5 items-center">
            <img
              class="h-[43px] w-auto"
              src="https://i.ibb.co/DL2ky1N/5a902dbf7f96951c82922875.png"
              alt="Download on Google Play"
            />
            <img
              class="h-[30px] w-auto"
              src="https://i.ibb.co/RvTgLGp/5a902db97f96951c82922874.png"
              alt="Download on the App Store"
            />
          </div>

          <div class="py-4">
            <h6 class="uppercase text-black font-bold text-xs py-2">
              Keep in touch
            </h6>
            <div class="flex gap-4">
              <a>
                <img
                  class="w-8"
                  src="https://img.icons8.com/?size=100&id=59780&format=png&color=696b79"
                  alt=""
                />
              </a>
              <a>
                <img
                  class="w-8"
                  src="https://img.icons8.com/?size=100&id=8824&format=png&color=696b79"
                  alt=""
                />
              </a>
              <a>
                <img
                  class="w-8"
                  src="https://img.icons8.com/?size=100&id=37326&format=png&color=696b79"
                  alt=""
                />
              </a>
              <a>
                <img
                  class="w-8"
                  src="https://img.icons8.com/?size=100&id=16162&format=png&color=696b79"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div class="py-1">
          <div class="flex gap-5 mb-4 items-center">
            <img
              src="https://i.ibb.co/dkFBBjn/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              alt="6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original"
              class="h-14 p-1 w-auto -ms-2"
            />
            <p class="text-black text-sm -ms-2">
              <span class="font-bold">100% ORIGINAL</span> guarantee for all
              products at myntra.com
            </p>
          </div>
          <div class="flex gap-5 items-center">
            <img
              class="h-14 p-1 w-auto"
              src="https://i.ibb.co/sgnY3Nj/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
              alt="becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image"
            />
            <p class="text-black text-sm -ms-2">
              <span class="font-bold">100% ORIGINAL</span> guarantee for all
              products at myntra.com
            </p>
          </div>
        </div>
      </div>

      <div class="middle w-[90%] my-5 mx-auto">
        <div>
          <h4 class="uppercase text-black font-bold text-xs">
            popular searches
          </h4>

          <p class="my-2 text-sm leading-7 text-[#696b79]">
            Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
            Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
            Sport Shoes | Reebok Shoes | Puma Shoes Boxers Wallets | Tops |
            Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan
            Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever
            21 | Eye Makeup Photo Frames | Punjabi Suits Bikini | Myntra Fashion
            Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes |
            Goggles | Bras | Suit | Chinos | Shoes Adidas Shoes | Woodland Shoes
            | Jewellery | Designers Sarees
          </p>

          <div class="text-[#696b79] flex justify-between my-7 text-sm">
            <p>
              In case of any concern,<span class="font-bold text-blue-700">
                Contact Us</span
              >
            </p>
            <p>© 2024 www.myntra.com. All rights reserved.</p>
            <p>A Flipkart company</p>
          </div>
        </div>
      </div>

      <div class="bottom w-[90%] my-5 mx-auto">
        <div class="flex md:gap-56 gap-20 md:flex-row flex-col">
          <div class="address text-sm text-[#696b79] float-start">
            <h4 class="capitalize text-black font-semibold text-sm">
              Registered Office Address
            </h4>
            <p class="leading-6 mt-4">
              Buildings Alyssa, <br />
              Begonia and Clover situated in Embassy Tech Village, <br />
              Outer Ring Road, <br />
              Devarabeesanahalli Village, <br />Varthur Hobli, <br />
              Bengaluru – 560103, India
            </p>
          </div>

          <div
            class="text-sm text-[#696b79] flex flex-col text-left items-start md:place-self-end"
          >
            <p>CIN: U72300KA2007PTC041799</p>
            <p>
              Telephone:
              <span class="text-blue-700 font-semibold">+91-80-61561999</span>
            </p>
          </div>
        </div>

        <div class="text-sm text-[#696b79] my-7">
          <h4 class="capitalize text-black font-semibold text-sm">
            ONLINE SHOPPING MADE EASY AT MYNTRA
          </h4>

          <p class="py-6">
            If you would like to experience the best of online shopping for men,
            women and kids in India, you are at the right place. Myntra is the
            ultimate destination for fashion and lifestyle, being host to a wide
            array of merchandise including clothing, footwear, accessories,
            jewellery, personal care products and more. It is time to redefine
            your style statement with our treasure-trove of trendy items. Our
            online store brings you the latest in designer products straight out
            of fashion houses. You can shop online at Myntra from the comfort of
            your home and get your favourites delivered right to your doorstep.
          </p>
          <h4 class="capitalize text-black font-semibold text-sm my-7">
            BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
          </h4>

          <p class="py-6">
            Be it clothing, footwear or accessories, Myntra offers you the ideal
            combination of fashion and functionality for men, women and kids.
            You will realise that the sky is the limit when it comes to the
            types of outfits that you can purchase for different occasions.
          </p>

          <ul class="list-decimal flex flex-col gap-6 text-xs">
            <li>
              <span class="font-semibold text-black">Smart men’s clothing </span
              >- At Myntra you will find myriad options in smart formal shirts
              and trousers, cool T-shirts and jeans, or kurta and pyjama
              combinations for men. Wear your attitude with printed T-shirts.
              Create the back-to-campus vibe with varsity T-shirts and
              distressed jeans. Be it gingham, buffalo, or window-pane style,
              checked shirts are unbeatably smart. Team them up with chinos,
              cuffed jeans or cropped trousers for a smart casual look. Opt for
              a stylish layered look with biker jackets. Head out in cloudy
              weather with courage in water-resistant jackets. Browse through
              our innerwear section to find supportive garments which would keep
              you confident in any outfit.
            </li>
            <li>
              <span class="font-semibold text-black"
                >Trendy women’s clothing
              </span>
              - Online shopping for women at Myntra is a mood-elevating
              experience. Look hip and stay comfortable with chinos and printed
              shorts this summer. Look hot on your date dressed in a little
              black dress, or opt for red dresses for a sassy vibe. Striped
              dresses and T-shirts represent the classic spirit of nautical
              fashion. Choose your favourites from among Bardot, off-shoulder,
              shirt-style, blouson, embroidered and peplum tops, to name a few.
              Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and
              jeans make the perfect fusion-wear combination for the cool
              urbanite. Our grand sarees and lehenga-choli selections are
              perfect to make an impression at big social events such as
              weddings. Our salwar-kameez sets, kurtas and Patiala suits make
              comfortable options for regular wear.
            </li>
            <li>
              <span class="font-semibold text-black"
                >Fashionable footwear
              </span>
              - While clothes maketh the man, the type of footwear you wear
              reflects your personality. We bring you an exhaustive lineup of
              options in casual shoes for men, such as sneakers and loafers.
              Make a power statement at work dressed in brogues and oxfords.
              Practice for your marathon with running shoes for men and women.
              Choose shoes for individual games such as tennis, football,
              basketball, and the like. Or step into the casual style and
              comfort offered by sandals, sliders, and flip-flops. Explore our
              lineup of fashionable footwear for ladies, including pumps, heeled
              boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort
              and style with embellished and metallic flats.
            </li>
            <li>
              <span class="font-semibold text-black">Stylish accessories </span>
              - Myntra is one of the best online shopping sites for classy
              accessories that perfectly complement your outfits. You can select
              smart analogue or digital watches and match them up with belts and
              ties. Pick up spacious bags, backpacks, and wallets to store your
              essentials in style. Whether you prefer minimal jewellery or grand
              and sparkling pieces, our online jewellery collection offers you
              many impressive options.
            </li>
            <li>
              <span class="font-semibold text-black">Fun and frolic </span>-
              Online shopping for kids at Myntra is a complete joy. Your little
              princess is going to love the wide variety of pretty dresses,
              ballerina shoes, headbands and clips. Delight your son by picking
              up sports shoes, superhero T-shirts, football jerseys and much
              more from our online store. Check out our lineup of toys with
              which you can create memories to cherish.
            </li>
            <li>
              <span class="font-semibold text-black">Beauty begins here </span>-
              You can also refresh, rejuvenate and reveal beautiful skin with
              personal care, beauty and grooming products from Myntra. Our
              soaps, shower gels, skin care creams, lotions and other ayurvedic
              products are specially formulated to reduce the effect of aging
              and offer the ideal cleansing experience. Keep your scalp clean
              and your hair uber-stylish with shampoos and hair care products.
              Choose makeup to enhance your natural beauty.
            </li>
          </ul>

          <div class="text-xs">
            <p class="py-6 text-xs">
              Myntra is one of the best online shopping sites in India which
              could help transform your living spaces completely. Add colour and
              personality to your bedrooms with bed linen and curtains. Use
              smart tableware to impress your guest. Wall decor, clocks, photo
              frames and artificial plants are sure to breathe life into any
              corner of your home.
            </p>

            <h4 class="uppercase text-black font-semibold text-sm">
              AFFORDABLE FASHION AT YOUR FINGERTIPS
            </h4>

            <p class="py-6">
              Myntra is one of the unique online shopping sites in India where
              fashion is accessible to all. Check out our new arrivals to view
              the latest designer clothing, footwear and accessories in the
              market. You can get your hands on the trendiest style every season
              in western wear. You can also avail the best of ethnic fashion
              during all Indian festive occasions. You are sure to be impressed
              with our seasonal discounts on footwear, trousers, shirts,
              backpacks and more. The end-of-season sale is the ultimate
              experience when fashion gets unbelievably affordable.
            </p>
            <h4 class="uppercase text-black font-semibold text-sm">
              MYNTRA INSIDER
            </h4>

            <p class="pt-3">
              Every online shopping experience is precious. Hence, a cashless
              reward-based customer loyalty program called Myntra Insider was
              introduced to enhance your online experience. The program is
              applicable to every registered customer and measures rewards in
              the form of Insider Points.
            </p>
            <p class="py-6">
              There are four levels to achieve in the program, as the Insider
              Points accumulate. They are - Insider, Select, Elite or Icon.
              Apart from offering discounts on Myntra and partner platform
              coupons, each tier comes with its own special perks.
            </p>

            <ul class="list-disc ps-10">
              <h4 class="text-black font-semibold pb-2 text-sm -ms-10">
                Insider
              </h4>
              <li>
                Opportunity to master any domain in fashion with tips from
                celebrity stylists at Myntra Masterclass sessions.
              </li>
              <li>Curated collections from celeb stylists.</li>
              <h4 class="text-black font-semibold pb-2 text-sm -ms-10">
                Elite
              </h4>
              <li>
                VIP access to special sale events such as the End of Reason Sale
                (EORS) and product launches.
              </li>
              <li>Exclusive early access to Limited Edition products</li>
              <h4 class="text-black font-semibold pb-2 text-sm -ms-10">Icon</h4>
              <li>Chance to get on guest lists for special events.</li>
            </ul>

            <h4 class="text-black font-semibold pb-2 text-sm py-7">
              Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To
              Miss Out On
            </h4>

            <p>
              The world wide web is evolving at a relentless pace, and with an
              accelerated growth each passing year, there is bound to be an
              overwhelming surge of online content. It was for this very reason
              that personalisation of search feeds was proposed as a solution to
              combat the overload of irrelevant information.
            </p>
            <p>
              Several social media platforms such as Facebook and Instagram
              along with various online shopping websites have chosen to help
              filter content, increasing user engagement, retention and customer
              loyalty.
            </p>
            <p>
              Myntra is one such online shopping website that joins the list of
              platforms that help curate a personalised fashion feed. Named
              theMyntra Studio, this personalised search feed brings you the
              latest men and women’s fashion trends, celebrity styles, branded
              content and daily updates from your favourite fashion labels.
            </p>
            <p>
              If you are wondering how impactful Myntra Studio can be, we are
              listing out five perks of having a rich, meaningful, and
              personalised fashion feed in your life.
            </p>

            <ul class="list-decimal ps-10 leading-5 my-7">
              <li class="font-semibold text-black pt-5 pb-1">
                Keep Up With What Your Favourite Fashion Icons Are Upto
              </li>
              <div class="ps-4">
                <p>
                  The #OOTD, AKA outfit of the day hashtag trend has been a rage
                  among fashion bloggers and stylists. The whole concept of
                  building an outfit from scratch and showcasing it to a huge
                  community of enthusiasts using the hashtag has helped
                  individuals with understanding trends and making suitable for
                  daily wear.
                </p>
                <p>
                  Imagine if you could keep up with every piece of clothing and
                  accessory worn by the fashion icons you look upto. From Sonam
                  Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’
                  feature to help track celebrity fashion trends, exploring
                  details such as their outfit of the day. This way, you would
                  not ever miss out on the latest celebrity fashion trends, from
                  all around the world.
                </p>
              </div>

              <li class="font-semibold text-black pt-5 pb-1">
                Quick Fashion Tip And Tricks
              </li>

              <div class="ps-4">
                Whether it is draping a saree into a dhoti style, wearing the
                right lingerie under certain dresses or discovering multiple
                uses out of heavy ethnic wear, Myntra Studio will help you
                acquire some unique and useful fashion hacks. Each hack is
                designed with the intention to help you get the best wear out of
                everything in your wardrobe.
              </div>

              <li class="font-semibold text-black pt-5 pb-1">
                Updates on What Is Trending and New Product Launches
              </li>

              <div class="ps-4">
                <p>
                  Since fast fashion seems to be extremely hard to keep up with
                  these days, a quick update on what is trending in accessories,
                  clothing and footwear would certainly be of great help. Myntra
                  Studio helps you stay connected to the most beloved and sought
                  after brands such as Puma, Coverstory, The Label Life and so
                  many more.
                </p>
                <p>
                  Your feed keeps you updated with stories of what the brands
                  are creating including clothing, footwear and jewellery, along
                  with their new seasonal collections.
                </p>
              </div>

              <li class="font-semibold text-black pt-5 pb-1">
                Explicit Step-By-Step Beauty Routines From Experts
              </li>
              <div class="ps-4">
                Just like fashion, the beauty community keeps on growing, and
                with brands such as Huda Beauty, MAC and the latest Kay Beauty
                by Katrina Kaif, are constantly coming up with mind-blowing
                products. Whether it is creating a no-makeup look, different
                winged eyeliners, do-it-yourself facial masks and other personal
                care beauty routines, Myntra Studio is here for you.
              </div>

              <li class="font-semibold text-black pt-5 pb-1">
                Celebrity Confessions And A Look Into Their Lives
              </li>

              <div class="ps-4">
                <p>
                  A bonus feature that Myntra Studio has in store for you is
                  celebrity confessions and a peek into their lives. So, Myntra
                  helps you stay connected to your most beloved celebrities in a
                  matter of clicks.
                </p>
                <p>
                  If you are very particular when it comes to the content you
                  wish to view and engage with on social media, the ability to
                  intricately filter content helps achieve that. Applying the
                  same formula for hardcore fashion lovers and shoppers, Myntra
                  Studio brings you a daily fashion fix incorporating everything
                  that you love, all at one place. Sign up on Myntra today and
                  start organising your fashion feed, just the way you want to.
                </p>
              </div>
            </ul>

            <h4 class="uppercase text-black font-semibold pb-2 text-sm py-7">
              MYNTRA APP
            </h4>

            <p>
              Myntra, India’s no. 1 online fashion destination justifies its
              fashion relevance by bringing something new and chic to the table
              on the daily. Fashion trends seem to change at lightning speed,
              yet the Myntra shopping app has managed to keep up without any
              hiccups. In addition, Myntra has vowed to serve customers to the
              best of its ability by introducing its first-ever loyalty program,
              The Myntra Insider. Gain access to priority delivery, early sales,
              lucrative deals and other special perks on all your shopping with
              the Myntra app. Download the Myntra app on your Android or IOS
              device today and experience shopping like never before!
            </p>

            <h4 class="uppercase text-black font-semibold pb-2 text-sm py-7">
              HISTORY OF MYNTRA
            </h4>

            <p>
              Becoming India’s no. 1 fashion destination is not an easy feat.
              Sincere efforts, digital enhancements and a team of dedicated
              personnel with an equally loyal customer base have made Myntra the
              online platform that it is today. The original B2B venture for
              personalized gifts was conceived in 2007 but transitioned into a
              full-fledged ecommerce giant within a span of just a few years. By
              2012, Myntra had introduced 350 Indian and international brands to
              its platform, and this has only grown in number each passing year.
              Today Myntra sits on top of the online fashion game with an
              astounding social media following, a loyalty program dedicated to
              its customers, and tempting, hard-to-say-no-to deals.
            </p>

            <p class="py-5">
              The Myntra shopping app came into existence in the year 2015 to
              further encourage customers’ shopping sprees. Download the app on
              your Android or IOS device this very minute to experience fashion
              like never before
            </p>

            <h4 class="uppercase text-black font-semibold pb-2 text-sm py-7">
              SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
            </h4>

            <p>
              Another reason why Myntra is the best of all online stores is the
              complete convenience that it offers. You can view your favourite
              brands with price options for different products in one place. A
              user-friendly interface will guide you through your selection
              process. Comprehensive size charts, product information and
              high-resolution images help you make the best buying decisions.
              You also have the freedom to choose your payment options, be it
              card or cash-on-delivery. The 14-day returns policy gives you more
              power as a buyer. Additionally, the try-and-buy option for select
              products takes customer-friendliness to the next level.
            </p>

            <p class="py-5">
              Enjoy the hassle-free experience as you shop comfortably from your
              home or your workplace. You can also shop for your friends, family
              and loved-ones and avail our gift services for special occasions.
            </p>
          </div>
        </div>
      </div>
    </footer>
        `
    }
};

customElements.define('myntra-footer', myntraFooter);