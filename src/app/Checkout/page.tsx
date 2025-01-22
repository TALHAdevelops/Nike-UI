import Image from "next/image";
import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-4 border-b">
        <div className="flex justify-between items-center">
         Member Checkout Page
          <p className="text-sm">000 800 100 9538</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Delivery Section */}
          <div>
            <h2 className="text-lg font-semibold">How would you like to get your order?</h2>
            <p className="text-sm text-gray-600 mt-2">
              Customs regulation for India require a copy of the recipient’s KYC.
              The address on the KYC needs to match the shipping address. Our
              courier will contact you via SMS/email to obtain a copy of your
              KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more
              information. <a href="#" className="text-blue-500">Learn More</a>
            </p>

            <input type="radio" className="" value="Deliver it" name="confirm" id="confirm" />
            
          </div>

          {/* Address Form */}
          <form className="space-y-6">
            <h3 className="text-lg font-semibold">Enter your name and address:</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="p-3 border rounded-md sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="p-3 border rounded-md sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="p-3 border rounded-md sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Locality"
                className="p-3 border rounded-md"
              />
              <select className="p-3 border rounded-md">
                <option>State/Territory</option>
              </select>
              <select className="p-3 border rounded-md">
                <option>India</option>
              </select>
            </div>

            <div className="flex space-x-4 mt-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 border rounded" />
                <span>Save this address to my profile</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 border rounded" />
                <span>Make this my preferred address</span>
              </label>
            </div>

            <h3 className="text-lg font-semibold">What&apos;s your contact information?</h3>
            <div className="grid gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border rounded-md"
              />
            </div>

            <h3 className="text-lg font-semibold">What&apos;s your PAN?</h3>
            <input
              type="text"
              placeholder="PAN"
              className="p-3 border rounded-md"
            />
            <label className="flex items-center space-x-2 mt-4">
              <input type="checkbox" className="w-5 h-5 border rounded" />
              <span>Save PAN details to Nike Profile</span>
            </label>

            <label className="flex items-start space-x-2 mt-4">
              <input type="checkbox" className="w-5 h-5 border rounded mt-1" />
              <span>
                I have read and consent to eShopWorld processing my information
                in accordance with the <a href="#" className="text-blue-500">Privacy
                Statement</a> and <a href="#" className="text-blue-500">Cookie Policy</a>. eShopWorld is a
                trusted Nike partner.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md mt-4"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Section */}
        <aside className="space-y-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹ 20 890.00</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery/Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between border-t pt-4">
              <p>Total</p>
              <p>₹ 20 890.00</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src="/product.jpg"
              alt="Nike Product"
              className="w-20 h-20 object-cover border rounded-md"
            />
            <div>
              <p>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
              <p>Qty: 1</p>
              <p>Size: L</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src="/product-shoes.jpg"
              alt="Nike Shoes"
              className="w-20 h-20 object-cover border rounded-md"
            />
            <div>
              <p>Nike Air Max 97 SE Men&apos;s Shoes</p>
              <p>Qty: 1</p>
              <p>Size: UK 8</p>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t mt-8 text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-4">
          <a href="#">India</a>
          <a href="#">© 2023 Nike, Inc. All Rights Reserved</a>
          <a href="#">Terms of Use</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
