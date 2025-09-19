"use client"
import { useState } from 'react';
import Head from 'next/head';
import Footer from '../shared/component/Footer/Footer';
import HeaderComponent from '../shared/component/HeaderComponent/HeaderComponent';
import Image from 'next/image';

const ProgramsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // بيانات البرامج
  const programsData = {
    categories: [
      { id: 'all', name: 'جميع البرامج' },
      { id: 'fitness', name: 'اللياقة البدنية' },
      { id: 'nutrition', name: 'التغذية' },
      { id: 'recovery', name: 'الاستشفاء' }
    ],
    programs: [
      {
        id: 1,
        title: 'برنامج التحول الشامل',
        category: 'fitness',
        duration: '12 أسبوع',
        level: 'مبتدئ',
        price: '1,499',
        oldPrice: '1,999',
        features: [
          'جلسات تدريبية أسبوعية',
          'خطة غذائية مخصصة',
          'متابعة أسبوعية',
          'دعم مباشر 24/7'
        ],
        image: '/tr.webp',
        popular: true
      },
      {
        id: 2,
        title: 'برنامج التغذية المتكامل',
        category: 'nutrition',
        duration: '8 أسابيع',
        level: 'جميع المستويات',
        price: '899',
        oldPrice: '1,199',
        features: [
          'خطة غذائية مخصصة',
          'وصفات صحية',
          'دليل التسوق',
          'نصائح الطهي'
        ],
        image: '/et.webp'
      },
      {
        id: 3,
        title: 'برنامج القوة واللياقة',
        category: 'fitness',
        duration: '16 أسبوع',
        level: 'متقدم',
        price: '1,799',
        oldPrice: '2,199',
        features: [
          'تمارين قوة مكثفة',
          'تمارين لياقة',
          'متابعة الأداء',
          'تقييم أسبوعي'
        ],
        image: '/str.png'
      },
      {
        id: 4,
        title: 'برنامج الاستشفاء النشط',
        category: 'recovery',
        duration: '4 أسابيع',
        level: 'جميع المستويات',
        price: '699',
        oldPrice: '899',
        features: [
          'تمارين استشفاء',
          'تمارين مرونة',
          'نصائح النوم',
          'إرشادات التغذية'
        ],
        image: '/daa.jpg'
      },
      {
        id: 5,
        title: 'برنامج تحدي 30 يوم',
        category: 'fitness',
        duration: '4 أسابيع',
        level: 'مبتدئ',
        price: '599',
        oldPrice: '799',
        features: [
          'تمارين يومية',
          'تحديات أسبوعية',
          'مجتمع الدعم',
          'مكافآت الإنجاز'
        ],
        image: '/aar1.jpg',
        popular: true
      },
      {
        id: 6,
        title: 'برنامج الصيام المتقطع',
        category: 'nutrition',
        duration: '6 أسابيع',
        level: 'متوسط',
        price: '799',
        oldPrice: '999',
        features: [
          'خطة الصيام',
          'وصفات مناسبة',
          'تتبع التقدم',
          'دعم متخصص'
        ],
        image: '/arr.jpg'
      }
    ]
  };

  const filteredPrograms = activeCategory === 'all' 
    ? programsData.programs 
    : programsData.programs.filter(program => program.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" dir="rtl">
      <Head>
        <title>البرامج | CoachPro</title>
        <meta name="description" content="اكتشف برامج التدريب والتغذية المتخصصة من CoachPro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
<HeaderComponent />


      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-6">
        {/* قسم العنوان */}
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">برامجنا التدريبية</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            اكتشف مجموعة برامجنا المصممة خصيصًا لمساعدتك في تحقيق أهدافك الصحية واللياقية
          </p>
        </section>

        {/* تصنيفات البرامج */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {programsData.categories.map(category => (
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

        {/* قائمة البرامج */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPrograms.map(program => (
            <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden program-card relative">
              {program.popular && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  الأكثر شيوعًا
                </div>
              )}
              
              <div className="h-48 overflow-hidden">
                <Image 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {program.duration}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {program.level}
                  </span>
                </div>
                
                <ul className="mb-4 space-y-2">
                  {program.features.map((feature, index) => (
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
                    <span className="text-2xl font-bold text-blue-800">{program.price} ر.س</span>
                    {program.oldPrice && (
                      <span className="text-gray-400 line-through text-sm mr-2">{program.oldPrice} ر.س</span>
                    )}
                  </div>
                  <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    اشترك الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* قسم الأسئلة الشائعة */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">أسئلة شائعة</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">كيف أختار البرنامج المناسب لي؟</h3>
              <p className="text-gray-600">
                يمكنك التواصل معنا للحصول على استشارة مجانية حيث سنقوم بتقييم أهدافك ومستوى لياقتك الحالي لمساعدتك في اختيار البرنامج الأنسب لك.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">هل يمكنني تعديل البرنامج حسب احتياجاتي؟</h3>
              <p className="text-gray-600">
                نعم، جميع برامجنا قابلة للتخصيص حسب احتياجاتك وأهدافك الخاصة بعد إجراء التقييم الأولي.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">ماذا إذا لم يكن البرنامج مناسبًا لي؟</h3>
              <p className="text-gray-600">
                نقدم ضمان استرجاع 100% خلال 14 يوم إذا لم يكن البرنامج مناسبًا لك ولم تحقق النتائج المرجوة.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">كيف يتم متابعة تقدمي في البرنامج؟</h3>
              <p className="text-gray-600">
                نستخدم تطبيقًا خاصًا لمتابعة تقدمك، بالإضافة إلى جلسات أسبوعية عبر Zoom لتقييم التقدم وتعديل الخطة إذا لزم الأمر.
              </p>
            </div>
          </div>
        </section>

        {/* دعوة للعمل */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">هل تحتاج إلى مساعدة في اختيار البرنامج؟</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            احجز استشارة مجانية مع مدربنا الخبير لمساعدتك في اختيار البرنامج الأنسب لأهدافك ومستوى لياقتك الحالي
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300">
              احجز استشارة مجانية
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300">
              تواصل معنا
            </button>
          </div>
        </section>
      </main>
          <Footer />
      </div>
  )};
  export default ProgramsPage;

