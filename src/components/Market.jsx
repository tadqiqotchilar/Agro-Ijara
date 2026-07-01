import React, { useState, useEffect, useRef } from 'react';

export default function Market() {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const end = 73;
          const duration = 1500; // ms
          const stepTime = Math.abs(Math.floor(duration / end));
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, stepTime);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="market" className="market-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="market-grid">
          <div className="market-stat">
            <div className="stat-number">{count}%</div>
            <div className="stat-label">Kishi fermerlik xojalıqları arendaǵa mútaj</div>
          </div>
          <div className="market-content">
            <h3>Úlken Potenzial hám Talap</h3>
            <p>Ózbekstandan hám Qaraqalpaqstanda jańadan ashılıp atırǵan kishi fermer xojalıqlarınıń kópshiliginde jeke qımbat bahalı traktorlar joq.</p>
            <p>Olar egin egiw hám jer aydaw máwsiminde pútkeley sırtqı arendaǵa baylanıslı boladı. AgroIjara.uz bul joqarı talaptı birden-bir oraylasqan sanlı baza arqalı qanaatlandırıp bólisedi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
