import { ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section className="bg-gray-100 py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
                    <p className="text-gray-600 mb-8">Let's discuss your vision and create something extraordinary together.</p> 
                    <form className="flex flex-col gap-4" >
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <input type="text" placeholder="Name" required className="form-input bg-white flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black-500" />
                        <input type="tel" placeholder="Phone Number" required className="form-input bg-white flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black-500" />
                        <input type="email" placeholder="Email" required className="form-input bg-white flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black-500" />
                        <textarea placeholder="Message" rows={5} required className="form-textarea rounded-2xl bg-white flex-1 px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-black-500"></textarea>
                        <button to={"/"} className="contact-button ">
                            <p className='inline-block'>Get in Touch</p> 
                            <ArrowRight className="w-5 h-5 inline-block" />
                        </button>
                    </form>                   
                </div>
            </section>
        </>
    );
};
export default Contact;