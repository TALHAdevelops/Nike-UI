"use client";

import { useState } from "react";

interface Product {
  slug: string;
  productName: string;
  price: number;
  description: string;
  image: any;
  quantity: number;
}

const AddToCartButton = ({ product }: { product: Product }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds
      } else {
        const errorMessage = await response.text();
        setError(errorMessage || "Failed to add product to cart");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <button
      onSubmit={handleSubmit}
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`${
          isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-black hover:bg-black"
        } text-white px-4 py-2 rounded transition`}
      >
        {isLoading ? "Adding..." : "Add to Cart"}
      </button>

      {alertVisible && (
        <div
          className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
          role="alert"
          aria-live="polite"
        >
          <strong>Success!</strong> Your product has been added to the cart.
        </div>
      )}

      {error && (
        <div
          className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          role="alert"
          aria-live="polite"
        >
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
