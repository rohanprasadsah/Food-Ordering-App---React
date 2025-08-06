const Contact = () => {
    return (
        <div className="text-center m-4 p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-6 px-8 rounded-3xl shadow-2xl mb-10">
                    <h1 className="text-5xl font-black tracking-wider drop-shadow-lg">📞 Contact Us</h1>
                    <p className="text-emerald-100 mt-2 text-lg font-medium">We'd love to hear from you!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="group rounded-3xl border-gray-200 border-2 shadow-2xl hover:shadow-3xl px-8 py-10 bg-white transition-all duration-500 hover:border-emerald-300 hover:-translate-y-1">
                        <div className="text-4xl mb-4">📍</div>
                        <h3 className="text-xl font-black text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Visit Us</h3>
                        <p className="text-sm font-medium text-gray-600 leading-relaxed">123 Food Street, Kolkata<br/>West Bengal, India<br/>PIN: 700001</p>
                    </div>

                    <div className="group rounded-3xl border-gray-200 border-2 shadow-2xl hover:shadow-3xl px-8 py-10 bg-white transition-all duration-500 hover:border-emerald-300 hover:-translate-y-1">
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="text-xl font-black text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Call Us</h3>
                        <p className="text-sm font-medium text-gray-600 leading-relaxed">Customer Service:<br/>+91 98765 43210<br/>Available 24/7</p>
                    </div>

                    <div className="group rounded-3xl border-gray-200 border-2 shadow-2xl hover:shadow-3xl px-8 py-10 bg-white transition-all duration-500 hover:border-emerald-300 hover:-translate-y-1">
                        <div className="text-4xl mb-4">✉️</div>
                        <h3 className="text-xl font-black text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Email Us</h3>
                        <p className="text-sm font-medium text-gray-600 leading-relaxed">support@fusionbowl.com<br/>orders@fusionbowl.com<br/>We reply within 2 hours</p>
                    </div>
                </div>

                <div className="rounded-3xl border-gray-200 border-2 shadow-2xl w-full max-w-4xl px-8 py-10 mx-auto my-12 bg-white">
                    <h2 className="text-3xl font-black text-gray-800 mb-8">📝 Send us a Message</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <textarea 
                                placeholder="Your Message" 
                                rows="5"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors duration-200 resize-none"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border-emerald-200 border-2 shadow-2xl w-full max-w-2xl px-8 py-8 mx-auto my-12 bg-gradient-to-br from-emerald-50 via-white to-green-50">
                    <div className="font-bold text-center space-y-3">
                        <div className="text-3xl mb-2">⏰</div>
                        <h2 className="text-2xl text-gray-800 font-black tracking-wide">Business Hours</h2>
                        <p className="text-gray-600 font-medium">Monday - Sunday: 9:00 AM - 11:00 PM<br/>We're here to serve you every day!</p>
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-12">
                    <button className="px-12 py-4 shadow-2xl bg-white hover:bg-emerald-50 text-emerald-600 hover:text-emerald-700 font-black text-lg rounded-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 border-2 border-emerald-200 hover:border-emerald-400">
                        📧 Send Message</button>
                    <button className="px-12 py-4 shadow-2xl bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-black text-lg rounded-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 border-2 border-blue-200 hover:border-blue-400">
                        🗺 Find Location</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
