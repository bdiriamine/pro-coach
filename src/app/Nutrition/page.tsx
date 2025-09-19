"use client"
import { useState } from 'react';
import Head from 'next/head';
import HeaderComponent from '../shared/component/HeaderComponent/HeaderComponent';
import Footer from '../shared/component/Footer/Footer';
import Image from 'next/image';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('plans');
  const [selectedPlan, setSelectedPlan] = useState(null);

  // بيانات خطط التغذية
  const nutritionData = {
    categories: [
      { id: 'plans', name: 'خطط التغذية' },
      { id: 'recipes', name: 'وصفات صحية' },
      { id: 'supplements', name: 'مكملات غذائية' },
      { id: 'consultation', name: 'استشارات غذائية' }
    ],
    plans: [
      {
        id: 1,
        title: 'خطة فقدان الوزن',
        duration: '4 أسابيع',
        goal: 'فقدان الوزن',
        calories: '1500-1800',
        price: '299',
        oldPrice: '399',
        features: [
          'خطة وجبات يومية',
          'وصفات منخفضة السعرات',
          'نصائح للتحكم بالشهية',
          'دعم أسبوعي'
        ],
        image: '/api/placeholder/400/250',
        popular: true
      },
      {
        id: 2,
        title: 'خطة بناء العضلات',
        duration: '8 أسابيع',
        goal: 'بناء العضلات',
        calories: '2500-3000',
        price: '399',
        oldPrice: '499',
        features: [
          'نظام عالي البروتين',
          'وجبات ما قبل وبعد التمرين',
          'مكملات موصى بها',
          'متابعة أسبوعية'
        ],
        image: '/api/placeholder/400/250'
      },
      {
        id: 3,
        title: 'خطة الصيام المتقطع',
        duration: '6 أسابيع',
        goal: 'تحسين الصحة',
        calories: '1800-2200',
        price: '349',
        oldPrice: '449',
        features: [
          'جدول الصيام',
          'وجبات متوازنة',
          'نصائح للتكيف',
          'دعم مستمر'
        ],
        image: '/api/placeholder/400/250'
      },
      {
        id: 4,
        title: 'خطة النباتيين',
        duration: '4 أسابيع',
        goal: 'التغذية النباتية',
        calories: '1800-2200',
        price: '279',
        oldPrice: '379',
        features: [
          'وجبات نباتية متكاملة',
          'مصادر البروتين النباتي',
          'وصفات متنوعة',
          'دعم متخصص'
        ],
        image: '/api/placeholder/400/250',
        popular: true
      }
    ],
    recipes: [
      {
        id: 1,
        title: 'سلطة الكينوا بالخضروات',
        category: 'سلطات',
        calories: '320',
        time: '20 دقيقة',
        ingredients: ['كينوا', 'خيار', 'طماطم', 'فلفل ألوان', 'زيت زيتون', 'ليمون'],
        image: '/api/placeholder/300/200'
      },
      {
        id: 2,
        title: 'أومليت البيض بالسبانخ',
        category: 'افطار',
        calories: '280',
        time: '15 دقيقة',
        ingredients: ['بيض', 'سبانخ', 'جبنة قليلة الدسم', 'فطر', 'بهارات'],
        image: '/api/placeholder/300/200'
      },
      {
        id: 3,
        title: 'صدر دجاج مشوي بالخضار',
        category: 'غداء',
        calories: '450',
        time: '30 دقيقة',
        ingredients: ['صدر دجاج', 'بروكلي', 'جزر', 'فلفل ألوان', 'بهارات'],
        image: '/api/placeholder/300/200'
      },
      {
        id: 4,
        title: 'سموذي البروتين',
        category: 'وجبة خفيفة',
        calories: '350',
        time: '10 دقيقة',
        ingredients: ['موز', 'حليب لوز', 'مسحوق بروتين', 'زبدة فول سوداني', 'عسل'],
        image: '/api/placeholder/300/200'
      }
    ],
    supplements: [
      {
        id: 1,
        name: 'بروتين مصل اللبن',
        category: 'بروتين',
        price: 189,
        benefits: ['بناء العضلات', 'تعافي أسرع', 'مصدر بروتين عالي'],
        image: '/api/placeholder/250/250'
      },
      {
        id: 2,
        name: 'أحماض أمينية متفرعة',
        category: 'أحماض أمينية',
        price: 129,
        benefits: ['تقليل إجهاد العضلات', 'تحسين الأداء', 'تعافي سريع'],
        image: '/api/placeholder/250/250'
      },
      {
        id: 3,
        name: 'فيتامين د3',
        category: 'فيتامينات',
        price: 79,
        benefits: ['صحة العظام', 'دعم المناعة', 'تحسين المزاج'],
        image: '/api/placeholder/250/250'
      },
      {
        id: 4,
        name: 'أوميغا 3',
        category: 'دهون صحية',
        price: 99,
        benefits: ['صحة القلب', 'دعم الدماغ', 'مضاد للالتهابات'],
        image: '/api/placeholder/250/250'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" dir="rtl">
      <Head>
        <title>التغذية | CoachPro</title>
        <meta name="description" content="خطط التغذية الصحية والوصفات والمكملات الغذائية من CoachPro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeaderComponent />

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-6">
        {/* قسم العنوان */}
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">التغذية الصحية</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            خطط تغذية مخصصة، وصفات صحية، ومكملات غذائية لتحقيق أهدافك الصحية واللياقية
          </p>
        </section>

        {/* تصنيفات التغذية */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {nutritionData.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${activeTab === category.id 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* محتوي التبويبات */}
        <div className="mb-12">
          {/* خطط التغذية */}
          {activeTab === 'plans' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">خطط التغذية المخصصة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nutritionData.plans.map(plan => (
                  <div key={plan.id} className="bg-white rounded-xl shadow-lg overflow-hidden program-card relative">
                    {plan.popular && (
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                        الأكثر شيوعًا
                      </div>
                    )}
                    
                    <div className="h-48 overflow-hidden">
                      <Image 
                        src={plan.image} 
                        alt={plan.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {plan.duration}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {plan.calories} سعرة
                        </span>
                      </div>
                      
                      <ul className="mb-4 space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <span className="text-2xl font-bold text-blue-800">{plan.price} ر.س</span>
                          {plan.oldPrice && (
                            <span className="text-gray-400 line-through text-sm mr-2">{plan.oldPrice} ر.س</span>
                          )}
                        </div>
                        <button 
                          onClick={() => setSelectedPlan(plan)}
                          className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                          اختر الخطة
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* وصفات صحية */}
          {activeTab === 'recipes' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">وصفات صحية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nutritionData.recipes.map(recipe => (
                  <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <Image 
                        src={recipe.image} 
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-800">{recipe.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {recipe.calories} سعرة
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{recipe.time}</span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-800 mb-1">المكونات الرئيسية:</p>
                        <div className="flex flex-wrap gap-1">
                          {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                              {ingredient}
                            </span>
                          ))}
                          {recipe.ingredients.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                              +{recipe.ingredients.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition-colors">
                        مشاهدة الوصفة
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* مكملات غذائية */}
          {activeTab === 'supplements' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">مكملات غذائية موصى بها</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nutritionData.supplements.map(supplement => (
                  <div key={supplement.id} className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
                    <div className="h-40 overflow-hidden">
                      <Image 
                        src={supplement.image} 
                        alt={supplement.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{supplement.name}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {supplement.category}
                      </span>
                      
                      <ul className="mt-3 mb-4 text-right text-sm text-gray-600">
                        {supplement.benefits.map((benefit, index) => (
                          <li key={index} className="mb-1">• {benefit}</li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-blue-800">{supplement.price} ر.س</span>
                        <button className="bg-blue-800 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                          اضف للسلة
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* استشارات غذائية */}
          {activeTab === 'consultation' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">استشارات غذائية متخصصة</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">لماذا الاستشارة الغذائية؟</h3>
                <p className="text-gray-600 mb-6">
                  الاستشارة الغذائية الخاصة تساعدك على تحقيق أهدافك الصحية من خلال خطة مخصصة تناسب نمط حياتك، تفضيلاتك الغذائية، واحتياجاتك الخاصة. سواء كان هدفك فقدان الوزن، بناء العضلات، أو تحسين صحتك العامة.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">ما تشمله الاستشارة:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>تحليل العادات الغذائية الحالية</li>
                      <li>تقييم الاحتياجات الغذائية</li>
                      <li>خطة وجبات مخصصة</li>
                      <li>نصائح للتسوق والطهي</li>
                      <li>متابعة أسبوعية</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">مميزات الاستشارة:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>جلسة واحدة لمدة 60 دقيقة</li>
                      <li>تقرير مفصل بعد الجلسة</li>
                      <li>دعم عبر الواتساب لمدة أسبوع</li>
                      <li>مراجعة وتعديل الخطة</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-800 mb-2">سعر الاستشارة: <span className="text-blue-800">199 ر.س</span></p>
                  <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                    احجز استشارة الآن
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* قسم الأسئلة الشائعة */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">أسئلة شائعة حول التغذية</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">كم مرة يجب أن آكل خلال اليوم؟</h3>
              <p className="text-gray-600">
                هذا يعتمد على أهدافك ونمط حياتك. بشكل عام، نوصي بـ 3 وجبات رئيسية ووجبتين خفيفتين للحفاظ على مستويات الطاقة والتحكم بالشهية.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">هل أحتاج إلى مكملات غذائية؟</h3>
              <p className="text-gray-600">
                المكملات الغذائية ليست بديلاً عن نظام غذائي متوازن، ولكنها يمكن أن تساعد في سد الفجوات الغذائية. نوصي باستشارة أخصائي قبل تناول أي مكملات.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">ما أفضل وقت لتناول البروتين بعد التمرين؟</h3>
              <p className="text-gray-600">
                النافذة الأنسب لتناول البروتين هي خلال 30-60 دقيقة بعد التمرين لتعزيز استشفاء العضلات وبناء الأنسجة.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">كيف أتحكم في الرغبة الشديدة في تناول السكر؟</h3>
              <p className="text-gray-600">
                نوصي بتناول وجبات متوازنة تحتوي على البروتين والألياف، شرب الماء الكافي، والحصول على قسط كافٍ من النوم. يمكن أيضًا استبدال الحلويات بفواكه طازجة.
              </p>
            </div>
          </div>
        </section>

        {/* دعوة للعمل */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">هل تحتاج إلى خطة تغذية مخصصة؟</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            احجز استشارة مع أخصائي التغذية لدينا للحصول على خطة غذائية مخصصة تناسب أهدافك ونمط حياتك
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300">
              احجز استشارة غذائية
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300">
              تواصل معنا
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nutrition;