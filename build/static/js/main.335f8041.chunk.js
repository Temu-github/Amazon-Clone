(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){},114:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(31),c=t.n(r),i=(t(72),t(55)),m=t(7),s=(t(73),t(61)),o=t.n(s),u=t(57),d=t.n(u),E=t(62),p=t.n(E),g=(t(74),t(13)),h=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(h.Provider,{value:Object(n.useReducer)(a,t)},r)},f=function(){return Object(n.useContext)(h)},v=t(43),b=v.a.initializeApp({apiKey:"AIzaSyDLUhqZdh6VYjmcf2MhDvRDhpLap5VrabA",authDomain:"td-amzon-clone.firebaseapp.com",projectId:"td-amzon-clone",storageBucket:"td-amzon-clone.appspot.com",messagingSenderId:"494128302051",appId:"1:494128302051:web:94020fa790d6234e17c2d6",measurementId:"G-VRXHTKQ8V2"}).firestore(),N=v.a.auth();var S=function(){var e=f(),a=Object(m.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],l.a.createElement("div",{className:"header"},l.a.createElement(g.b,{to:"/"},l.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),l.a.createElement("div",{className:"location"},l.a.createElement("span",{className:"hello"},"Hello"),l.a.createElement("p",{className:"address"},l.a.createElement(d.a,null),"Select your address")),l.a.createElement("div",{className:"header__search"},l.a.createElement("input",{className:"header__searchInput",type:"text"}),l.a.createElement(o.a,{className:"header__searchIcon"})),l.a.createElement("div",{className:"header__nav"},l.a.createElement(g.b,{to:!r&&"/login",className:"header__clearlink"},l.a.createElement("div",{onClick:function(){r&&N.signOut()},className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),l.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),l.a.createElement(g.b,{to:"/orders",className:"header__clearlink"},l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Returns"),l.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),l.a.createElement(g.b,{to:"/checkout",className:"header__clearlink"},l.a.createElement("div",{className:"header__optionBasket"},l.a.createElement(p.a,{className:"cart"}),l.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};t(84);var k=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner",role:"listbox"},l.a.createElement("div",{className:"item "},l.a.createElement("img",{src:"https://m.media-amazon.com/images/I/71MDYgQkFEL._SX3000_.jpg",alt:""})),l.a.createElement("div",{className:"item active"},l.a.createElement("img",{src:"https://m.media-amazon.com/images/I/61W7qUiSFkL._SX3000_.jpg",alt:""})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:"https://m.media-amazon.com/images/I/61c2xoR88PL._SX3000_.jpg",alt:""})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:"https://m.media-amazon.com/images/I/716eXTG+aJL._SX3000_.jpg",alt:""}),l.a.createElement("div",{className:"carousel-caption"},l.a.createElement("h3",null,"Flowers"),l.a.createElement("p",null,"Beautiful flowers in Kolymbari, Crete."))),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:"https://m.media-amazon.com/images/I/71izqO++I8L._SX3000_.jpg",alt:""})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:"https://m.media-amazon.com/images/I/71NPKVrRU0L._SX3000_.jpg",alt:""})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:"https://m.media-amazon.com/images/I/71Xpt00HezL._SX3000_.jpg",alt:""}))),l.a.createElement("a",{className:"left carousel-control",href:"#myCarousel",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"right carousel-control",href:"#myCarousel",role:"button","data-slide":"next"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next"))))};t(85),t(86);var A=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,c=e.rating,i=f(),s=Object(m.a)(i,2),o=(s[0].basket,s[1]);return l.a.createElement("div",{className:"product"},l.a.createElement("img",{src:n,alt:""}),l.a.createElement("div",{className:"product__info"},l.a.createElement("p",null,t),l.a.createElement("div",{className:"product__rating"},Array(c).fill().map(function(){return l.a.createElement("p",{className:"rating_star"},l.a.createElement("img",{src:"https://www.pngitem.com/pimgs/m/9-90359_stars-vector-png-cartoon-transparent-background-star-png.png"}))})),l.a.createElement("p",{className:"product__price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,r))),l.a.createElement("button",{className:"btn",onClick:function(){o({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:c}})}},"Add to Cart"))};var y=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"banner"},l.a.createElement(k,null)),l.a.createElement("div",{className:"home__container"},l.a.createElement("div",{className:"home__row"},l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/71J0zLbXixL._AC_SL1500_.jpg",id:"123213416",title:"26 inch 21 Speed Folding Mountain Bike High Carbon Steel, Double Disc Brake Outroad Mountain Bicycle for Men Women...",price:209.99,rating:5}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/71ekhW8HBgL._AC_SL1500_.jpg",id:"123213413",title:"Google Pixel 6 \u2013 5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black",price:529.99,rating:5}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/61MI0Oy0GyL._AC_SL1500_.jpg",id:"123213412",title:"Aquazzura, Fenix Pump 105\r Color:Red...",price:795,rating:5}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/71qodgwQQ7S._AC_SL1500_.jpg",id:"495380941",title:"Acer Aspire 5 A515-56-36UT Slim Laptop | 15.6' Full HD Display | 11th Gen Intel Core i3-1115G4 Processor ...",price:289.99,rating:4})),l.a.createElement("div",{className:""},l.a.createElement("img",{src:"https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_FT_Control/f73d6e11-2ee8-46d0-bd8a-53654e5b8342._UR3000,600_SX1500_FMwebp_.jpeg"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(A,{image:"https://static.shiekh.com/media/catalog/product/cache/image/2000x2000/e9c3970ab036de70892d86c6d221abfe/s/h/shk2841038_three_r_1003.jpg",id:"49038509",title:"Nike Men's Air Jordan 1 High OG Pollen, Pollen/Black/White, 10",price:273.99,rating:4}),l.a.createElement(A,{image:"https://ak1.ostkcdn.com/images/products/is/images/direct/9cef5e0ea50e9c1cf5e6be0e332bba28e6dd4a2c/MKF-Collection-Lilli-Satchel-by-Mia-k..jpg",id:"234459306",title:"MKF Collection Lilli Satchel by Mia k. - Coral",price:55.99,rating:5}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/71JqlcNWEkL._AC_SL1300_.jpg",id:"32543543457",title:"Optoma UHD38 Bright, True 4K UHD Gaming Projector | 4000 Lumens | 4.2ms Response Time at 1080p...",price:1300.99,rating:4}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/81-JT7CdNzL._AC_SL1500_.jpg",id:"32543543456",title:"Nyne NHT5.1RGB 5.1 Channel Home Theatre System \u2013 Bluetooth, USB, SD, RCA Outputs Inputs, 8 Inch Active Subwoofer...",price:169.99,rating:4})),l.a.createElement("div",{className:"sale_img"},l.a.createElement("img",{src:"https://ik.imagekit.io/Amazonclone/Amazon-Images/9e0be5fedd9ba928173f60767b6d2eac.w3000.h450._CR0_0_3000_450_SX1920__g-RXXHPEm.jpg?updatedAt=1641092481398"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_SL1500_.jpg",id:"90829332",title:"Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash & Dustproof Camera Body, LEICA DC 24X...",price:497.99,rating:4}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/81wgG3UEViL._AC_SL1500_.jpg",id:"90829332",title:"Nitric Oxide Booster by Snap Supplements - Pre Workout, Muscle Builder - L Arginine, L Citrulline 1500mg Formula Tribulus Extract & Panax Ginseng...",price:26.99,rating:4}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/91ADOxkYOfL._AC_SL1500_.jpg",id:"908293325",title:"Sony A80J 77 Inch TV: BRAVIA XR OLED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR77A80J- 2021 Model, Black",price:2998.98,rating:4})),l.a.createElement("div",{className:"sale_img"},l.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/Q4/Fall/Trends/2021Q4_falltrend_dsk_ssheader_shades_of_brown_1500x300.jpg"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/81h5n8HHy-L._AC_SL1500_.jpg",id:"908293321",title:"Amazon Basics 100% Cotton Kitchen Dish Cloth (12x12) & Towel (26x16) Set, Absorbent Ringspun - 8-Pack, Red Stripe...",price:49.99,rating:5}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/61z2Dwj2mpL._AC_SL1000_.jpg",id:"908293323",title:"Amazon Basics Coffee Pod Storage Drawer for K-Cup Pods, 36 Pod Capacity",price:60.99,rating:4}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/71c4tXq-kSL._AC_SL1500_.jpg",id:"908253325",title:"Cleer Audio, Enduro ANC Noise Cancelling Headphones, Long Lasting 60 Hour Battery, Ambient Sound Levels...",price:149.8,rating:3}),l.a.createElement(A,{image:"https://m.media-amazon.com/images/I/915zpRm7a1L._AC_SL1500_.jpg",id:"908253320",title:"Amazon Basics Set of 3 (53 cm + 64 cm + 74 cm) Navy Blue Softsided Trolleys",price:197.82,rating:4}))))},C=t(9),j=(t(87),t(88),t(23)),O=t.n(j);var z=function(e){var a=f(),t=Object(m.a)(a,2),n=t[0].basket,r=(t[1],Object(C.f)());return l.a.createElement("div",{className:"subtotal"},l.a.createElement(O.a,{renderText:function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Subtotal (",n.length," items): ",l.a.createElement("strong",null,e)),l.a.createElement("small",{className:"subtotal__gift"},l.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce(function(e,a){return a.price+e},0)}(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{onClick:function(e){return r.push("/payment")}},"Proceed to Checkout"))};t(90);var L=function(e){var a=e.id,t=e.image,n=e.title,r=e.price,c=e.rating,i=e.hideButton,s=(e.props,f()),o=Object(m.a)(s,2),u=(o[0].basket,o[1]);return l.a.createElement("div",{className:"checkoutProduct"},l.a.createElement("img",{className:"checkoutProduct__image",src:t}),l.a.createElement("div",{className:"checkoutProduct__info"},l.a.createElement("p",{className:"checkoutProduct__title"},n),l.a.createElement("div",{className:"checkoutProduct__rating"},Array(c).fill().map(function(e,a){return l.a.createElement("p",{className:"rating_star"},l.a.createElement("img",{src:"https://www.pngitem.com/pimgs/m/9-90359_stars-vector-png-cartoon-transparent-background-star-png.png"}))})),l.a.createElement("p",{className:"checkoutProduct__price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,r)),!i&&l.a.createElement("button",{className:"btn1",onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Cart")," "))};var w=function(e){var a=f(),t=Object(m.a)(a,2),n=t[0],r=n.basket;return n.user,t[1],l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{className:"checkout__left"},l.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),l.a.createElement("div",null,l.a.createElement("h3",null,e.cart_info),r.map(function(e){return l.a.createElement(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),l.a.createElement("div",{className:"checkout__right"},l.a.createElement(z,null)))};t(91);var I=function(){var e=Object(C.f)(),a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),o=s[0],u=s[1];return l.a.createElement("div",{className:"login"},l.a.createElement(g.b,{to:"/"},l.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),l.a.createElement("div",{className:"login__container"},l.a.createElement("h1",null,"Sign-in"),l.a.createElement("form",null,l.a.createElement("h5",null,"E-mail"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement("h5",null,"Password"),l.a.createElement("input",{type:"password",value:o,onChange:function(e){return u(e.target.value)}}),l.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),N.signInWithEmailAndPassword(r,o).then(function(a){e.push("/")}).catch(function(e){return alert(e.message)})},className:"login__signInButton"},"Sign In")),l.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),l.a.createElement("button",{onClick:function(a){a.preventDefault(),N.createUserWithEmailAndPassword(r,o).then(function(a){a&&e.push("/")}).catch(function(e){return console.log(e.message)})},className:"login__registerButton"},"Create your Amazon Account")))};t(92);var B=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"back_to_top"},l.a.createElement("a",{href:"#top"},"Back to Top")),l.a.createElement("div",{className:"footer_wraper"},l.a.createElement("div",{className:"footer_link"},l.a.createElement("div",{className:"links_1"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Get to Know Us"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Careers")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"About Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Sustainability")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Press Center")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Investor Relations")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Devices")))),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("h3",null,"Make Money with Us"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Sell products on Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Sell apps on Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"About Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Become an Affiliate")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"}," Become a Delivery Driver")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Start a package delivery business")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Advertise Your Products")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"}," Self-Publish with Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Host an Amazon Hub")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"See More Ways to Make Money")))),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("h3",null,"Make Money with Us"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Payment Products")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Rewards Visa Signature Cards")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon.com Store Card")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Secured Card")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Business Card")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Business Line of Credit")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Shop with Points")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Credit Card Marketplace")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Reload Your Balance")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Currency Converter")))),l.a.createElement("div",{className:"links_2"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Let Us Help You"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon and COVID-19")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Your Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Your Orders")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Shipping Rates & Policies")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Prime")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Returns & Replacements")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Manage Your Content and Devices")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Assistant")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"}," Help")))))),l.a.createElement("div",{className:"logo_wraper"},l.a.createElement("div",{className:"container_1"},l.a.createElement("div",{className:"footer_logo"},l.a.createElement("a",{href:"/#"},l.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"}))),l.a.createElement("div",{className:"USA"},l.a.createElement("img",{className:"flag",src:"https://icons.iconarchive.com/icons/wikipedia/flags/512/US-United-States-Flag-icon.png"}),l.a.createElement("p",{className:"USA_1"},"United States")))))},P=t(27),T=t.n(P),x=t(42),M=(t(94),t(22)),D=t(63),R=t.n(D).a.create({baseURL:"https://us-central1-td-amzon-clone.cloudfunctions.net/api"});var U=function(){var e=f(),a=Object(m.a)(e,2),t=a[0],r=t.basket,c=t.user,i=a[1],s=Object(C.f)(),o=function(e){return null===e||void 0===e?void 0:e.reduce(function(e,a){return a.price+e},0)},u=Object(M.useStripe)(),d=Object(M.useElements)(),E=Object(n.useState)(null),p=Object(m.a)(E,2),h=p[0],_=p[1],v=Object(n.useState)(!0),N=Object(m.a)(v,2),S=N[0],k=N[1],A=Object(n.useState)(!1),y=Object(m.a)(A,2),j=y[0],z=y[1],w=Object(n.useState)(""),I=Object(m.a)(w,2),B=I[0],P=I[1],D=Object(n.useState)(!0),U=Object(m.a)(D,2),F=U[0],H=U[1];Object(n.useEffect)(function(){!function(){var e=Object(x.a)(T.a.mark(function e(){var a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({method:"post",url:"/payments/create?total=".concat(100*o(r))});case 2:a=e.sent,H(a.data.clientSecret);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[r]),console.log("THE SECRET IS >>>",F);var K=function(){var e=Object(x.a)(T.a.mark(function e(a){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),P(!0),e.next=4,u.confirmCardPayment(F,{payment_method:{card:d.getElement(M.CardElement)}}).then(function(e){var a=e.paymentIntent;b.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").doc(a.id).set({basket:r,amount:a.amount,created:a.created}),z(!0),_(null),P(!1),i({type:"EMPTY_BASKET"}),s.replace("/orders")});case 4:e.sent;case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"payment"},l.a.createElement("div",{className:"payment__container"},l.a.createElement("h1",null,"Checkout (",l.a.createElement(g.b,{to:"/checkout"},null===r||void 0===r?void 0:r.length," items"),")"),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Delivery Address")),l.a.createElement("div",{className:"payment__address"},l.a.createElement("p",null,null===c||void 0===c?void 0:c.email),l.a.createElement("p",null,"30100 Adey Dr"),l.a.createElement("p",null,"SiliconVally, CA"))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Review items and delivery")),l.a.createElement("div",{className:"payment__items"},r.map(function(e){return l.a.createElement(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Payment Method")),l.a.createElement("div",{className:"payment__details"},l.a.createElement("form",{onSubmit:K},l.a.createElement(M.CardElement,{onChange:function(e){k(e.empty),_(e.error?e.error.message:"")}}),l.a.createElement("div",{className:"payment__priceContainer"},l.a.createElement(O.a,{renderText:function(e){return l.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:o(r),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{disabled:B||S||j},l.a.createElement("span",null,B?l.a.createElement("p",null,"Processing..."):"Buy Now"))),h&&l.a.createElement("div",null,h))))))},F=t(64),H=(t(112),t(65)),K=t.n(H);var Y=function(e){var a,t=e.order;return l.a.createElement("div",{className:"order"},l.a.createElement("h2",null,"Order"),l.a.createElement("p",null,K.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")),l.a.createElement("p",{className:"order__id"},l.a.createElement("small",null,t.id)),null===(a=t.data.basket)||void 0===a?void 0:a.map(function(e){return l.a.createElement(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})}),l.a.createElement(O.a,{renderText:function(e){return l.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};t(114);var G=function(){var e=f(),a=Object(m.a)(e,2),t=a[0],r=(t.basket,t.user),c=(a[1],Object(n.useState)([])),i=Object(m.a)(c,2),s=i[0],o=i[1];return Object(n.useEffect)(function(){r?b.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("orders").orderBy("created","desc").onSnapshot(function(e){return o(e.docs.map(function(e){return{id:e.id,data:e.data()}}))}):o([])},[r]),l.a.createElement("div",{className:"orders"},l.a.createElement("h1",null,"Your Orders"),l.a.createElement("div",{className:"orders__order"},null===s||void 0===s?void 0:s.map(function(e){return l.a.createElement(Y,{order:e})})))},X=Object(F.a)("pk_test_51KEYkpIuxY9HcYRNaL46fz7nnlseMF0dB6uBi5faKVqu6hY3LupuL1csL4m7DkNikps81cEcF6QiRYI3QPg9GeKL00VkW10zY1");var V=function(){var e=f(),a=Object(m.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)(function(){N.onAuthStateChanged(function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})})},[]),l.a.createElement(g.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(C.c,null,l.a.createElement(C.a,{path:"/orders"},l.a.createElement(S,null),l.a.createElement(G,null)),l.a.createElement(C.a,{path:"/login"},l.a.createElement(I,null)),l.a.createElement(C.a,{path:"/payment"},l.a.createElement(M.Elements,{stripe:X},l.a.createElement(U,null))),l.a.createElement(C.a,{path:"/checkout"},l.a.createElement(S,null),l.a.createElement(w,null)),l.a.createElement(C.a,{path:"/"},l.a.createElement(S,null),l.a.createElement(y,null))),l.a.createElement(B,null)))},W=t(44),q=t(20),J=function(e,a){switch(a.type){case"ADD_TO_BASKET":return Object(q.a)(Object(q.a)({},e),{},{basket:[].concat(Object(W.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(q.a)(Object(q.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex(function(e){return e.id===a.id}),n=Object(W.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(q.a)(Object(q.a)({},e),{},{basket:n});case"SET_USER":return Object(q.a)(Object(q.a)({},e),{},{user:a.user});default:return e}},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,130)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,{initialState:{basket:[],user:null},reducer:J},l.a.createElement(V,null))),document.getElementById("root")),Q()},67:function(e,a,t){e.exports=t(116)},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},94:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.335f8041.chunk.js.map