"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import HeaderComponent from '../shared/component/HeaderComponent/HeaderComponent';
import Footer from '../shared/component/Footer/Footer';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../api/connection/supabasseConnection';
import Image from 'next/image';




const StorePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const queryClient = useQueryClient();

  // Fetch products from Supabase
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw new Error(error.message);
      return data;
    }
  });

  // Fetch categories from Supabase
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) throw new Error(error.message);
      return data;
    }
  });

  // Fetch cart items from Supabase (for authenticated users)
  const { data: cartItems = [] } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      // In a real app, you would filter by user ID
      const { data, error } = await supabase
        .from('cart')
        .select(`
          *,
          products (*)
        `);
      
      if (error) throw new Error(error.message);
      return data;
    }
  });

  // Add to cart mutation
  const addToCartMutation = useMutation({
    mutationFn: async (product) => {
      // Check if product already exists in cart
      const { data: existingItem } = await supabase
        .from('cart')
        .select('*')
        .eq('product_id', product?.id)
        .single();
      
      if (existingItem) {
        // Update quantity if product exists
        const { data, error } = await supabase
          .from('cart')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('id', existingItem.id)
          .select();
        
        if (error) throw new Error(error.message);
        return data;
      } else {
        // Add new product to cart
        const { data, error } = await supabase
          .from('cart')
          .insert([{ 
            product_id: product.id, 
            quantity: 1,
            price: product.price
          }])
          .select();
        
        if (error) throw new Error(error.message);
        return data;
      }
    },
    onSuccess: () => {
      // Invalidate and refetch cart query
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      setShowCart(true);
    }
  });

  // Remove from cart mutation
  const removeFromCartMutation = useMutation({
    mutationFn: async (cartItemId) => {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', cartItemId);
      
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

  // Update quantity mutation
  const updateQuantityMutation = useMutation({
    mutationFn: async ({ cartItemId, newQuantity }) => {
      if (newQuantity < 1) {
        // Remove item if quantity is 0
        const { error } = await supabase
          .from('cart')
          .delete()
          .eq('id', cartItemId);
        
        if (error) throw new Error(error.message);
        return;
      }
      
      const { error } = await supabase
        .from('cart')
        .update({ quantity: newQuantity })
        .eq('id', cartItemId);
      
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" dir="rtl">
        <HeaderComponent cartItemsCount={0} />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-pulse text-2xl text-blue-800">جاري تحميل المنتجات...</div>
        </div>
      </div>
    );
  }
console.log("Cart items:", cartItems);
console.log("Show cart state:", showCart);
console.log("Cart items count:", getTotalItems());
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" dir="rtl">
        <HeaderComponent cartItemsCount={0} />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-2xl text-red-600">حدث خطأ في تحميل المنتجات: {error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" dir="rtl">
      <Head>
        <title>المتجر | CoachPro</title>
        <meta name="description" content="متجر CoachPro للملابس والمعدات الرياضية والمكملات الغذائية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* استخدام مكون الهيدر المشترك */}
      <HeaderComponent cartItemsCount={getTotalItems()} />

      {/* سلة التسوق الجانبية */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowCart(false)}></div>
            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">سلة التسوق</h2>
                      <button
                        type="button"
                        className="-mr-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setShowCart(false)}
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cartItems.length === 0 ? (
                            <li className="py-6 text-center text-gray-500">سلة التسوق فارغة</li>
                          ) : (
                            cartItems.map((item) => (
                              <li key={item.id} className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                  <Image
                                    src={item.products?.image || '/placeholder.jpg'}
                                    alt={item.products?.name}
                                    className="w-full h-full object-center object-cover"
                                  />
                                </div>

                                <div className="mr-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{item.products?.name}</h3>
                                      <p className="ml-4">{item.price * item.quantity} ر.س</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.price} ر.س للقطعة</p>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-blue-600 hover:text-blue-500"
                                        onClick={() => removeFromCartMutation.mutate(item.id)}
                                        disabled={removeFromCartMutation.isPending}
                                      >
                                        {removeFromCartMutation.isPending ? 'جاري الإزالة...' : 'إزالة'}
                                      </button>
                                    </div>
                                    <div className="flex items-center border rounded-md">
                                      <button
                                        onClick={() => updateQuantityMutation.mutate({
                                          cartItemId: item.id, 
                                          newQuantity: item.quantity - 1
                                        })}
                                        className="px-2 py-1 border-r"
                                        disabled={updateQuantityMutation.isPending}
                                      >
                                        -
                                      </button>
                                      <span className="px-3 py-1">{item.quantity}</span>
                                      <button
                                        onClick={() => updateQuantityMutation.mutate({
                                          cartItemId: item.id, 
                                          newQuantity: item.quantity + 1
                                        })}
                                        className="px-2 py-1 border-l"
                                        disabled={updateQuantityMutation.isPending}
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>المجموع</p>
                        <p>{getTotalPrice()} ر.س</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">شامل ضريبة القيمة المضافة</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-800 hover:bg-blue-700"
                        >
                          اتمام الشراء
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          أو{' '}
                          <button
                            type="button"
                            className="text-blue-600 font-medium hover:text-blue-500"
                            onClick={() => setShowCart(false)}
                          >
                            مواصلة التسوق<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-6">
        {/* قسم العنوان */}
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">متجر CoachPro</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            اكتشف أحدث المنتجات الرياضية والمكملات الغذائية لتحقيق أقصى استفادة من تدريباتك
          </p>
        </section>

        {/* تصنيفات المنتجات */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${activeCategory === 'all' 
                ? 'bg-blue-800 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              جميع المنتجات
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${activeCategory === category.id 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* قائمة المنتجات */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden program-card relative">
              {product.featured && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  منتج مميز
                </div>
              )}
              
              {!product.in_stock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  غير متوفر
                </div>
              )}
              
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold text-blue-800">{product.price} ر.س</span>
                    {product.old_price && (
                      <span className="text-gray-400 line-through text-sm mr-2">{product.old_price} ر.س</span>
                    )}
                  </div>
                  
                  {product.in_stock ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      متوفر
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      غير متوفر
                    </span>
                  )}
                </div>
                
                {product.sizes && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">المقاسات:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map(size => (
                        <span key={size} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.colors && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">الألوان:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map(color => (
                        <span key={color} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => addToCartMutation.mutate(product)}
                  disabled={!product.in_stock || addToCartMutation.isPending}
                  className={`w-full py-2 rounded-lg text-sm transition-colors ${
                    product.in_stock 
                      ? 'bg-blue-800 hover:bg-blue-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  } ${addToCartMutation.isPending ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {addToCartMutation.isPending 
                    ? 'جاري الإضافة...' 
                    : product.in_stock 
                      ? 'أضف إلى السلة' 
                      : 'غير متوفر'}
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* ميزات المتجر */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
            <div className="bg-blue-100 p-3 rounded-full ml-4">
              <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">منتجات أصلية</h3>
              <p className="text-gray-600 text-sm">ضمان جودة جميع المنتجات</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
            <div className="bg-green-100 p-3 rounded-full ml-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">توصيل سريع</h3>
              <p className="text-gray-600 text-sm">توصيل خلال 2-5 أيام عمل</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
            <div className="bg-orange-100 p-3 rounded-full ml-4">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">إرجاع مجاني</h3>
              <p className="text-gray-600 text-sm">إمكانية الإرجاع خلال 14 يوم</p>
            </div>
          </div>
        </section>

        {/* دعوة للعمل */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">هل تحتاج إلى مساعدة في اختيار المنتج المناسب؟</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            تواصل مع خبرائنا للحصول على استشارة مجانية لمساعدتك في اختيار أفضل المنتجات لاحتياجاتك
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300">
              تواصل معنا
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300">
              عرض جميع المنتجات
            </button>
          </div>
        </section>
      </main>

      {/* استخدام مكون الفوتر المشترك */}
      <Footer />
    </div>
  );
};

export default StorePage;