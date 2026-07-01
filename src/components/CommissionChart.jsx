import React, { useEffect, useRef, useState } from 'react';

export default function CommissionChart() {
  const chartRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); // Reset animation when out of view, so it can re-animate
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <section className="chart-section section-padding">
      <div className="container">
        <div className="chart-grid">
          <div className="chart-visual" ref={chartRef}>
            {/* Bar 1 */}
            <div className="chart-bar-container">
              <div className="chart-bar-label">
                <span>Bazar Dellalları (Broker)</span>
                <span className="percent">15%</span>
              </div>
              <div className="chart-bar-wrapper">
                <div 
                  className="chart-bar broker-bar" 
                  style={{ width: animate ? '15%' : '0%' }}
                ></div>
              </div>
            </div>
            
            {/* Bar 2 */}
            <div className="chart-bar-container">
              <div className="chart-bar-label">
                <span>Arnaulı Ofis Brokerligi</span>
                <span class="percent">10%</span>
              </div>
              <div className="chart-bar-wrapper">
                <div 
                  className="chart-bar office-bar" 
                  style={{ width: animate ? '10%' : '0%' }}
                ></div>
              </div>
            </div>
            
            {/* Bar 3 */}
            <div className="chart-bar-container">
              <div className="chart-bar-label">
                <span>AgroIjara.uz Saytı</span>
                <span className="percent">4%</span>
              </div>
              <div className="chart-bar-wrapper">
                <div 
                  className="chart-bar agro-bar" 
                  style={{ width: animate ? '4%' : '0%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="chart-content">
            <h2>Ortasha Dellallıq Komissiyası (%)</h2>
            <p>Komissiyalardıń tómenligi esabınan AgroIjara.uz saytı eki tárepke de qosımsha tabıstı saqlap qalıwǵa hám tezirek til tabısıwǵa imkaniyat beredi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
