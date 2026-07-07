import React, { useState } from 'react';

const faqs = [
  {
    question: 'AgroIjara.uz nima uchun kerak?',
    answer:
      'Bu platforma fermerlar va traktor egalarini tez, xavfsiz va arzon tarzda bog‘laydi. Bunda vosita topish va bron qilish jarayoni bir necha daqiqada yakunlanadi.',
  },
  {
    question: 'Platforma qanday ishlaydi?',
    answer:
      'Fermerlar mavjud texnikani ko‘rish, narx va joylashuvini taqqoslash, so‘ngra onlayn kelishuv asosida bron qilish imkoniyatiga ega bo‘lishadi.',
  },
  {
    question: 'Qaysi hududlar uchun mos?',
    answer:
      'Asosiy e’tibor qishloq xo‘jaligi faoliyati rivojlangan hududlarga qaratilgan, biroq platforma istalgan viloyat va tumanga moslashtirilishi mumkin.',
  },
  {
    question: 'Komissiya necha foiz?',
    answer:
      'Platforma orqali tranzaktsiyalar uchun komissiya ancha past bo‘lib, bu ham fermerlar, ham texnika egalarining manfaatiga mos keladi.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Tez-tez so‘raladigan savollar</h2>
          <p>Platforma qanday ishlashi va uning afzalliklari haqida eng ko‘p qiziqtiruvchi savollar.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleItem(index)} type="button">
                  <span>{item.question}</span>
                  <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
