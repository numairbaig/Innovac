-- Create orders table
CREATE TABLE public.orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    order_number TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'Pending Review',
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organization TEXT,
    address TEXT,
    city TEXT,
    country TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create order_items table
CREATE TABLE public.order_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
    reagent_id TEXT NOT NULL,
    reagent_name TEXT NOT NULL,
    category TEXT,
    image TEXT,
    size TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security (RLS)

-- Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert orders (for guest checkout)
CREATE POLICY "Anyone can insert orders"
ON public.orders FOR INSERT
TO public
WITH CHECK (true);

-- Allow users to read their own orders
CREATE POLICY "Users can view their own orders"
ON public.orders FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR email = auth.jwt()->>'email');

-- Allow anyone to insert order items
CREATE POLICY "Anyone can insert order items"
ON public.order_items FOR INSERT
TO public
WITH CHECK (true);

-- Allow users to view order items of their orders
CREATE POLICY "Users can view their order items"
ON public.order_items FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.orders
    WHERE orders.id = order_items.order_id
    AND (orders.user_id = auth.uid() OR orders.email = auth.jwt()->>'email')
  )
);
