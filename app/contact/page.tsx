import React from 'react';

function Contact() {
    return (
        <div className='bg-gradient'>
            <h2 className="contact-heading">Contact Us</h2>
            <form className="form-container">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input-field"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input-field"
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Your Message"
                        className="textarea-field"
                        rows={6}
                    />
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
