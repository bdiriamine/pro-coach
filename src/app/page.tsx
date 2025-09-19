"use client";
import Image from "next/image";
import HeaderComponent from "./shared/component/HeaderComponent/HeaderComponent";
import Footer from "./shared/component/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <HeaderComponent />

      {/* قسم البطل */}
      <section className="hero bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">برنامجك الشخصي للتدريب والتغذية</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            احصل على تدريب شخصي متكامل، خطط تغذية مخصصة، ومتابعة مباشرة من مدربك الشخصي لتحقيق أهدافك الرياضية
          </p>
          <a href="#" className="btn btn-primary bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block">
            ابدأ رحلتك الآن
          </a>
        </div>
      </section>

      {/* قسم الميزات */}
      <section className="features py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-title text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">ميزات التطبيق</h2>
            <p className="text-gray-600 text-lg md:text-xl">كل ما تحتاجه لرحلتك الرياضية في مكان واحد</p>
          </div>
          <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="feature-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">مدرب شخصي واحد</h3>
              <p className="text-gray-600 text-center">تواصل مباشر مع مدربك الشخصي الخاص لمتابعة تقدمك وتلقي التوجيهات بشكل مباشر</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="feature-icon bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm6 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0010.41 3.97c.21.71.33 1.46.33 2.26 0 4.41-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">متابعة التقدم</h3>
              <p className="text-gray-600 text-center">تتبع تقدمك الرياضي مع إحصائيات مفصلة ورسوم بيانية توضح تطور أدائك وتحقيق أهدافك</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="feature-icon bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">دروس متعددة</h3>
              <p className="text-gray-600 text-center">احصل على مجموعة متنوعة من الدروس التدريبية المصورة والتمارين الموجهة حسب مستواك</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="feature-icon bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">اشتراكات مرنة</h3>
              <p className="text-gray-600 text-center">اختر بين الاشتراك الشهري أو السنوي مع خيارات متعددة تناسب احتياجاتك وميزانيتك</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="feature-icon bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm5 4a2 2 0 110-4 2 2 0 010 4zm-10 0a2 2 0 110-4 2 2 0 010 4zm5 4a2 2 0 110-4 2 2 0 010 4zm5 4a2 2 0 110-4 2 2 0 010 4zm-10 0a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">متجر متكامل</h3>
              <p className="text-gray-600 text-center">تسوق للملابس الرياضية والإكسسوارات والمنتجات الصحية المناسبة لروتينك التدريبي</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="feature-icon bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">نظام غذائي صحي</h3>
              <p className="text-gray-600 text-center">خطط غذائية مخصصة تناسب أهدافك وتفضيلاتك الغذائية مع وصفات محلية مناسبة</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الاشتراكات */}
      <section className="subscription py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-title text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">باقات الاشتراك</h2>
            <p className="text-gray-600 text-lg md:text-xl">اختر الباقة التي تناسب أهدافك وابدأ رحلتك نحو لياقة أفضل</p>
          </div>
          <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="pricing-card bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">الباقة الأساسية</h3>
              <div className="price text-3xl font-bold text-blue-600 mb-6 text-center">199 <span className="text-lg font-normal text-gray-600">ريال/شهر</span></div>
              <ul className="features-list mb-8 flex-grow">
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">3 جلسات تدريبية أسبوعياً</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">خطة غذائية أساسية</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">متابعة أسبوعية</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">وصول محدود للدروس</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">دعم عبر البريد الإلكتروني</span>
                </li>
              </ul>
              <a href="#" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 block">
                اشترك الآن
              </a>
            </div>
            <div className="pricing-card bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-blue-500 relative flex flex-col transform scale-105">
              <div className="popular bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-bold absolute -top-3 right-1/2 transform translate-x-1/2">الأكثر شيوعاً</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">الباقة المتقدمة</h3>
              <div className="price text-3xl font-bold text-blue-600 mb-6 text-center">349 <span className="text-lg font-normal text-gray-600">ريال/شهر</span></div>
              <ul className="features-list mb-8 flex-grow">
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">5 جلسات تدريبية أسبوعياً</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">خطة غذائية متقدمة</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">متابعة يومية</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">وصول كامل للدروس</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">دعم مباشر عبر التطبيق</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">خصم 10% على المتجر</span>
                </li>
              </ul>
              <a href="#" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 block">
                اشترك الآن
              </a>
            </div>
            <div className="pricing-card bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">الباقة السنوية</h3>
              <div className="price text-3xl font-bold text-blue-600 mb-6 text-center">2999 <span className="text-lg font-normal text-gray-600">ريال/سنوياً</span></div>
              <ul className="features-list mb-8 flex-grow">
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">جميع ميزات الباقة المتقدمة</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">جلسات تدريبية غير محدودة</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">خطط غذائية متغيرة quarterly</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">تحليل أداء مفصل شهرياً</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">دعم مباشر على مدار الساعة</span>
                </li>
                <li className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">خصم 20% على المتجر</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">هدية ترحيبية من المنتجات</span>
                </li>
              </ul>
              <a href="#" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 block">
                اشترك الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* الفوتر */}
 <Footer />
    </div>
  );
}