'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Trash2, Heart } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

export default function CartPage() {
  let quantity =  1
  const [items, setItems] = useState<any[]>([]); // Cart items
  const [cartTotal, setCartTotal] = useState(0); // Total cart amount
  const [deliveryCharge, setDeliveryCharge] = useState(0); // Delivery charge
  const freeDeliveryThreshold = 14000;

  // Fetch cart items from API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart', {
          method: 'GET',
        });
        if (!response.ok) throw new Error('Failed to fetch cart items');
        const data = await response.json();
        setItems(data);
        calculateCartTotal(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Calculate cart total
  const calculateCartTotal = (cartItems: any[]) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setCartTotal(total);
    setDeliveryCharge(total >= freeDeliveryThreshold ? 0 : 200); // Example delivery charge logic
  };

  // Remove item from cart
  const removeItem = async (slug: string) => {
    try {
      const response = await fetch(`/api/cart/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to remove item');

      // Update the UI after removal
      const updatedItems = items.filter((item) => item.slug !== slug);
      setItems(updatedItems);
      calculateCartTotal(updatedItems);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  // Update item quantity
  const updateItemQuantity = async (slug: string, quantity: number) => {
    if (quantity < 1) return; // Prevent zero or negative quantities
    try {
      const response = await fetch(`/api/cart`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) throw new Error('Failed to update quantity');

      // Update the UI
      const updatedItems = items.map((item) =>
        item.slug === slug ? { ...item, quantity } : item
      );
      setItems(updatedItems);
      calculateCartTotal(updatedItems);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Free Delivery Banner */}
      <div className="mb-8 rounded-lg bg-background p-4 shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Free Delivery</h2>
            <p className="text-sm text-muted-foreground">
              Applies to orders of ₹ {freeDeliveryThreshold.toLocaleString()} or more.
            </p>
          </div>
          <button>View details</button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="mb-6 text-2xl font-bold">Bag</h1>
          {items.length === 0 ? (
            <p>Your bag is empty.</p>
          ) : (
            <div className="space-y-6">
              {items.map((item: any) => (
                <div key={item.id} className="flex gap-4 rounded-lg border p-4">
                  <div className="h-32 w-32 flex-shrink-0">
                    <Image
                      src={urlFor(item.image).url() || '/placeholder.svg'}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">{item.productName}</h3>
                        <p>{item.description}</p>
                        {item.size && <p className="mt-1 text-sm">Size: {item.size}</p>}
                      </div>
                      <p className="font-semibold">₹ {item.price}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        Quantity:
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateItemQuantity(item.slug, Number(e.target.value))
                          }
                          className="w-20 border rounded px-2 py-1"
                        />
                        <button
                          onClick={() => removeItem(item.slug)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span>{deliveryCharge === 0 ? 'Free' : `₹ ${deliveryCharge}`}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹ {(cartTotal + deliveryCharge).toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-2 mt-4 rounded">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Favourites Section */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Favourites</h2>
        <p className="text-muted-foreground">
          There are no items saved to your favourites.
        </p>
      </div>
    </div>
  );
}
