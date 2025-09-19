import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">عن التطبيق</h3>
              <p className="text-gray-300">
                تطبيق CoachPro هو منصة متكاملة للتدريب الشخصي والتغذية الصحية، مصمم خصيصاً ليتناسب مع احتياجات المستخدمين في المملكة العربية السعودية.
              </p>
            </div>
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">الرئيسية</a></li>
                <li><a href="AboutCoach" className="text-gray-300 hover:text-white transition duration-300">عن المدرب</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">البرامج</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">المتجر</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">خطط التغذية</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">وسائل التواصل</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">WhatsApp</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Email</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">طرق الدفع</h3>
              <p className="text-gray-300">
                نحن نقبل جميع طرق الدفع المحلية في المملكة العربية السعودية including Mada, Apple Pay, and credit cards.
              </p>
            </div>
          </div>
          <div className="copyright border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-300">© 2025 CoachPro. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
