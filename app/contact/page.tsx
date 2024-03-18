import React from 'react';
import './page.css'; // Assuming you have a CSS file for page styling

const Page = () => {
  return (
    <section className="contact-info">
      <h2>Contact Information</h2>
      <div className="contact-item">
        <h3>Customer Service</h3>
        <p>Email: <a href="mailto:marian.voaides@yahoo.com">marian.voaides@yahoo.com</a></p>
        <p>Phone: +4 0771-356-736</p>
      </div>
      <div className="contact-item">
        <h3>Sales</h3>
        <p>Email: <a href="mailto:marian.voaides@yahoo.com">marian.voaides@yahoo.com</a></p>
        <p>Phone: +4 0771-356-736</p>
      </div>
      <div className="contact-item">
        <h3>Technical Support</h3>
        <p>Email: <a href="mailto:marian.voaides@yahoo.com">marian.voaides@yahoo.com</a></p>
        <p>Phone: +4 0771-356-736</p>
      </div>
    </section>
  );
};

export default Page;
