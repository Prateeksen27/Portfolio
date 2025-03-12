import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send('service_d3wptah', 'template_0c9l0lc', {
                from_name: form.name,
                to_name: "Suprateek",
                from_email: form.email,
                to_email: "suprateeksen62@gmail.com",
                message: form.message,
            },'3_G6Sh1CTOjCg-ETj');

            setLoading(false);
            setForm({ name: "", email: "", message: "" });

            toast.success('Message sent successfully!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: 'dark',
            });

        } catch (error) {
            setLoading(false);
            console.error("Email send error:", error);

            toast.error('Failed to send message. Try again!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: 'dark',
            });
        }
    };

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="" className="absolute inset-0 min-h-screen hidden sm:block" />
                <div className="contact-container my-10 mt-10">
                    <h3 className="head-text mt-10">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        I am currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder="Enter your name"
                            />
                        </label>

                        <label htmlFor="email" className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder="Enter your Email"
                            />
                        </label>

                        <label htmlFor="message" className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder="Hi, I'm interested in..."
                                rows={4}
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send"}
                            
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
