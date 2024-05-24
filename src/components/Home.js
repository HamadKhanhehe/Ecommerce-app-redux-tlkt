import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Data from "./Data";
import { addToCart } from "../redux/features/cartSlice";
// import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
import Headers from "./Headers";
import { Slider } from "./Slider";
// import { Slider } from "./Slider";


const Home = () => {
  const [cartData, setCartData] = useState(Data);
// console.log(addToCart)
  const dispatch = useDispatch();

const handleCart = (e) => {
  dispatch(addToCart(e))
  // console.log(addToCart(e))
}

  // add to cart
  // const send = (e)=>{
  //     dispatch(addToCart(e))
  //     toast.success("Item added In Your Cart")
  // }

  return (
    <>
      <Headers />
      <Slider />
      <section className="item_section mt-4 container">
        <img src="images\2x2x.jpg" alt="1x1x" />
        <h3 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Ahmedabad Opens now
        </h3>
        <div className="row mt-2 d-flex  justify-content-around align-items-center">
            {
                cartData.map((data,index) => {
                    return (
                    <Card
                    style={{ width: "22rem", border: "none" }}
                    className="hove mb-4"
                  >
                    <Card.Img variant="top" className="cd" src={data.imgdata} />
        
                    <div className="card_body">
                      <div className="upper_data d-flex justify-content-between align-items-center">
                        <h4 className="mt-2"> {data.dish}</h4>
                        <span>{data.rating} &nbsp;★</span>
                      </div>
        
                      <div className="lower_data d-flex justify-content-between ">
                        <h5>{data.address}</h5>
                        <span>350</span>
                      </div>
                      <div className="extra"></div>
        
                      <div className="last_data d-flex justify-content-between align-items-center">
                        <img src={data.arrimg} className="limg" alt="" />
                        <Button
                          style={{
                            width: "150px",
                            background: "#ff3054db",
                            border: "none",
                          }}
                          variant="outline-light"
                          className="mt-2 mb-2"
                          onClick={()=> handleCart(data)}
                        
                        >
                          Add TO Cart
                        </Button>
                        <img src={data.delimg} className="laimg" alt="" />
                      </div>
                    </div>
                  </Card>
                    )
                })
            }
        
        </div>
      </section>
      {/* <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Ahmedabad Open now</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                        <Card.Img variant='top' className='cd' src={element.imgdata}/>

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{element.dish}</h4>
                                                <span>{element.rating}&nbsp;★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5>{element.address}</h5>
                                                <span>₹ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className='limg' alt="" />
                                                <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={()=>send(element)}
                                                >Add TO Cart</Button>
                                                <img src={element.delimg} className='laimg' alt="" />

                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }

                </div>
            </section> */}
    </>
  );
};

export default Home;
