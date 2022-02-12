import React from "react";
  import Carousel from "./Carousel";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      
      <div className="banner">
        <Carousel />
        {/* try to active the bootstrap and scripet in puplic index.html and comnet out the img below*/}
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61YkC9dxWUL._SX1500_.jpg"
          alt=""
        /> */}
      </div>

      <div className="home__container">
        <div className="home__row">
          <Product
            image="https://m.media-amazon.com/images/I/71J0zLbXixL._AC_SL1500_.jpg"
            id="123213416"
            title="26 inch 21 Speed Folding Mountain Bike High Carbon Steel, Double Disc Brake Outroad Mountain Bicycle for Men Women..."
            price={209.99}
            rating={5}

          />
          <Product
            image="https://m.media-amazon.com/images/I/71ekhW8HBgL._AC_SL1500_.jpg"
            id="123213413"
            title="Google Pixel 6 – 5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black"
            price={529.99}
            rating={5}

          />
          <Product
            image="https://m.media-amazon.com/images/I/61MI0Oy0GyL._AC_SL1500_.jpg"
            id="123213412"
            title="Aquazzura, Fenix Pump 105
                  Color:Red..."
            price={795.00}
            rating={5}

          />
          <Product
            image="https://m.media-amazon.com/images/I/71qodgwQQ7S._AC_SL1500_.jpg"
            id="495380941"
            title="Acer Aspire 5 A515-56-36UT Slim Laptop | 15.6' Full HD Display | 11th Gen Intel Core i3-1115G4 Processor ..."
            price={289.99}
            rating={4} />
        </div>
        <div className=""><img src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_FT_Control/f73d6e11-2ee8-46d0-bd8a-53654e5b8342._UR3000,600_SX1500_FMwebp_.jpeg" /></div>
        <div className="home__row">
          <Product
            image="https://static.shiekh.com/media/catalog/product/cache/image/2000x2000/e9c3970ab036de70892d86c6d221abfe/s/h/shk2841038_three_r_1003.jpg"
            id="49038509"
            title="Nike Men's Air Jordan 1 High OG Pollen, Pollen/Black/White, 10"
            price={273.99}
            rating={4}

          />
          <Product
            image="https://ak1.ostkcdn.com/images/products/is/images/direct/9cef5e0ea50e9c1cf5e6be0e332bba28e6dd4a2c/MKF-Collection-Lilli-Satchel-by-Mia-k..jpg"
            id="234459306"
            title="MKF Collection Lilli Satchel by Mia k. - Coral"
            price={55.99}
            rating={5}

          />
          <Product
            image="https://m.media-amazon.com/images/I/71JqlcNWEkL._AC_SL1300_.jpg"
            id="32543543457"
            title="Optoma UHD38 Bright, True 4K UHD Gaming Projector | 4000 Lumens | 4.2ms Response Time at 1080p..."
            price={1300.99}
            rating={4}

          />
          <Product
            image="https://m.media-amazon.com/images/I/81-JT7CdNzL._AC_SL1500_.jpg"
            id="32543543456"
            title="Nyne NHT5.1RGB 5.1 Channel Home Theatre System – Bluetooth, USB, SD, RCA Outputs Inputs, 8 Inch Active Subwoofer..."
            price={169.99}
            rating={4}

          />

        </div>
        <div className="sale_img">
          <img src="https://ik.imagekit.io/Amazonclone/Amazon-Images/9e0be5fedd9ba928173f60767b6d2eac.w3000.h450._CR0_0_3000_450_SX1920__g-RXXHPEm.jpg?updatedAt=1641092481398" />
        </div>
        <div className="home__row">
         
          <Product
            image="https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_SL1500_.jpg"
            id="90829332"
            title="Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash & Dustproof Camera Body, LEICA DC 24X..."
            price={497.99}
            rating={4}

          />
<Product
            image="https://m.media-amazon.com/images/I/81wgG3UEViL._AC_SL1500_.jpg"
            id="90829332"
            title="Nitric Oxide Booster by Snap Supplements - Pre Workout, Muscle Builder - L Arginine, L Citrulline 1500mg Formula Tribulus Extract & Panax Ginseng..."
            price={26.99}
            rating={4}

          />
          <Product
            image="https://m.media-amazon.com/images/I/91ADOxkYOfL._AC_SL1500_.jpg"
            id="908293325"
            title="Sony A80J 77 Inch TV: BRAVIA XR OLED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR77A80J- 2021 Model, Black"
            price={2998.98}
            rating={4}
          />
          

        </div>
        <div className="sale_img">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/Q4/Fall/Trends/2021Q4_falltrend_dsk_ssheader_shades_of_brown_1500x300.jpg" />
        </div>
        <div className="home__row">
          <Product
            image="https://m.media-amazon.com/images/I/81h5n8HHy-L._AC_SL1500_.jpg"
            id="908293321"
            title="Amazon Basics 100% Cotton Kitchen Dish Cloth (12x12) & Towel (26x16) Set, Absorbent Ringspun - 8-Pack, Red Stripe..."
            price={49.99}
            rating={5}

          />
          <Product
            image="https://m.media-amazon.com/images/I/61z2Dwj2mpL._AC_SL1000_.jpg"
            id="908293323"
            title="Amazon Basics Coffee Pod Storage Drawer for K-Cup Pods, 36 Pod Capacity"
            price={60.99}
            rating={4}

          />

          <Product
            image="https://m.media-amazon.com/images/I/71c4tXq-kSL._AC_SL1500_.jpg"
            id="908253325"
            title="Cleer Audio, Enduro ANC Noise Cancelling Headphones, Long Lasting 60 Hour Battery, Ambient Sound Levels..."
            price={149.80}
            rating={3}
          />
          <Product
            image="https://m.media-amazon.com/images/I/915zpRm7a1L._AC_SL1500_.jpg"
            id="908253320"
            title="Amazon Basics Set of 3 (53 cm + 64 cm + 74 cm) Navy Blue Softsided Trolleys"
            price={197.82}
            rating={4}
          />
        </div>
      </div>

    </div>
  );
}

export default Home;
