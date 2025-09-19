"use client";
import { useState } from 'react';
import Head from 'next/head';
import HeaderComponent from '../shared/component/HeaderComponent/HeaderComponent';
import Footer from '../shared/component/Footer/Footer';
import Image from 'next/image';

const AboutCoach = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // بيانات المدرب (يمكن استبدالها ببيانات حقيقية)
  const coachData = {
    name: 'أريج السقا',
    title: 'مدربة لياقة بدنية معتمد',
    experience: '10+ سنوات',
    specialties: ['تمارين القوة', 'اللياقة الوظيفية', 'التغذية الرياضية'],
    certifications: [
      'ACE Certified Personal Trainer',
      'NASM Performance Enhancement Specialist',
      'ISSA Nutritionist'
    ],
    about: 'مدربة لياقة بدنية محترفة حاصلة على عدة شهادات دولية. متخصص في تمارين القوة واللياقة الوظيفية والتغذية الرياضية. هدفي هو مساعدة العملاء على تحقيق أهدافهم الصحية واللياقية بأسلوب علمي ومنهجي.',
    philosophy: 'أؤمن بأن اللياقة البدنية هي أسلوب حياة وليست مجرد تمارين مؤقتة. برامجي التدريبية مصممة خصيصًا لتتناسب مع أهداف كل عميل وقدراته، مع التركيز على التغذية السليمة والتمارين الفعالة.',
    stats: [
      { value: '500+', label: 'عميل' },
      { value: '10+', label: 'سنوات خبرة' },
      { value: '98%', label: 'عملاء راضون' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" dir="rtl">
      <Head>
        <title>عن المدرب | CoachPro</title>
        <meta name="description" content="تعرف على مدربك الشخصي أحمد السعدي وخبراته في مجال اللياقة البدنية" />
      </Head>

      {/* الهيدر */}
<HeaderComponent />

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-8">
        {/* قسم المقدمة */}
        <section className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full overflow-hidden shadow-lg">
                <Image 
                  src="/aa3.jpg" 
                  alt={coachData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white py-1 px-3 text-xs md:text-sm md:px-4 rounded-full shadow-md">
                مدرب معتمد
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pr-8 text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{coachData.name}</h2>
            <p className="text-orange-500 text-lg md:text-xl mb-4">{coachData.title}</p>
            
            <div className="flex flex-wrap gap-2 md:gap-4 mb-6 justify-center md:justify-start">
              {coachData.specialties.map((specialty, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs md:text-sm md:px-3 rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{coachData.about}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 space-x-reverse">
              {coachData.stats.map((stat, index) => (
                <div key={index} className="text-center mb-4 md:mb-0">
                  <p className="text-xl md:text-2xl font-bold text-blue-800">{stat.value}</p>
                  <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* التبويبات */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              <button
                onClick={() => setActiveTab('about')}
                className={`py-4 px-4 md:px-6 text-center font-medium text-sm md:text-base whitespace-nowrap ${activeTab === 'about' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-500 hover:text-blue-700'}`}
              >
                عن المدرب
              </button>
              <button
                onClick={() => setActiveTab('certs')}
                className={`py-4 px-4 md:px-6 text-center font-medium text-sm md:text-base whitespace-nowrap ${activeTab === 'certs' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-500 hover:text-blue-700'}`}
              >
                الشهادات والخبرات
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`py-4 px-4 md:px-6 text-center font-medium text-sm md:text-base whitespace-nowrap ${activeTab === 'philosophy' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-500 hover:text-blue-700'}`}
              >
                فلسفة التدريب
              </button>
            </nav>
          </div>
          
          <div className="p-4 md:p-8">
            {activeTab === 'about' && (
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">خبرتي في مجال التدريب</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  بدأت رحلتي في مجال اللياقة البدنية منذ أكثر من 10 سنوات، حيث عملت مع أكثر من 500 عميل ساعدتهم على تحقيق أهدافهم في إنقاص الوزن وبناء العضلات وزيادة اللياقة العامة. أعمل حاليًا كمدرب شخصي معتمد واخصائي تغذية رياضية.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  منهجي في التدريب يعتمد على فهم احتياجات كل عميل وظروفه الخاصة، ثم تصميم برنامج متكامل يشمل التمارين الرياضية والتغذية المناسبة، مع المتابعة المستمرة والتعديل على البرنامج حسب التقدم المحرز.
                </p>
              </div>
            )}
            
            {activeTab === 'certs' && (
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">الشهادات والخبرات</h3>
                <ul className="space-y-4">
                  {coachData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm md:text-base">{cert}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-md md:text-lg font-bold text-gray-800 mt-6 mb-4">خبرات عملية</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm md:text-base">
                  <li>مدرب لياقة بدنية في نادي الرياض الصحي (2015-2020)</li>
                  <li>أخصائي تغذية رياضية في مركز الملك فهد للرياضة (2020-2022)</li>
                  <li>مدرب شخصي مستقل (2022-حتى الآن)</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'philosophy' && (
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">فلسفتي في التدريب</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{coachData.philosophy}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
                    <div className="bg-blue-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">تمارين مخصصة</h4>
                    <p className="text-gray-600 text-xs md:text-sm">تصميم برامج تدريبية تناسب احتياجاتك وأهدافك وقدراتك البدنية</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 md:p-6 rounded-xl">
                    <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">تغذية متوازنة</h4>
                    <p className="text-gray-600 text-xs md:text-sm">خطط غذائية صحية تدعم أهدافك التدريبية وتناسب ذوقك الغذائي</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 md:p-6 rounded-xl">
                    <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">دعم مستمر</h4>
                    <p className="text-gray-600 text-xs md:text-sm">متابعة دورية وتعديل البرامج حسب تقدمك وتحفيزك للاستمرارية</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* دعوة للعمل */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl shadow-xl p-6 md:p-8 text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-4">هل أنت مستعد لبدء رحلتك نحو لياقة أفضل؟</h3>
          <p className="mb-6 max-w-2xl mx-auto text-sm md:text-base">انضم إلى برنامج التدريب الشخصي اليوم وابدأ رحلة تحولك الصحية والجسدية بإشراف مباشر من مدربك الشخصي</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 space-x-reverse">
            <button className="bg-white text-blue-800 px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300 text-sm md:text-base">
              احجز استشارة مجانية
            </button>
            <button className="border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300 text-sm md:text-base">
              تصفح البرامج
            </button>
          </div>
        </section>
      </main>

      {/* الفوتر */}
    <Footer />
    </div>
  );
};

export default AboutCoach;