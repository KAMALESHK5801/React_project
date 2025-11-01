import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import images from "../../utils/images";

function Checkout() {
  const [deliveryOption, setDeliveryOption] = useState("ship");

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully");
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const Price = parseFloat(item.Price.replace("₹", ""));
    return acc + Price * item.quantity;
  }, 0);

  const estimatedTax = (totalPrice * 0.1).toFixed(2);

  return (
    <>
      <div className="container my-5 pt-1">
        <div className="row g-4 mt-5">
          <div className="col-lg-7">
            <h5>Contact</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email or Mobile Number"
              />
            </div>
            <div className="form-check mb-4">
              <input
                type="checkbox"
                id="newsCheck"
                className="form-check-input"
              />
              <label htmlFor="newsCheck" className="form-check-lable">
                Email me with news and offers
              </label>
            </div>
            <h5>Delivery</h5>
            <div>
              <div className="mb-3">
                <div className="btn-group btn-from w-100" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="deliveryOption"
                    id="ship"
                    checked={deliveryOption === "ship"}
                    onChange={() => setDeliveryOption("ship")}
                  />
                  <label htmlFor="ship" className="btn ship-btn">
                    Ship
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="deliveryOption"
                    id="pickup"
                    checked={deliveryOption === "pickup"}
                    onChange={() => setDeliveryOption("pickup")}
                  />
                  <label htmlFor="pickup" className="btn pickup-btn">
                    Pickup in Store
                  </label>
                </div>
              </div>
              {deliveryOption === "ship" && (
                <div className="row mb-3">
                  <div className="mb-3">
                    <select className="form-select">
                      <option>Chennai</option>
                      <option>Coimbatore</option>
                      <option>Trichy</option>
                    </select>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              )}

              {deliveryOption === "pickup" && (
                <div className="container my-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-semibold mb-0">Store Location</h6>
                    <a href="#" className="text-decoration-none small">
                      Change location
                    </a>
                  </div>
                  <div
                    className="alert alert-danger d-flex flex-column rounded-3"
                    role="alert"
                    style={{
                      color: "#7b1c1c",
                      backgroundColor: "#fef6f6",
                      border: "1px solid rgba(145, 137, 137, 0.59)",
                    }}
                  >
                    <div className="d-flex align-items-center mb-1">
                      <i className="bi bi-exclamation-circle-fill me-2"></i>
                      <strong>No Stores Available with your items</strong>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-decoration-underline"
                        style={{ color: "#7b1c1c" }}
                      >
                        Ship to address
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apartment, Home, ect.."
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="form-check mb-4">
              <input
                type="checkbox"
                id="saveInfo"
                className="form-check-input"
              />
              <label htmlFor="saveInfo" className="form-check-lable">
                Save this information for next time
              </label>
            </div>
            <h6>Shipping method</h6>
            <div
              className="rounded p-3 d-flex justify-content-between align-items-center"
              style={{
                border: "1px solid darkblue",
                backgroundColor: "#f0f5ff",
              }}
            >
              <span>Standard</span>
              <span className="text-success">FREE</span>
            </div>
            <div className="container my-5">
              <h4 className="fw-semibold">Payment</h4>
              <p class="text-muted mb-3">
                All transactions are secure and encrypted.
              </p>

              <div className="border rounded">
                <div className="bg-light border-bottom d-flex justify-content-between align-items-center p-3">
                  <span className="fw-semibold">Credit card</span>
                  <div
                    className="bg-warning text-white rounded px-2 py-1 fw-bold"
                    style={{ fontSize: "0.9rem" }}
                  >
                    B
                  </div>
                </div>
                <div className="p-3 bg-light">
                  <div className="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Card number"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Expiration data (MM / YY)"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Security code"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name on card"
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="billingCheck"
                      checked
                    />
                    <label className="form-check-label" htmlFor="billingCheck">
                      Use shipping address as billing address
                    </label>
                  </div>
                </div>
              </div>

              <button class="btn w-100 mt-4 py-2 fw-semibold">Pay Now</button>
              <div className="mt-5 border-top pt-3">
                <a
                  href="#"
                  class="text-decoration-none small text-decoration-underline"
                >
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3">
                <i className="ri-shopping-cart-2-line me-2 text-info"></i>Order
                Summary
              </h5>
              {cartItems.length === 0 ? (
                <p className="text-muted">Your cart is Empty!</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center mb-3 border-bottom pb-2"
                  >
                    <img
                      src={images[item.image]}
                      className="rounded"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", marginRight: "10px" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.Productname}</h6>
                      <small className="text-muted">
                        Qty : {item.quantity}
                      </small>
                    </div>
                    <div className="fw-semibold">
                      ₹
                      {(
                        parseFloat(item.Price.replace("₹", "")) * item.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))
              )}
              <hr />
              <div className="d-flex justify-content-between small mb-1">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between small mb-1">
                <span>Shipping</span>
                <span>Enter Address</span>
              </div>
              <div className="d-flex justify-content-between small mb-1">
                <span>Estimated Tax</span>
                <span>₹{estimatedTax}</span>
              </div>
              <div className="d-flex justify-content-between small mb-1">
                <span>Total</span>
                <span>
                  ₹{(totalPrice + parseFloat(estimatedTax)).toFixed(2)}
                </span>
              </div>
              <button className="btn w-100 mt-3" onClick={handlePlaceOrder}>
                <i className="ri-secure-payment-line me-2"></i>Place Order
              </button>
              <Link to="/cart" className="btn mt-2 text-decoration-none">
                <i className="ri-arrow-left-line me-1"></i>Back To Cart!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Checkout;
