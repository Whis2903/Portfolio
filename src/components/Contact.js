import React from 'react';
import ContactForm from './ContactForm'; // Import the ContactForm component
import footer from '../assets/img/footer-bg.png';

function Contact() {
  return (
    <div className="container-fluid contact-page" style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <div className="row">
        <div className="col-md-5 bg #000 text-white p-4 rounded-end" style={{ borderRight: '2px solid #fff' }}>
          <div className="text-center">
            <h1 className="mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '2.5rem', letterSpacing: '2px', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Let's Connect</h1>
            <p className="mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Feel free to reach out for any inquiries or feedback.</p>
          </div>

          <div className="text-left">
            <h2 className="mb-3" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.8rem', letterSpacing: '1px', color: '#fff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>Contact Information:</h2>
            <p className="mb-2" style={{ fontSize: '1.2rem', color: '#ccc', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Email: <a href="mailto:vishalmadridrox@example.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px dashed #fff' }}>vishalmadridrox@example.com</a></p>
            <p style={{ fontSize: '1.2rem', color: '#ccc', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Phone: <span style={{ color: '#fff', borderBottom: '1px dashed #fff' }}>9818793755</span></p>
          </div>
        </div>
        <div className="col-md-7 bg #000 p-4 rounded-start" style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '20px', paddingBottom: '20px' }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
