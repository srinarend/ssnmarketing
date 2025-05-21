import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
      {/* Hero Section */}
      <header className="w-full py-16 px-4 flex flex-col items-center text-center bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">SSN Marketing</h1>
        <p className="text-xl sm:text-2xl mb-6 max-w-2xl mx-auto font-medium">Empowering Your Business with Digital Marketing, Web Development, and Branding Solutions</p>
        <a href="#contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-50 transition">Request a Free Consultation</a>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">💡</span>
            <h3 className="font-semibold text-lg mb-2">Digital Marketing</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Grow your business with SEO, SEM, social media, and email marketing strategies tailored to your goals.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">🖥️</span>
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Custom websites and web applications designed for performance, security, and user experience.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">🎨</span>
            <h3 className="font-semibold text-lg mb-2">Branding</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Build a memorable brand identity with logo design, messaging, and visual storytelling.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">📈</span>
            <h3 className="font-semibold text-lg mb-2">Analytics & Strategy</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Data-driven insights and marketing strategies to maximize your ROI and business growth.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">📱</span>
            <h3 className="font-semibold text-lg mb-2">Social Media Management</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Engage your audience and grow your brand with expert social media management and content creation.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">🛒</span>
            <h3 className="font-semibold text-lg mb-2">E-Commerce Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Launch and scale your online store with secure, user-friendly e-commerce platforms.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Us</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">SSN Marketing is a full-service digital agency dedicated to helping businesses thrive in the digital world. Our team of experts combines creativity, technology, and data-driven strategies to deliver measurable results. Whether you're a startup or an established brand, we partner with you to achieve your business goals.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-2xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Contact Us</h2>
        <div className="mb-8 text-center text-lg text-gray-700 dark:text-gray-300">
          <p>For marketing inquiries, email us at <a href="mailto:marketing@ssnmarketing.com" className="text-blue-700 underline hover:text-blue-900">marketing@ssnmarketing.com</a></p>
          <div className="mt-6">
            <strong className="block text-xl text-gray-800 dark:text-white mb-1">SSN MARKETING</strong>
            <address className="not-italic text-gray-700 dark:text-gray-300">
              Room No 30, A.R. Tower mansion,<br />
              Kulalar Kalyana Mandapam Street End,<br />
              Lakshmi Nagar, Tirupur - 641602.
            </address>
          </div>
        </div>
        <form className="bg-white dark:bg-gray-900 rounded-lg shadow p-8 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <textarea placeholder="How can we help you?" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} required />
          <button type="submit" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm mt-auto">
        &copy; {new Date().getFullYear()} SSN Marketing. All rights reserved.
      </footer>
    </div>
  );
}
