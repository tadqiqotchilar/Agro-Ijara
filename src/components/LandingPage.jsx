import React from 'react';
import Market from './Market';
import CommissionChart from './CommissionChart';
import Contact from './Contact';

export default function LandingPage({ onLearnMoreClick, onContactClick }) {
  return (
    <div id="landing-layout">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <i className="fa-solid fa-seedling"></i>
                <span>Agrotex Startup Proekti</span>
              </div>
              <h1>AgroIjara.uz <br /><span>Platformması</span></h1>
              <p>Traktorlar hám awıl xojalığı texnikaların ańsat arendaǵa beriw hám onlayn bron qılıw saytınıń zamanagóy startap modeli.</p>
              <div className="hero-buttons">
                <button onClick={onLearnMoreClick} className="btn btn-primary">Platformma haqqında</button>
                <button onClick={onContactClick} className="btn btn-accent">
                  <i className="fa-solid fa-phone"></i> Baylanıs
                </button>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-card">
                <img src="/assets/hero-tractor.png" alt="Tractor in a gold wheat field at sunset" />
                <div className="hero-image-overlay">
                  <i className="fa-solid fa-circle-check"></i>
                  <div>
                    <span>Xızmetler</span>
                    <strong>100% Kepillikli</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="problems-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Bazardagı Tiykarǵı Mashqalalar</h2>
            <p>Házirgi awıl xojalığı texnikasın arendaǵa alıwdaǵı hám beriwdegi qıyınshılıqlar</p>
          </div>
          <div className="problems-grid">
            {/* Farmers Problems */}
            <div className="problem-card farmers">
              <div class="problem-icon-wrapper">
                <i className="fa-solid fa-wheat-awn"></i>
              </div>
              <h3>Fermerlerdiń Máshqalaları</h3>
              <p>Máwsim qızǵan waqıtta traktor tabıw qıyın. Bahalar óte qımbat hám dástúriy dellallar (posredniklar) úlken ústeme haqı qosıp tabıp beredi. Sonıń menen birge, texnikanıń sapası hám kelesi kúni kelisiwine hesh kim kepillik bermeydi.</p>
            </div>
            {/* Owners Problems */}
            <div className="problem-card owners">
              <div className="problem-icon-wrapper">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <h3>Texnika iyeleriniń Máshqalaları</h3>
              <p>Qımbat bahalı traktorlar máwsimnen basqa waqıtlarda bos turadı. Traktorshılar kóbinese qarıydarlardı tek ǵana tanısları arqalı tabadı, bul bolsa texnikanıń ápiwayı toqtap qalıwına hám dáramattıń azayıwına alıp keledi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section section-padding">
        <div className="container">
          <div className="solution-grid">
            <div className="solution-image">
              <img src="/assets/solution-app.png" alt="AgroIjara Mobile Application Mockup" />
            </div>
            <div className="solution-content">
              <div className="hero-tag" style={{ background: 'rgba(44, 104, 73, 0.1)', color: 'var(--color-primary-light)', borderColor: 'rgba(44, 104, 73, 0.2)' }}>
                <i className="fa-solid fa-lightbulb"></i>
                <span>Bizniń Sheshimimiz</span>
              </div>
              <h2>Sheshim: AgroIjara.uz Saytı</h2>
              <p>AgroIjara.uz – bul traktor iyelerin hám olardı arendaǵa alıwshı fermerlerdi tikkeley baylanıstıratuǵın onlayn marketplace saytı.</p>
              <ul className="solution-list">
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Sayt arqalı fermerler ózlerine jaqın aymaqtaǵı bos traktorlardı, olardıń bahaların hám kórsetetuǵin xızmetlerin salıstırıp tańlay aladı.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Bul dástúriy dellallardı ortadan alıp taslaydı hám hár eki tárep ushın qolaylı finanslıq jaǵday jaratadı.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Sayttıń Tiykarǵı Imkaniyatları</h2>
            <p>Platformmamızdıń fermerler hám texnika iyelerine beretuǵın paydalı funktsiyaları</p>
          </div>
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-magnifying-glass-location"></i>
              </div>
              <h3>Aqıllı Qıdıruv</h3>
              <p>Fermerler óz kartasınan geolokaciya arqalı jaqındaǵı bar bolǵan traktor hám kombaynlardı dárriw tabadı.</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Qáwepsiz Kelisim</h3>
              <p>Eki tárep arasında onlayn shártnamalar dúziledi hám buyırtpa tamamlanǵansha aqshalar kepillikte turadı.</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-star"></i>
              </div>
              <h3>Reyting hám Pikrler</h3>
              <p>Traktorshılardıń sapası, ádep-iybalılığı hám tezligine qaray fermerler bahalaydı hám basqalarǵa kórsetedi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Potential Section */}
      <Market />

      {/* Comparison Table Section */}
      <section id="comparison" className="comparison-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Dástúriy Arenda vs AgroIjara.uz</h2>
            <p>Dástúriy dellallar hám bizniń platformmamızdıń tiykarǵı parametrler boyınsha salıstırılıwı</p>
          </div>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Kórsetkishler</th>
                  <th>Dástúriy dellallar arqalı</th>
                  <th>AgroIjara.uz platformasında</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Traktor tabıw tezligi</td>
                  <td>1 kúnnen 3 kúnge shekem</td>
                  <td>5-15 minut ishinde (onlayn)</td>
                </tr>
                <tr>
                  <td>Ortaǵı dellallıq haqı</td>
                  <td>Júdá joqarı (15% - 20% ke shekem)</td>
                  <td>Ápiwayı komissiya (3% - 5%)</td>
                </tr>
                <tr>
                  <td>Kelisim kepilligi</td>
                  <td>Tek ǵana awızeki (isni túsirmei ketiwi múmkin)</td>
                  <td>Yuridikalıq onlayn shártnama hám kepillik</td>
                </tr>
                <tr>
                  <td>Texnikanı tańlaw múmkinshiligi</td>
                  <td>Tek kórsetilgen bir-eki variant</td>
                  <td>Júzlegen traktor túrleri hám modeler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commission Chart Section */}
      <CommissionChart />

      {/* Timeline/Roadmap Section */}
      <section id="timeline" className="timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Sayttı Iske Túsiriw Basqıshları</h2>
            <p>Loyihaimizdiń rawajlanıw rejesi hám tiykarǵı muddetleri</p>
          </div>
          <div className="timeline">
            {/* Item 1 */}
            <div className="timeline-item left">
              <div className="timeline-content">
                <span className="timeline-month">1-Ay</span>
                <h3>Plan hám Dizayn</h3>
                <p>Sayt prototipin islep shıǵıw hám awıllardaǵı iri traktor iyeleri menen dáslepki baylanıs.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="timeline-item right">
              <div className="timeline-content">
                <span className="timeline-month">2-Ay</span>
                <h3>Sayttı Islew</h3>
                <p>Web-kodlaw, geolokaciya sistemaları, SMS tastıyıqlaw hám onlayn tólem bólizlerin integraciyalaw.</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="timeline-item left">
              <div className="timeline-content">
                <span className="timeline-month">3-Ay</span>
                <h3>Sınap kóriw (Beta)</h3>
                <p>Bir kishi aymaqta (mısalı, Kegeyli yamasa Shimbayda) 30 traktor hám 50 fermer arasında test etiw.</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="timeline-item right">
              <div className="timeline-content">
                <span className="timeline-month">4-Ay</span>
                <h3>Tolıq Launch</h3>
                <p>Platformanı Qaraqalpaqstan hám tiykarǵı agrosenat kóp aymaqlarǵa keńeytiw, reklama hám marketing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="logo">
            <i className="fa-solid fa-tractor"></i> AgroIjara.uz
          </div>
          <p>&copy; 2026 AgroIjara.uz. Barlıq huqıqlar qorǵalǵan.</p>
        </div>
      </footer>
    </div>
  );
}
