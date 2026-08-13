import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { ArrowLeft, Check, ShieldCheck, Thermometer, FlaskConical, AlertCircle, ShoppingCart } from 'lucide-react';
import { reagentsData } from '@/src/data/reagents';
import NotFound from './NotFound';
import { useOrderCart } from '@/src/contexts/OrderCartContext';

export default function ReagentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const reagent = reagentsData.find(r => r.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('500ml');
  const [added, setAdded] = useState(false);
  const { addItem } = useOrderCart();

  const handleAddToOrder = () => {
    if (!reagent) return;
    addItem({
      reagentId: reagent.id,
      name: reagent.name,
      category: reagent.category,
      image: reagent.image,
      size: selectedSize,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 5000); // Hide after 5 seconds
  };

  if (!reagent) {
    return <NotFound />;
  }

  return (
    <>
      <SEO title={`${reagent.name} | INNOVAC BIOTECHNOLOGIES`} description={reagent.description} />
      
      <div className="bg-[#050505] min-h-screen pt-32 pb-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Top Breadcrumb */}
          <div className="mb-8">
            <Link to="/reagents" className="inline-flex items-center text-xs font-semibold tracking-widest text-neutral-400 uppercase hover:text-accent transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Back to Reagents
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            
            {/* Left: Visual Area */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden aspect-square lg:aspect-auto lg:h-[700px] relative">
                <img 
                  src={reagent.image} 
                  alt={reagent.name}
                  className="w-full h-full object-cover mix-blend-screen opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-widest uppercase">
                    {reagent.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product Info & Ordering */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              
              <div className="mb-10">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                  INNOVAC LABORATORY REAGENTS
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6 text-white leading-tight">
                  {reagent.name}
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed font-light mb-8">
                  {reagent.description}
                </p>
              </div>

              {/* Specifications / Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Research Grade</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">High purity for sensitive molecular applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Thermometer size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Stable Storage</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">Optimized formulation for extended shelf life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <FlaskConical size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Ready to Use</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">Pre-mixed and optimized for immediate application.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Check size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Quality Tested</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">Rigorous QC for consistent reproducibility.</p>
                  </div>
                </div>
              </div>

              {/* Ordering Area */}
              <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 sm:p-8 backdrop-blur-sm">
                
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle size={16} className="text-accent" />
                    <span className="text-sm font-medium text-white">Pricing & Availability</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Pricing available on request</h3>
                  <p className="text-sm text-neutral-400">Please add items to your order request or request a quote directly.</p>
                </div>

                {/* Selectors */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">Volume / Size</label>
                    <select 
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-accent appearance-none cursor-pointer"
                    >
                      <option value="100ml" className="bg-[#050505]">100 ml</option>
                      <option value="250ml" className="bg-[#050505]">250 ml</option>
                      <option value="500ml" className="bg-[#050505]">500 ml</option>
                      <option value="1L" className="bg-[#050505]">1 Liter</option>
                      <option value="Custom" className="bg-[#050505]">Custom Volume</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-32">
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">Quantity</label>
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden h-[54px]">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">-</button>
                      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-full h-full bg-transparent text-center text-white text-sm focus:outline-none appearance-none m-0 p-0" />
                      <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">+</button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {added ? (
                  <div className="bg-accent/10 border border-accent rounded-2xl p-6 text-center animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    </div>
                    <h4 className="text-white font-medium text-lg mb-4">Added to your order</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button href="/my-order" variant="primary" className="flex-1 bg-white text-[#050505] hover:bg-neutral-200">
                        VIEW ORDER
                      </Button>
                      <Button href="/reagents" variant="dark" className="flex-1 border-white/20 hover:border-white/40">
                        CONTINUE SHOPPING
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleAddToOrder}
                      className="flex-1 bg-accent hover:bg-accent-bright text-white py-4 shadow-lg shadow-accent/20 border-none rounded-[10px] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={16} /> ADD TO ORDER
                    </button>
                    <Button 
                      href={getCtaPath('REQUEST_QUOTE')} 
                      variant="dark" 
                      className="flex-1 py-4 border-white/20 hover:border-white/40"
                    >
                      REQUEST A QUOTE
                    </Button>
                  </div>
                )}
                
              </div>
            </div>
          </div>
          
          {/* Detailed Info Section */}
          <div className="mt-32 pt-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-light text-white mb-6">Product<br/>Information</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">Detailed technical specifications and usage guidelines for laboratory applications.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <Check size={16} className="text-accent" /> Applications
                </h3>
                <ul className="space-y-3 text-sm text-neutral-400 leading-relaxed">
                  <li>• Molecular Biology Workflows</li>
                  <li>• DNA / RNA Preparation</li>
                  <li>• PCR & Amplification</li>
                  <li>• Gel Electrophoresis</li>
                  <li>• General Laboratory Use</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <Check size={16} className="text-accent" /> Storage & Handling
                </h3>
                <ul className="space-y-3 text-sm text-neutral-400 leading-relaxed">
                  <li>• Store at Room Temperature (or specified)</li>
                  <li>• Avoid direct sunlight</li>
                  <li>• Keep container tightly closed</li>
                  <li>• For research use only</li>
                  <li>• Wear standard laboratory PPE</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
