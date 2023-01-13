import { useParams } from "react-router-dom";
import CartContext from "../Store/CartContext";
import { useContext } from "react";

import './ProductDetails.css'
import { Card,Row} from'react-bootstrap'
const ProductDetails=()=>{
    const ctx=useContext(CartContext)
    const res=useParams();
    let data=res.productId
    console.log(res.productId)

   

    return(<>
        {data==1 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>APPLE iPhone 14 (Midnight, 128 GB)</h2>
        <p>Special price</p>
       <span> <span className="sp"> ₹79,900</span> 7% off</span>
        <span>₹73990</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>4🌟</span>
        <span>15799 ratings and 1720 reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70' alt="Img" />
              <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70' alt="Img" />
        </div>
        {/* <button className="cart" onClick={()=>{ctx.addItem({,quantity:1})}} > Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</li>
        <li>Bank Offer₹4000 Instant Discount on HDFC Bank Credit Card,Debit Card and Credit Card EMI TransactionsT&C</li>
        <li>Special PriceGet extra ₹5910 off (price inclusive of cashback/coupon)T&C</li>
        <li> No cost EMI ₹12,332/month. Standard EMI also available</li> 
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3> 

        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  4*</span>  <span style={{fontWeight:"bold"}}> Love it ❤️ </span>
        <pre>Excellent smart phone, Good battery backup and performance is very good, Good camera quality.</pre>
        
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  3*</span> <span style={{fontWeight:"bold"}}> Good Choice </span>
          <p> No performance issue , supper ram and power management . My slightly distasteful remark would be on its camera .</p></div>
        
        </div>
         </div>}

          {data==2 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/a/o/w/xxl-1-no-tnvgywthdfuljacket-k15-tripr-original-imaghahhfqdyvbcz.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>Men Colorblock Casual Jacket</h2>
        <p>Special price</p>
       <span> <span className="sp">₹1,999 </span> 75% off</span>
        <span> ₹489</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>4*</span>
        <span>29,076 ratings and 3,185 reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/a/o/w/xxl-1-no-tnvgywthdfuljacket-k15-tripr-original-imaghahhfqdyvbcz.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/b/s/b/xxl-1-no-trdgynvhdfuljacket-k15-tripr-original-imaghahhm4u8bgxp.jpeg?q=70' alt="Img" />
              <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/a/8/p/xl-1-no-tnvgyrdhdfuljacket-k15-tripr-original-imaghap7ttsr6pby.jpeg?q=70' alt="Img" />
        </div>
        {/* <button className="cart" > Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Special PriceGet at flat ₹489 T&C</li>
        <li>Partner OfferPurchase now & get a surprise cashback coupon for January / February 2023</li>
        <li>Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</li>
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3>
        
        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  4*</span> Love it ❤️
        <p>Shahid Lone jan 2022</p>
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  5*</span>Nice looking good  <p>Simran 2022</p></div>
        
        </div>
         </div>}


          {data==3 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-t-shirt/n/b/0/xs-123451-girls-shoppie-original-imag5xeancgxpmhf.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>Women Color Block Round Neck Red T-Shirt</h2>
        <p>Special price</p>
        <span><span className="sp"> ₹999  </span>67% off</span>
        <span> ₹329</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>3.9*</span>
        <span>14,662 ratings and 1,032 reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-t-shirt/n/b/0/xs-123451-girls-shoppie-original-imag5xeancgxpmhf.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/832/832/kx9as280/top/g/c/m/m-myt-girls-shoppie-original-imag9rewpk9hfrxd.jpeg?q=70' alt="Img" />
              <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/u/b/y/xs-mmt-girls-shoppie-original-imaghq5ffzfxssm6.jpeg?q=70' alt="Img" />
        </div>
        {/* <button className="cart" > Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</li>
        <li>_Partner OfferPurchase now & get a surprise cashback coupon for January / February 2023</li>
        <li>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000</li>
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3>
        
        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  4*</span>Very nice products
        <p>Good, no change in color</p>
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  3*</span>Amazing prodct  <p>Certified Buyer, Rani</p></div>
        
        </div>
         </div>}

          {data==4 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/q/z/9/xl-sw40-blmt-eyebogler-original-imaghcy9f5bkbzeu.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>Men Full Sleeve Solid Hooded Sweatshirt</h2>
        <p>Special price</p>
      <span>  <span className="sp"> ₹2,499 </span>78% off</span>
        <span>₹549</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>3.8*</span>
        <span>3.870 ratings and 3 reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/q/z/9/xl-sw40-blmt-eyebogler-original-imaghcy9f5bkbzeu.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/6/q/x/3xl-sw40-nbmt-eyebogler-original-imaghcxzgskcbyg2.jpeg?q=70' alt="Img" />
          
        </div>
        {/* <button className="cart" onClick={()=>alert("CANT ADD HERE")}> Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Special PriceGet at flat ₹389 T&C</li>
        <li>Partner OfferPurchase now & get a surprise cashback coupon for January / February 2023_</li>
        <li>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3>
        
        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  4*</span> Great at this price.
        <p>Certified Buyer, New Delhi</p>
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  3*</span>Good <p>Certified Buyer, Kakinada</p></div>
        
        </div>
         </div>}
          {data==5 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/f/f/s/-original-imaggtztyqx6atyt.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>Noise ColorFit Caliber 2 with 1.83'' display Up to 12 Day Battery, 60 sports mode Smartwatch  (Blue Strap, Regular)</h2>
        <p>Special price</p>
       <span> <span className="sp">₹4,999 </span>70% off
</span>
        <span> ₹1,499</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>4*</span>
        <span>3,802 Ratings & 317 Reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/f/f/s/-original-imaggtztyqx6atyt.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/y/l/d/-original-imaggtzt6bnaehyb.jpeg?q=70' alt="Img" />
              <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/i/b/u/-original-imaggxdce2mjbzcg.jpeg?q=70' alt="Img" />
        </div>
        {/* <button className="cart" > Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</li>
        <li>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</li>
        <li>Special PriceGet extra 25% off (price inclusive of cashback/coupon)T&C</li>
        <li> Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture</li>
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3>
        
        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  5*</span> Good quality product
        <p>Good look and accurate tracking add some new features calculator and havey use can survive 7to6 day ui very smooth best product value for money</p>
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  4.5*</span>Pretty good <p>
            Value for Money watch !
Pros :
Built Quality is plastic but it doesnt feel cheap or low quality.
Long lasting battery and quick charging
 Decent and large display in this price range
 Belt Quality is awesome Lightweight overall
Great App connectivity and features.
 More numbers of watches faces and sorted bu category in app.
         </p></div>
        
        </div>
         </div>}
          {data==6 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>ASUS Vivobook 15 Core i5 11th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/2 GB Graphics) X515EP-BQ512TS Thin and Light Laptop  (15.6 inch, Transparent Silver, With MS Office)</h2>
        <p>Special price</p>
      <span> <span className="sp"> ₹78,990 </span> 32% off</span>
        <span> ₹52,990</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>4*</span>
        <span>100 Ratings & 7 Reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/416/416/knknc7k0/computer/z/g/t/na-thin-and-light-laptop-asus-original-imag27rzmwc2pcrw.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/416/416/knknc7k0/computer/s/q/x/na-thin-and-light-laptop-asus-original-imag27vexkdpfhkf.jpeg?q=70' alt="Img" />
              <img src='https://rukminim1.flixcart.com/image/416/416/kt39jm80/computer/s/g/g/x509fa-br301t-laptop-asus-original-imag6geacerqyaev.jpeg?q=70' alt="Img" />
        </div>
        {/* <button className="cart" > Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Bank OfferExtra 2% off on UPI transactions T&C </li>
        <li>Bank Offer 5% Cashback on Flipkart Axis Bank CardT&C</li>
        <li>FreebieAirtel Xstream Entertainment PlanT&C</li>
        <li>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</li>
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3>
        
        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  4*</span> Love it ❤️
         <p>Simply awesome</p>
        <p>Certified Buyer, Koch Bihar

7 months ago</p>
       
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  3*</span>Must buy!  <p>The laptop is really good... Its fast... The processor power is good.... If you want to work with any kind of stuff it goes well... But i found an issue with the WIFI, sometimes the driver gives an error and you won't be able to connect to the internet, and this a a major issue.</p></div>
        
        </div>
         </div>}

         {data==7 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/416/416/kpinwy80/headphone/i/t/k/mrxj2hn-a-apple-original-imag3qe9sub2tnzj.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>Apple AirPods with Wireless Charging Case Bluetooth Headset with Mic  (White, True Wireless)</h2>
        <p>Special price</p>
      <span> <span className="sp"> ₹18,900 </span> 25% off </span>
        <span> ₹13,990</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>4.5*</span>
        <span>1,06,710 Ratings & 6,402 Reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/416/416/kpinwy80/headphone/z/d/w/mrxj2hn-a-apple-original-imag3qe92ykzmdc6.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/416/416/kpinwy80/headphone/x/y/b/mrxj2hn-a-apple-original-imag3qe98axyrcds.jpeg?q=70' alt="Img" />
              <img src='https://rukminim1.flixcart.com/image/416/416/kpinwy80/headphone/4/5/q/mrxj2hn-a-apple-original-imag3qe9jw4zsgzy.jpeg?q=70' alt="Img" />
        </div>
        {/* <button className="cart" > Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Bank OfferExtra 2% off on UPI transactions T&C </li>
        <li>Bank Offer 5% Cashback on Flipkart Axis Bank CardT&C</li>
        <li>FreebieAirtel Xstream Entertainment PlanT&C</li>
        <li>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</li>
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3>
        
        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  4*</span> Great product❤️
         <p>Awesome product by apple
If you are bass lover then this is not for u
Otherwise best in all class</p>
        <p>Certified Buyer, Koch Bihar

7 months ago</p>
       
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  4.3*</span>Fabulous!
         <p>Great accessory from Apple. And good delivery from Flipkart. Got this for amazing price. Thank you Flipkart for this deal. 😁 </p></div>
        
        </div>
         </div>}

           {data==8 && <div className="app">
        <div className="details">
        <div  className="big-img">
        <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/electric-ride-on/r/t/n/music-usb-baby-racing-electric-bike-electric-battery-bike-for-original-imaghj9habzdphpg.jpeg?q=70' alt="Img" />

        </div>
        <div className="box"> 
        <div className="row">
        <h2>baybee Scram Rechargeable Battery Bike for Kids, Ride on Toy Kids Bike with Led Light Bike Battery Operated Ride On  (Red)</h2>
        <p>Special price</p>
     <span> <span className="sp">  ₹13,999 </span> 42% off
 </span>
        <span> ₹7,999</span>
    </div>
        <div className="colors"> 
        <p> <span style={{backgroundColor:"green",borderRadius:"10px"}}>3.5*</span>
        <span>7 Ratings & 2 Reviews</span>   </p>
       

        </div>
       
       
        <div className="thumb"> 
          <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/electric-ride-on/r/t/n/music-usb-baby-racing-electric-bike-electric-battery-bike-for-original-imaghj9habzdphpg.jpeg?q=70' alt="Img" />
            <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/electric-ride-on/v/j/q/music-usb-baby-racing-electric-bike-electric-battery-bike-for-original-imaghj9hxfeedext.jpeg?q=70' alt="Img" />
              <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/electric-ride-on/b/i/r/music-usb-baby-racing-electric-bike-electric-battery-bike-for-original-imagh549smxg8m5z.jpeg?q=70' alt="Img" />
        </div>
        {/* <button className="cart" > Add To Cart</button> */}

        </div>
            
        </div>
        <div className="offers">
        <h3>Available offers</h3> 
        <li>Bank OfferExtra 2% off on UPI transactions T&C </li>
        <li>Bank Offer 5% Cashback on Flipkart Axis Bank CardT&C</li>
        <li>FreebieAirtel Xstream Entertainment PlanT&C</li>
        <li>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</li>
        </div>
        <div className="ratings"> <h3>Ratings & Reviews</h3>
        
        <div >
     
        <span style={{backgroundColor:"green",borderRadius:"10px"}}>  4*</span> Awesome
         <p>nice </p>
        <p>Certified Buyer, Koch Bihar

3 months ago</p>
       
        </div>
         <div ><span style={{backgroundColor:"green",borderRadius:"10px"}}>  3.3🌟</span>Slightly disappointed
         <p>Very poor quality</p> <p>

Certified Buyer, Karaikkudi

7 days ago</p></div>
        
        </div>
         </div>} :
       
    </>)

}
export default ProductDetails;