import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { SEO } from '../../components/SEO';
import { Package, Clock, CheckCircle, Truck, XCircle, AlertCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccountOrders() {
  const { user, profile } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from('orders')
          .select(`
            *,
            order_items (*)
          `)
          .or(`user_id.eq.${user.id},email.eq.${profile?.email || user.email}`)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setOrders(data || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [user, profile]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending Review': return <Clock size={16} className="text-amber-500" />;
      case 'Quote Sent': return <FileText size={16} className="text-blue-500" />;
      case 'Confirmed': return <CheckCircle size={16} className="text-emerald-500" />;
      case 'Processing': return <Package size={16} className="text-purple-500" />;
      case 'Ready for Dispatch': return <Truck size={16} className="text-indigo-500" />;
      case 'Completed': return <CheckCircle size={16} className="text-green-600" />;
      case 'Cancelled': return <XCircle size={16} className="text-red-500" />;
      default: return <AlertCircle size={16} className="text-neutral-500" />;
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'Pending Review': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Quote Sent': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Confirmed': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Processing': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Ready for Dispatch': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Completed': return 'bg-green-50 text-green-700 border-green-200';
      case 'Cancelled': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-neutral-50 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <SEO title="My Orders | INNOVAC BIOTECHNOLOGIES" />
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#080808] mb-2">My Orders</h1>
        <p className="text-neutral-600">Track and manage your laboratory reagent order requests.</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 rounded-full border-4 border-[#FF4D00]/20 border-t-[#FF4D00] animate-spin"></div>
        </div>
      ) : orders.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#D8D8D5] p-16 text-center shadow-sm">
          <div className="w-20 h-20 bg-[#F5F5F3] rounded-full flex items-center justify-center mx-auto mb-6">
            <Package size={32} className="text-neutral-400" />
          </div>
          <h2 className="text-xl font-medium text-[#080808] mb-3">No orders found</h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">You haven't placed any order requests yet. Browse our reagent catalog to start an order.</p>
          <Link to="/reagents" className="inline-flex items-center justify-center h-12 px-8 rounded-[12px] bg-[#FF4D00] hover:bg-[#E64500] text-white font-bold tracking-wider text-xs uppercase transition-colors shadow-sm">
            BROWSE REAGENTS
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-[20px] border border-[#D8D8D5] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              
              {/* Header */}
              <div className="px-6 py-4 border-b border-[#D8D8D5] bg-[#F5F5F3]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-lg text-[#080808]">{order.order_number}</h3>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusBg(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500">
                    Placed on {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm font-medium text-[#080808]">{order.order_items?.reduce((acc: number, item: any) => acc + item.quantity, 0)} Items</p>
                  <p className="text-xs text-neutral-500 mt-1">Pricing TBC</p>
                </div>
              </div>
              
              {/* Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {order.order_items?.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-neutral-100 overflow-hidden shrink-0 border border-[#D8D8D5]">
                        <img src={item.image} alt={item.reagent_name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#080808] text-sm md:text-base">{item.reagent_name}</h4>
                        <p className="text-xs text-neutral-500 uppercase tracking-wider">{item.category}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-medium text-[#080808]">{item.size}</p>
                        <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
