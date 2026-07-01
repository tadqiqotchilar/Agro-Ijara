import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map HTML IDs to form fields
    const fieldMap = {
      'form-name': 'name',
      'form-phone': 'phone',
      'form-message': 'message'
    };
    
    setFormData(prev => ({
      ...prev,
      [fieldMap[id]]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setSuccessMessageVisible(true);
      setFormData({ name: '', phone: '', message: '' });
    }, 1200);
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setSuccessMessageVisible(false);
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" class="contact-section section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <h3>Sorawlar bar ma?</h3>
              <p>AgroIjara.uz – awıl xojalığı texnikasın arendaǵa beriwdegi zamanagóy hám eń ańsat onlayn sheshim!</p>
            </div>
            <ul className="contact-details">
              <li>
                <i className="fa-solid fa-globe"></i>
                <a href="https://www.AgroIjara.uz" target="_blank" rel="noopener noreferrer">www.AgroIjara.uz</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:startup@agroijara.uz">startup@agroijara.uz</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+998901234567">+998 90 123 45 67</a>
              </li>
            </ul>
          </div>
          <div className="contact-form-wrapper">
            <h3>Bizge jazıp qaldırıń</h3>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name">Atıńız</label>
                <input 
                  type="text" 
                  id="form-name" 
                  placeholder="Atıńızdı kiritiń" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-phone">Telefon nomerińiz</label>
                <input 
                  type="tel" 
                  id="form-phone" 
                  placeholder="+998 90 123 45 67" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Xabar</label>
                <textarea 
                  id="form-message" 
                  placeholder="Xabarıńızdı kiritiń..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: '8px' }}></i> 
                    Jiberilmekte...
                  </>
                ) : 'Xabar jiberiw'}
              </button>
              
              {status === 'success' && successMessageVisible && (
                <div className="form-message success" style={{ opacity: 1, transition: 'opacity 0.5s ease' }}>
                  Xabarıńız tabıslı jiberildi! Tez arada siz benen baylanısamız.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
