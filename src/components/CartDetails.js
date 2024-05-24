import { useState } from "react";
import Headers from "./Headers";
import "./cartstyle.css";
import Data from "./Data";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { removeFromCart } from "../redux/features/cartSlice";

export const CartDetails = () => {
  // const arr = [0, 1];
  // const [carts,setCarts] = useState(Data);
  const { carts } = useSelector((state) => state.allCart);
const dispatch = useDispatch();

const handleIncrement = (e) => {
  dispatch(addToCart(e))
}

// const handleDecrement = (e) => {
//   dispatch(removeFromCart(e))
// }

const handleDelete = (e) => {
  dispatch(removeFromCart(e))
}
  return (
    <>
      <Headers />

      <div className="row justify-content-center m-4">
        <div className="col md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">Cart Calculation({carts.length > 0 })</h5>
                {carts.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm">
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>Empty Cart</span>{" "}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0 ">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping"></i>
                          <p>Your cart is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        {" "}
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button className="prdct-delete" onClick={()=> handleDelete(data.id)}>
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.dish}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="prdct-qty-btn" type="button">
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={data.qnty}
                                  disabled
                                  name=""
                                  id=""
                                />
                                <button className="prdct-qty-btn" type="button" onClick={()=>handleIncrement(data)}>
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              ₹ {data.qnty * data.price}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">4</span>
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">4</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
