const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white mt-16">
            {/* Top Footer */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-black mb-4">🎆 Ready to Order?</h2>
                        <p className="text-xl text-emerald-100 mb-6">Join thousands of satisfied customers and get your favorite food delivered!</p>
                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                📱 Download App
                            </button>
                            <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                🛍️ Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl">🍽️</div>
                        <h3 className="text-2xl font-black text-emerald-400">FusionBowl</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Your favorite restaurants, delivered to your doorstep. Fresh, fast, and delicious - that's our promise to you.
                    </p>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors duration-300">
                            👦
                        </div>
                        <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors duration-300">
                            📷
                        </div>
                        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors duration-300">
                            🐦
                        </div>
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors duration-300">
                            📞
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-emerald-400">🔗 Quick Links</h4>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">🏠 Home</a>
                        <a href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">🛍️ Order Food</a>
                        <a href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">🛒 Grocery</a>
                        <a href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">ℹ️ About Us</a>
                        <a href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">📞 Contact</a>
                    </div>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-emerald-400">🎆 Our Services</h4>
                    <div className="space-y-2">
                        <div className="text-gray-300">🚚 Fast Delivery</div>
                        <div className="text-gray-300">🔥 Hot & Fresh Food</div>
                        <div className="text-gray-300">💳 Secure Payment</div>
                        <div className="text-gray-300">📞 24/7 Support</div>
                        <div className="text-gray-300">🎁 Special Offers</div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-emerald-400">📞 Get in Touch</h4>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-emerald-400">📍</span>
                            <span>123 Food Street, Kolkata, WB</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-emerald-400">📞</span>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-emerald-400">✉️</span>
                            <span>support@fusionbowl.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-emerald-400">⏰</span>
                            <span>24/7 Available</span>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-emerald-800 to-green-900 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-4">📧 Stay Updated!</h3>
            <p className="text-emerald-100 mb-6">Subscribe to get special offers, free delivery updates, and first access to new restaurants!</p>
            <div className="flex justify-center gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="📧 Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-emerald-300 focus:border-emerald-400 focus:outline-none bg-white text-gray-800"
                />
                <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg">
                    Subscribe
                </button>
            </div>
        </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-black py-6">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 FusionBowl. All rights reserved. Made with ❤️ for food lovers.
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">📜 Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">📄 Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">🍪 Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;