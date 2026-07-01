import React, { useState, useEffect } from 'react';

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;
  const [animateChart, setAnimateChart] = useState(false);

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Slide Specific Animations (e.g. Chart on Slide 8)
  useEffect(() => {
    if (currentSlide === 8) {
      // Trigger animation after slide transitions in
      const timer = setTimeout(() => setAnimateChart(true), 300);
      return () => clearTimeout(timer);
    } else {
      setAnimateChart(false);
    }
  }, [currentSlide]);

  const goNext = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  const goPrev = () => setCurrentSlide(prev => Math.max(prev - 1, 1));

  // Helper to determine slide CSS class
  const getSlideClass = (slideNum) => {
    let base = 'slide';
    // Mark as dark slide if 1, 2 or 10
    if (slideNum === 1 || slideNum === 2 || slideNum === 10) {
      base += ' dark-slide';
    }
    
    if (slideNum === currentSlide) {
      return `${base} active`;
    } else if (slideNum < currentSlide) {
      return `${base} prev`;
    }
    return base;
  };

  return (
    <div id="presentation-layout" style={{ display: 'flex' }}>
      <div className="slide-frame">
        
        {/* Slide 1 */}
        <div className={getSlideClass(1)} data-slide="1">
          <h1>AgroIjara.uz Platformması</h1>
          <p>Traktorlar hám awıl xojalığı texnikaların ańsat arendaǵa beriw hám bron qılıw saytınıń startap modeli</p>
          <div style={{ fontSize: '4rem', color: 'var(--color-accent)', marginTop: '20px' }}>
            <i className="fa-solid fa-tractor"></i>
          </div>
        </div>

        {/* Slide 2 */}
        <div className={getSlideClass(2)} data-slide="2">
          <span className="timeline-month" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)', fontSize: '1.1rem', padding: '6px 18px', marginBottom: '24px' }}>
            BÓLIM 01
          </span>
          <h2>01. Mashqala hám Sheshim</h2>
          <h3>Házirgi awıl xojalığı texnikasın arendaǵa alıwdaǵı mashqalalar hám biz usınıp atırǵan sanlı platforma</h3>
        </div>

        {/* Slide 3 */}
        <div className={getSlideClass(3)} data-slide="3">
          <div className="slide-header">
            <h2>Bazardagı Tiykarǵı Mashqalalar</h2>
          </div>
          <div className="slide-body">
            <div className="slide-body-split">
              <div className="slide-card" style={{ borderLeft: '5px solid var(--color-primary)' }}>
                <h3 style={{ color: 'var(--color-primary)' }}>
                  <i className="fa-solid fa-wheat-awn" style={{ marginRight: '8px' }}></i> Fermerlerdiń Máshqalaları
                </h3>
                <p>Máwsim qızǵan waqıtta traktor tabıw qıyın. Bahalar óte qımbat hám dástúriy dellallar (posredniklar) úlken ústeme haqı qosıp tabıp beredi. Sonıń menen birge, texnikanıń sapası hám kelesi kúni kelisiwine hesh kim kepillik bermeydi.</p>
              </div>
              <div className="slide-card" style={{ borderLeft: '5px solid var(--color-accent)' }}>
                <h3 style={{ color: 'var(--color-accent-dark)' }}>
                  <i className="fa-solid fa-screwdriver-wrench" style={{ marginRight: '8px' }}></i> Texnika iyeleriniń Máshqalaları
                </h3>
                <p>Qımbat bahalı traktorlar máwsimnen basqa waqıtlarda bos turadı. Traktorshılar kóbinese qarıydarlardı tek ǵana tanısları arqalı tabadı, bul bolsa texnikanıń ápiwayı toqtap qalıwına hám dáramattıń azayıwına alıp keledi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className={getSlideClass(4)} data-slide="4">
          <div className="slide-header">
            <h2>Sheshim: AgroIjara.uz Saytı</h2>
          </div>
          <div className="slide-body">
            <div className="slide-body-split">
              <div className="slide-text-content">
                <p><strong>AgroIjara.uz</strong> – bul traktor iyelerin hám olardı arendaǵa alıwshı fermerlerdi tikkeley baylanıstıratuǵın onlayn marketplace saytı.</p>
                <p>Sayt arqalı fermerler ózlerine jaqın aymaqtaǵı bos traktorlardı, olardıń bahaların hám kórsetetuǵin xızmetlerin salıstırıp tańlay aladı.</p>
                <p>Bul dástúriy dellallardı ortadan alıp taslaydı hám hár eki tárep ushın qolaylı finanslıq jaǵday jaratadı.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="/assets/solution-app.png" alt="Mobile App UI Mockup" style={{ height: '280px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className={getSlideClass(5)} data-slide="5">
          <div className="slide-header">
            <h2>Sayttıń Tiykarǵı imkaniyatları</h2>
          </div>
          <div className="slide-body">
            <div className="slide-body-three">
              <div className="slide-card" style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ width: '50px', height: '50px', fontSize: '1.25rem', marginBottom: '12px' }}><i className="fa-solid fa-magnifying-glass-location"></i></div>
                <h3>Aqıllı Qıdıruv</h3>
                <p>Fermerler óz kartasınan geolokaciya arqalı jaqındaǵı bar bolǵan traktor hám kombaynlardı dárriw tabadı.</p>
              </div>
              <div className="slide-card" style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ width: '50px', height: '50px', fontSize: '1.25rem', marginBottom: '12px' }}><i className="fa-solid fa-shield-halved"></i></div>
                <h3>Qáwepsiz Kelisim</h3>
                <p>Eki tárep arasında onlayn shártnamalar dúziledi hám buyırtpa tamamlanǵansha aqshalar kepillikte turadı.</p>
              </div>
              <div className="slide-card" style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ width: '50px', height: '50px', fontSize: '1.25rem', marginBottom: '12px' }}><i className="fa-solid fa-star"></i></div>
                <h3>Reyting hám Pikrler</h3>
                <p>Traktorshılardıń sapası, ádep-iybalılığı hám tezligine qaray fermerler bahalaydı hám basqalarǵa kórsetedi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 6 */}
        <div className={getSlideClass(6)} data-slide="6">
          <div className="slide-header">
            <h2>Múmkinshilikler Bazarı</h2>
          </div>
          <div className="slide-body">
            <div className="slide-stat-layout">
              <div className="slide-stat-box">
                <div className="slide-stat-number">73%</div>
                <div className="slide-stat-label">Kishi fermerlik xojalıqları arendaǵa mútaj</div>
              </div>
              <div className="slide-market-desc">
                <h3>Úlken Potenzial hám Talap</h3>
                <p>Ózbekstandan hám Qaraqalpaqstanda jańadan ashılıp atırǵan kishi fermer xojalıqlarınıń kópshiliginde jeke qımbat bahalı traktorlar joq.</p>
                <p>Olar egin egiw hám jer aydaw máwsiminde pútkeley sırtqı arendaǵa baylanıslı boladı. AgroIjara.uz bul joqarı talaptı birden-bir oraylasqan sanlı baza arqalı qanaatlandırıp bólisedi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 7 */}
        <div className={getSlideClass(7)} data-slide="7">
          <div className="slide-header">
            <h2>Dástúriy Arenda vs AgroIjara.uz</h2>
          </div>
          <div className="slide-body" style={{ display: 'block' }}>
            <div className="slide-table-wrapper">
              <table className="slide-table">
                <thead>
                  <tr>
                    <th>Kórsetkishler</th>
                    <th>Dástúriy dellallar arqalı</th>
                    <th>AgroIjara.uz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Traktor tabıw tezligi</strong></td>
                    <td>1 kúnnen 3 kúnge shekem</td>
                    <td>5-15 minut ishinde (onlayn)</td>
                  </tr>
                  <tr>
                    <td><strong>Ortaǵı dellallıq haqı</strong></td>
                    <td>Júdá joqarı (15% - 20% ke shekem)</td>
                    <td>Ápiwayı komissiya (3% - 5%)</td>
                  </tr>
                  <tr>
                    <td><strong>Kelisim kepilligi</strong></td>
                    <td>Tek ǵana awızeki (isni túsirmei ketiwi)</td>
                    <td>Yuridikalıq onlayn shártnama hám kepillik</td>
                  </tr>
                  <tr>
                    <td><strong>Texnikanı tańlaw</strong></td>
                    <td>Tek kórsetilgen bir-eki variant</td>
                    <td>Júzlegen traktor túrleri hám modeler</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Slide 8 */}
        <div className={getSlideClass(8)} data-slide="8">
          <div className="slide-header">
            <h2>Ortasha Dellallıq Komissiyası (%)</h2>
          </div>
          <div className="slide-body">
            <div className="slide-chart-layout">
              <div className="slide-chart-visual" id="slide-commission-chart">
                {/* Bar 1 */}
                <div className="chart-bar-container" style={{ marginBottom: '15px' }}>
                  <div className="chart-bar-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                    <span>Bazar Dellalları (Broker)</span>
                    <span className="percent">15%</span>
                  </div>
                  <div className="chart-bar-wrapper" style={{ height: '16px' }}>
                    <div 
                      className="chart-bar broker-bar" 
                      style={{ width: animateChart ? '15%' : '0%' }}
                    ></div>
                  </div>
                </div>
                {/* Bar 2 */}
                <div className="chart-bar-container" style={{ marginBottom: '15px' }}>
                  <div className="chart-bar-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                    <span>Arnaulı Ofis Brokerligi</span>
                    <span className="percent">10%</span>
                  </div>
                  <div className="chart-bar-wrapper" style={{ height: '16px' }}>
                    <div 
                      className="chart-bar office-bar" 
                      style={{ width: animateChart ? '10%' : '0%' }}
                    ></div>
                  </div>
                </div>
                {/* Bar 3 */}
                <div className="chart-bar-container">
                  <div className="chart-bar-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                    <span>AgroIjara.uz Saytı</span>
                    <span className="percent">4%</span>
                  </div>
                  <div className="chart-bar-wrapper" style={{ height: '16px' }}>
                    <div 
                      className="chart-bar agro-bar" 
                      style={{ width: animateChart ? '4%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="slide-chart-desc">
                <p>Komissiyalardıń tómenligi esabınan AgroIjara.uz saytı eki tárepke de qosımsha tabıstı saqlap qalıwǵa hám tezirek til tabısıwǵa imkaniyat beredi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 9 */}
        <div className={getSlideClass(9)} data-slide="9">
          <div className="slide-header">
            <h2>Sayttı Iske Túsiriw Basqıshları</h2>
          </div>
          <div className="slide-body">
            <div className="slide-timeline-container">
              <div className="slide-timeline-item">
                <div className="slide-timeline-dot"></div>
                <span className="slide-timeline-month">1-Ay</span>
                <h4>Plan hám Dizayn</h4>
                <p>Sayt prototipin islep shıǵıw hám traktor iyeleri menen dáslepki baylanıs.</p>
              </div>
              <div className="slide-timeline-item">
                <div className="slide-timeline-dot"></div>
                <span className="slide-timeline-month">2-Ay</span>
                <h4>Sayttı Islew</h4>
                <p>Web-kodlaw, geolokaciya, SMS, onlayn tólem bólizlerin integraciyalaw.</p>
              </div>
              <div className="slide-timeline-item">
                <div className="slide-timeline-dot"></div>
                <span className="slide-timeline-month">3-Ay</span>
                <h4>Sınap kóriw</h4>
                <p>Bir kishi aymaqta 30 traktor hám 50 fermer arasında test etiw.</p>
              </div>
              <div className="slide-timeline-item">
                <div className="slide-timeline-dot"></div>
                <span className="slide-timeline-month">4-Ay</span>
                <h4>Tolıq Launch</h4>
                <p>Platformanı Qaraqalpaqstan hám basqa aymaqlarǵa keńeytiw, marketing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 10 */}
        <div className={getSlideClass(10)} data-slide="10">
          <h2>Sorawlar bar ma?</h2>
          <p>AgroIjara.uz – awıl xojalığı texnikasın arendaǵa beriwdegi zamanagóy hám eń ańsat onlayn sheshim!</p>
          <div className="slide-contact-info">
            <span><i className="fa-solid fa-globe"></i> www.AgroIjara.uz</span>
            <span><i className="fa-solid fa-envelope"></i> startup@agroijara.uz</span>
            <span><i className="fa-solid fa-phone"></i> +998 90 123 45 67</span>
          </div>
        </div>

      </div>

      {/* Slide Navigation controls */}
      <div className="presentation-controls">
        <button 
          className="slide-nav-btn" 
          id="prev-slide-btn" 
          disabled={currentSlide === 1}
          onClick={goPrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="slide-indicator" id="slide-indicator-text">
          Slayd: <span id="current-slide-num">{currentSlide}</span> / {totalSlides}
        </div>
        <button 
          className="slide-nav-btn" 
          id="next-slide-btn" 
          disabled={currentSlide === totalSlides}
          onClick={goNext}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
