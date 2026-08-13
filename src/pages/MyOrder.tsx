import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrderCart } from '../contexts/OrderCartContext';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Trash2, CheckCircle, PackageSearch, AlertCircle } from 'lucide-react';

export default function MyOrder() {
  const { items, updateQuantity, removeItem, clearCart, totalItems } = useOrderCart();
  const { user, profile } = useAuth();
  
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [orderNumber, setOrderNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    address: '',
    city: '',
    country: '',
    notes: ''
  });

  // Auto-populate when profile loads
  useEffect(() => {
    if (profile) {
      setFormData(prev => ({
        ...prev,
        fullName: profile.full_name || '',
        email: profile.email || '',
        organization: profile.department || ''
      }));
    }
  }, [profile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceed = () => {
    if (items.length === 0) return;
    setStep('checkout');
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 1. Generate Order Number
      const generateOrderNumber = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return `INV-${result}`;
      };

      const newOrderNumber = generateOrderNumber();

      // 2. Insert into orders table
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user?.id || null,
          order_number: newOrderNumber,
          status: 'Pending Review',
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          notes: formData.notes
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // 3. Insert into order_items table
      const orderItemsToInsert = items.map(item => ({
        order_id: orderData.id,
        reagent_id: item.reagentId,
        reagent_name: item.name,
        category: item.category,
        image: item.image,
        size: item.size,
        quantity: item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItemsToInsert);

      if (itemsError) throw itemsError;

      // 4. Success
      setOrderNumber(newOrderNumber);
      clearCart();
      setStep('success');
      window.scrollTo(0, 0);

    } catch (err: any) {
      console.error('Order submission error:', err);
      setError('An error occurred while submitting your order request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <div className="bg-[#050505] min-h-screen pt-32 pb-24 flex items-center justify-center">
        <SEO title="Order Received | INNOVAC BIOTECHNOLOGIES" />
        <div className="max-w-2xl w-full mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
            <CheckCircle size={48} className="text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">ORDER REQUEST RECEIVED</h1>
          <p className="text-xl text-neutral-400 font-light mb-2">Thank you. Your order request has been submitted successfully.</p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-10 inline-block text-left mx-auto">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1">Order Request #</p>
            <p className="text-3xl font-medium text-accent">{orderNumber}</p>
          </div>
          
          <p className="text-neutral-400 mb-12 max-w-lg mx-auto">
            Our team will review product availability, pricing, and delivery details and contact you shortly at <strong>{formData.email}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user && (
              <Button href="/account/orders" variant="primary" className="bg-accent text-white hover:bg-accent-bright">
                VIEW MY ORDERS
              </Button>
            )}
            <Button href="/reagents" variant={user ? "dark" : "primary"} className={user ? "border-white/20" : "bg-accent text-white"}>
              CONTINUE BROWSING
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-24">
      <SEO title="My Order | INNOVAC BIOTECHNOLOGIES" />
      <PageHero 
        label="My Order"
        title={step === 'cart' ? "Order Request" : "Checkout"}
        description={step === 'cart' ? "Review your selected laboratory reagents before submission." : "Provide your details to submit the order request."}
      />
      
      <div className="max-w-[1200px] mx-auto px-6 mt-16">
        
        {step === 'cart' && (
          <div>
            {items.length === 0 ? (
              <div className="text-center py-32 bg-white/5 border border-white/10 rounded-3xl">
                <PackageSearch size={48} className="mx-auto text-neutral-600 mb-6" />
                <h2 className="text-3xl font-light text-white mb-4">Your order is empty</h2>
                <p className="text-neutral-400 mb-8">Browse our reagents to add items to your order request.</p>
                <Button href="/reagents" variant="primary" className="bg-accent text-white">
                  EXPLORE REAGENTS
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                  <div className="mb-6 flex justify-between items-center border-b border-white/10 pb-4">
                    <h2 className="text-xl font-medium">Selected Items ({totalItems})</h2>
                    <Link to="/reagents" className="text-accent hover:text-accent-bright text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
                      <ArrowLeft size={16} /> Continue Shopping
                    </Link>
                  </div>
                  
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={`${item.reagentId}-${item.size}`} className="flex flex-col sm:flex-row gap-6 bg-white/5 border border-white/10 rounded-[24px] p-6">
                        <div className="w-full sm:w-32 h-32 rounded-[16px] overflow-hidden bg-neutral-900 shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-screen opacity-80" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-2 block">{item.category}</span>
                              <h3 className="text-xl font-medium text-white mb-1"><Link to={`/reagents/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent transition-colors">{item.name}</Link></h3>
                              <p className="text-neutral-400 text-sm">Size: {item.size}</p>
                            </div>
                            <button 
                              onClick={() => removeItem(item.reagentId, item.size)}
                              className="text-neutral-500 hover:text-red-500 transition-colors p-2"
                              aria-label="Remove item"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden h-10 w-32">
                              <button onClick={() => updateQuantity(item.reagentId, item.size, item.quantity - 1)} className="w-10 h-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">-</button>
                              <div className="flex-1 h-full flex items-center justify-center text-white text-sm">{item.quantity}</div>
                              <button onClick={() => updateQuantity(item.reagentId, item.size, item.quantity + 1)} className="w-10 h-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">+</button>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-white">Pricing on request</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 sticky top-32">
                    <h3 className="text-lg font-medium text-white mb-6 border-b border-white/10 pb-4">Order Summary</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-neutral-400 text-sm">
                        <span>Items</span>
                        <span>{totalItems}</span>
                      </div>
                      <div className="flex justify-between text-neutral-400 text-sm">
                        <span>Pricing</span>
                        <span>To be confirmed</span>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex justify-between text-white font-medium">
                        <span>Total Estimate</span>
                        <span className="text-accent font-semibold tracking-wider">REQUEST QUOTE</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleProceed}
                      className="w-full bg-accent hover:bg-accent-bright text-white py-4 rounded-[12px] font-bold tracking-wider text-sm uppercase transition-colors"
                    >
                      PROCEED TO ORDER
                    </button>
                    <p className="text-xs text-neutral-500 text-center mt-4">
                      No payment required at this stage. Our team will contact you to finalize pricing and delivery.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 'checkout' && (
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setStep('cart')}
              className="text-neutral-400 hover:text-accent flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeft size={16} /> Back to Cart
            </button>
            
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-[24px] p-8 sm:p-10 backdrop-blur-sm">
              <h2 className="text-2xl font-light text-white mb-8 border-b border-white/10 pb-4">Customer Information</h2>
              
              {error && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-start gap-3">
                  <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-red-200">{error}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">Full Name *</label>
                  <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">Organization / Lab</label>
                  <input type="text" name="organization" value={formData.organization} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="University / Company Name" />
                </div>
              </div>
              
              <h2 className="text-2xl font-light text-white mb-8 border-b border-white/10 pb-4 pt-4">Delivery Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">Delivery Address *</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="Street Address, Building, Room" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">City *</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="City" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">Country *</label>
                  <input required type="text" name="country" value={formData.country} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="Country" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">Additional Notes</label>
                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent resize-none" placeholder="Special requirements, grant numbers, or delivery instructions..."></textarea>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 mt-12">
                <p className="text-sm text-neutral-400 max-w-sm">
                  By submitting this request, you agree to our terms of service. Our team will contact you to confirm pricing.
                </p>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-accent hover:bg-accent-bright text-white px-8 py-4 rounded-[12px] font-bold tracking-wider text-sm uppercase transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      SUBMITTING...
                    </>
                  ) : "SUBMIT ORDER REQUEST"}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
