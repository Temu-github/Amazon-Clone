(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){},113:function(e,a,t){},115:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(31),c=t.n(r),i=(t(72),t(55)),m=t(7),o=(t(73),t(61)),s=t.n(o),u=t(57),d=t.n(u),E=t(62),p=t.n(E),h=(t(74),t(12)),g=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},f=function(){return Object(n.useContext)(g)},v=t(43),b=v.a.initializeApp({apiKey:"AIzaSyCMXT4WGFr-jdvTG3-o3JlvhErHjt5AFHk",authDomain:"clone-td-54127.firebaseapp.com",databaseURL:"https://clone-td-54127-default-rtdb.firebaseio.com",projectId:"clone-td-54127",storageBucket:"clone-td-54127.appspot.com",messagingSenderId:"465050512839",appId:"1:465050512839:web:0ac910a74a625a631f7de2",measurementId:"G-QE0NLY0NZW"}).firestore(),S=v.a.auth();var N=function(){var e=f(),a=Object(m.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],l.a.createElement("div",{className:"header"},l.a.createElement(h.b,{to:"/"},l.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),l.a.createElement("div",{className:"location"},l.a.createElement("span",{className:"hello"},"Hello"),l.a.createElement("p",{className:"address"},l.a.createElement(d.a,null),"Select your address")),l.a.createElement("div",{className:"header__search"},l.a.createElement("input",{className:"header__searchInput",type:"text"}),l.a.createElement(s.a,{className:"header__searchIcon"})),l.a.createElement("div",{className:"header__nav"},l.a.createElement(h.b,{to:!r&&"/login",className:"header__clearlink"},l.a.createElement("div",{onClick:function(){r&&S.signOut()},className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),l.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),l.a.createElement(h.b,{to:"/orders",className:"header__clearlink"},l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Returns"),l.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),l.a.createElement(h.b,{to:"/checkout",className:"header__clearlink"},l.a.createElement("div",{className:"header__optionBasket"},l.a.createElement(p.a,null),l.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};t(84),t(85);var C=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,c=e.rating,i=f(),o=Object(m.a)(i,2),s=(o[0].basket,o[1]);return l.a.createElement("div",{className:"product"},l.a.createElement("img",{src:n,alt:""}),l.a.createElement("div",{className:"product__info"},l.a.createElement("p",null,t),l.a.createElement("p",{className:"product__price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,r)),l.a.createElement("div",{className:"product__rating"},Array(c).fill().map(function(){return l.a.createElement("p",{className:"rating_star"},l.a.createElement("img",{src:"https://www.pngitem.com/pimgs/m/9-90359_stars-vector-png-cartoon-transparent-background-star-png.png"}))}))),l.a.createElement("button",{className:"btn",onClick:function(){s({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:c}})}},"Add to Cart"))};var A=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"banner"},l.a.createElement("img",{className:"home__image",src:"https://m.media-amazon.com/images/I/61YkC9dxWUL._SX1500_.jpg",alt:""})),l.a.createElement("div",{className:"home__container"},l.a.createElement("div",{className:"home__row"},l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/81aXodBtO8L._AC_SL1500_.jpg",id:"123213416",title:"Ball & Cast Accent Chair, 23.5' W x 26'D x 32.25H, Jasper...",price:29.99,rating:5}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/71o7xHVdQaL._AC_SL1500_.jpg",id:"123213413",title:"HP 24' All-in-One Desktop, AMD Athlon Silver 3050U Processor, AMD Radeon Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (24-dd0210, Snow White)",price:529.99,rating:5}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/61MI0Oy0GyL._AC_SL1500_.jpg",id:"123213412",title:"Aquazzura, Fenix Pump 105\r Color:Red...",price:795,rating:5}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/51QeDINuIlL._AC_SL1000_.jpg",id:"495380941",title:"FRIGIDAIRE FFMV1645TS 30' Over the Range Microwave with 1.6 cu. ft. in Stainless Steel",price:289.99,rating:4})),l.a.createElement("div",{className:""},l.a.createElement("img",{src:"https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_FT_Control/f73d6e11-2ee8-46d0-bd8a-53654e5b8342._UR3000,600_SX1500_FMwebp_.jpeg"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(C,{image:"https://static.shiekh.com/media/catalog/product/cache/image/2000x2000/e9c3970ab036de70892d86c6d221abfe/s/h/shk2841038_three_r_1003.jpg",id:"49038509",title:"Nike Men's Air Jordan 1 High OG Pollen, Pollen/Black/White, 10",price:273.99,rating:4}),l.a.createElement(C,{image:"https://ak1.ostkcdn.com/images/products/is/images/direct/9cef5e0ea50e9c1cf5e6be0e332bba28e6dd4a2c/MKF-Collection-Lilli-Satchel-by-Mia-k..jpg",id:"234459306",title:"MKF Collection Lilli Satchel by Mia k. - Coral",price:55.99,rating:5}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/81kaVz6wxXS._AC_SL1500_.jpg",id:"32543543457",title:"ASUS ZenBook Flip 13 OLED Ultra Slim Convertible Laptop, 13.3\u201d OLED FHD Touch Screen, Intel Evo Core i7-1165G7 CPU, Intel Iris Xe, 16GB RAM, 1TB SSD)",price:1200.99,rating:4}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/71Xc8n2nPuL._AC_SL1500_.jpg",id:"32543543456",title:"iRobot Roomba 692 Robot Vacuum-Wi-Fi Connectivity, Personalized Cleaning Recommendations, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors,...",price:177.99,rating:4})),l.a.createElement("div",{className:"sale_img"},l.a.createElement("img",{src:"https://ik.imagekit.io/Amazonclone/Amazon-Images/9e0be5fedd9ba928173f60767b6d2eac.w3000.h450._CR0_0_3000_450_SX1920__g-RXXHPEm.jpg?updatedAt=1641092481398"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg",id:"90829332",title:"SAMSUNG J791 Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Thunderbolt 3 Daisy Chain, QLED, HDMI, USB Hub, Height Adjustable Stand...",price:755.59,rating:4}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_SL1500_.jpg",id:"90829332",title:"Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash & Dustproof Camera Body, LEICA DC 24X...",price:497.99,rating:4}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/91ADOxkYOfL._AC_SL1500_.jpg",id:"908293325",title:"Sony A80J 77 Inch TV: BRAVIA XR OLED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR77A80J- 2021 Model, Black",price:2998.98,rating:4})),l.a.createElement("div",{className:"sale_img"},l.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/Q4/Fall/Trends/2021Q4_falltrend_dsk_ssheader_shades_of_brown_1500x300.jpg"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/71f5xbUW0aL._AC_SL1500_.jpg",id:"908293321",title:"WLIVE Wood Lift Top Coffee Table with Hidden Storage Compartment, Side Drawer and Metal Frame, Lift Tabletop Dining Table for Home, Living Room, Office Color:Brown...",price:149.99,rating:5}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/81c+ydvO2RL._AC_SL1500_.jpg",id:"908293323",title:"Better Homes & Gardens Nola Sofa Bed (Camel Faux Leather)..\r Color:Camel Faux Leather",price:420,rating:4}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/81DbN3xl88L._AC_SL1500_.jpg",id:"908253325",title:"Plank+Beam PB312-002 Solid Wood Queen-Size Bed, White...\r Size:Queen",price:282.2,rating:3}),l.a.createElement(C,{image:"https://m.media-amazon.com/images/I/41bR-KYd7HL._AC_.jpg",id:"908253320",title:"Canon PIXMA MG25 22 Series Wired All-in-One Color Inkjet Printer - Print Copy Scan - Print Up to 8.0 ipm - Up to 4800 x 600 DPI - Up to 60 Sheets Paper Tray...",price:179,rating:4}))))},k=t(9),O=(t(86),t(87),t(23)),y=t.n(O);var j=function(e){var a=f(),t=Object(m.a)(a,2),n=t[0].basket,r=(t[1],Object(k.f)());return l.a.createElement("div",{className:"subtotal"},l.a.createElement(y.a,{renderText:function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Subtotal (",n.length," items): ",l.a.createElement("strong",null,e)),l.a.createElement("small",{className:"subtotal__gift"},l.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce(function(e,a){return a.price+e},0)}(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{onClick:function(e){return r.push("/payment")}},"Proceed to Checkout"))};t(89);var w=function(e){var a=e.id,t=e.image,n=e.title,r=e.price,c=e.rating,i=e.hideButton,o=(e.props,f()),s=Object(m.a)(o,2),u=(s[0].basket,s[1]);return l.a.createElement("div",{className:"checkoutProduct"},l.a.createElement("img",{className:"checkoutProduct__image",src:t}),l.a.createElement("div",{className:"checkoutProduct__info"},l.a.createElement("p",{className:"checkoutProduct__title"},n),l.a.createElement("div",{className:"checkoutProduct__rating"},Array(c).fill().map(function(e,a){return l.a.createElement("p",{className:"rating_star"},l.a.createElement("img",{src:"https://www.pngitem.com/pimgs/m/9-90359_stars-vector-png-cartoon-transparent-background-star-png.png"}))})),l.a.createElement("p",{className:"checkoutProduct__price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,r)),!i&&l.a.createElement("button",{className:"btn",onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Cart")," "))};var I=function(e){var a=f(),t=Object(m.a)(a,2),n=t[0],r=n.basket;return n.user,t[1],l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{className:"checkout__left"},l.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),l.a.createElement("div",null,l.a.createElement("h3",null,e.cart_info),r.map(function(e){return l.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),l.a.createElement("div",{className:"checkout__right"},l.a.createElement(j,null)))};t(90);var L=function(){var e=Object(k.f)(),a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),s=o[0],u=o[1];return l.a.createElement("div",{className:"login"},l.a.createElement(h.b,{to:"/"},l.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),l.a.createElement("div",{className:"login__container"},l.a.createElement("h1",null,"Sign-in"),l.a.createElement("form",null,l.a.createElement("h5",null,"E-mail"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement("h5",null,"Password"),l.a.createElement("input",{type:"password",value:s,onChange:function(e){return u(e.target.value)}}),l.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),S.signInWithEmailAndPassword(r,s).then(function(a){e.push("/")}).catch(function(e){return alert(e.message)})},className:"login__signInButton"},"Sign In")),l.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),l.a.createElement("button",{onClick:function(a){a.preventDefault(),S.createUserWithEmailAndPassword(r,s).then(function(a){a&&e.push("/")}).catch(function(e){return console.log(e.message)})},className:"login__registerButton"},"Create your Amazon Account")))};t(91);var z=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"back_to_top"},l.a.createElement("a",{href:"#top"},"Back to Top")),l.a.createElement("div",{className:"footer_wraper"},l.a.createElement("div",{className:"footer_link"},l.a.createElement("div",{className:"links_1"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Get to Know Us"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Careers")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"About Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Sustainability")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Press Center")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Investor Relations")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Devices")))),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("h3",null,"Make Money with Us"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Sell products on Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Sell apps on Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"About Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Become an Affiliate")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"}," Become a Delivery Driver")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Start a package delivery business")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Advertise Your Products")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"}," Self-Publish with Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Host an Amazon Hub")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"See More Ways to Make Money")))),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("h3",null,"Make Money with Us"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Payment Products")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Rewards Visa Signature Cards")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon.com Store Card")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Secured Card")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Business Card")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Business Line of Credit")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Shop with Points")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Credit Card Marketplace")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Reload Your Balance")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Currency Converter")))),l.a.createElement("div",{className:"links_2"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Let Us Help You"),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon and COVID-19")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Your Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Your Orders")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Shipping Rates & Policies")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Prime")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Returns & Replacements")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Manage Your Content and Devices")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},"Amazon Assistant")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"}," Help")))))),l.a.createElement("div",{className:"logo_wraper"},l.a.createElement("div",{className:"container_1"},l.a.createElement("div",{className:"footer_logo"},l.a.createElement(h.b,{to:"/#"},l.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"}))),l.a.createElement("div",{className:"USA"},l.a.createElement("img",{className:"flag",src:"https://icons.iconarchive.com/icons/wikipedia/flags/512/US-United-States-Flag-icon.png"}),l.a.createElement("p",{className:"USA_1"},"United States")))))},P=t(27),M=t.n(P),T=t(42),R=(t(93),t(22)),B=t(63),D=t.n(B).a.create({baseURL:"https://us-central1-clone-td-54127.cloudfunctions.net/api"});var x=function(){var e=f(),a=Object(m.a)(e,2),t=a[0],r=t.basket,c=t.user,i=a[1],o=Object(k.f)(),s=function(e){return null===e||void 0===e?void 0:e.reduce(function(e,a){return a.price+e},0)},u=Object(R.useStripe)(),d=Object(R.useElements)(),E=Object(n.useState)(null),p=Object(m.a)(E,2),g=p[0],_=p[1],v=Object(n.useState)(!0),S=Object(m.a)(v,2),N=S[0],C=S[1],A=Object(n.useState)(!1),O=Object(m.a)(A,2),j=O[0],I=O[1],L=Object(n.useState)(""),z=Object(m.a)(L,2),P=z[0],B=z[1],x=Object(n.useState)(!0),H=Object(m.a)(x,2),U=H[0],F=H[1];Object(n.useEffect)(function(){!function(){var e=Object(T.a)(M.a.mark(function e(){var a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({method:"post",url:"/payments/create?total=".concat(100*s(r))});case 2:a=e.sent,F(a.data.clientSecret);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[r]),console.log("THE SECRET IS >>>",U);var G=function(){var e=Object(T.a)(M.a.mark(function e(a){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),B(!0),e.next=4,u.confirmCardPayment(U,{payment_method:{card:d.getElement(R.CardElement)}}).then(function(e){var a=e.paymentIntent;b.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").doc(a.id).set({basket:r,amount:a.amount,created:a.created}),I(!0),_(null),B(!1),i({type:"EMPTY_BASKET"}),o.replace("/orders")});case 4:e.sent;case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"payment"},l.a.createElement("div",{className:"payment__container"},l.a.createElement("h1",null,"Checkout (",l.a.createElement(h.b,{to:"/checkout"},null===r||void 0===r?void 0:r.length," items"),")"),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Delivery Address")),l.a.createElement("div",{className:"payment__address"},l.a.createElement("p",null,null===c||void 0===c?void 0:c.email),l.a.createElement("p",null,"30100 Adey Dr"),l.a.createElement("p",null,"SiliconVally, CA"))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Review items and delivery")),l.a.createElement("div",{className:"payment__items"},r.map(function(e){return l.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Payment Method")),l.a.createElement("div",{className:"payment__details"},l.a.createElement("form",{onSubmit:G},l.a.createElement(R.CardElement,{onChange:function(e){C(e.empty),_(e.error?e.error.message:"")}}),l.a.createElement("div",{className:"payment__priceContainer"},l.a.createElement(y.a,{renderText:function(e){return l.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:s(r),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{disabled:P||N||j},l.a.createElement("span",null,P?l.a.createElement("p",null,"Processing..."):"Buy Now"))),g&&l.a.createElement("div",null,g))))))},H=t(64),U=(t(111),t(65)),F=t.n(U);var G=function(e){var a,t=e.order;return l.a.createElement("div",{className:"order"},l.a.createElement("h2",null,"Order"),l.a.createElement("p",null,F.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")),l.a.createElement("p",{className:"order__id"},l.a.createElement("small",null,t.id)),null===(a=t.data.basket)||void 0===a?void 0:a.map(function(e){return l.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})}),l.a.createElement(y.a,{renderText:function(e){return l.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};t(113);var W=function(){var e=f(),a=Object(m.a)(e,2),t=a[0],r=(t.basket,t.user),c=(a[1],Object(n.useState)([])),i=Object(m.a)(c,2),o=i[0],s=i[1];return Object(n.useEffect)(function(){r?b.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("orders").orderBy("created","desc").onSnapshot(function(e){return s(e.docs.map(function(e){return{id:e.id,data:e.data()}}))}):s([])},[r]),l.a.createElement("div",{className:"orders"},l.a.createElement("h1",null,"Your Orders"),l.a.createElement("div",{className:"orders__order"},null===o||void 0===o?void 0:o.map(function(e){return l.a.createElement(G,{order:e})})))},V=Object(H.a)("pk_test_51KH0XEGZhwMVdN13FzoQZ7HpmsjrgTAz6WiivRmgIJ1c4dcekCmELMOHHdgLLqroPQRvIi4EVwmYCJpRRGpwik2v00IMu2enje");var Y=function(){var e=f(),a=Object(m.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)(function(){S.onAuthStateChanged(function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})})},[]),l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(k.c,null,l.a.createElement(k.a,{path:"/orders"},l.a.createElement(N,null),l.a.createElement(W,null)),l.a.createElement(k.a,{path:"/login"},l.a.createElement(L,null)),l.a.createElement(k.a,{path:"/payment"},l.a.createElement(R.Elements,{stripe:V},l.a.createElement(x,null))),l.a.createElement(k.a,{path:"/checkout"},l.a.createElement(N,null),l.a.createElement(I,null)),l.a.createElement(k.a,{path:"/"},l.a.createElement(N,null),l.a.createElement(A,null))),l.a.createElement(z,null)))},K=t(44),X=t(20),Q=function(e,a){switch(a.type){case"ADD_TO_BASKET":return Object(X.a)(Object(X.a)({},e),{},{basket:[].concat(Object(K.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(X.a)(Object(X.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex(function(e){return e.id===a.id}),n=Object(K.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(X.a)(Object(X.a)({},e),{},{basket:n});case"SET_USER":return Object(X.a)(Object(X.a)({},e),{},{user:a.user});default:return e}},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,128)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,{initialState:{basket:[],user:null},reducer:Q},l.a.createElement(Y,null))),document.getElementById("root")),J()},67:function(e,a,t){e.exports=t(115)},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.0ebd4bff.chunk.js.map