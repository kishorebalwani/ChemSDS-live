function PricingSection() {
  const ref = useReveal();
  return (
    <section className="section" id="pricing" style={{ background: '#f8fafc', paddingTop: '64px', paddingBottom: '64px', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        <div className="section-head reveal" ref={ref} style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div>
            <div className="eyebrow" style={{ color: '#059669' }}>Transparent Rates</div>
            <h2 className="section-heading">GHS SDS Authoring &amp; Compliance Pricing</h2>
          </div>
          <p className="section-copy" style={{ margin: '0 auto' }}>
            Fast, customs-cleared 16-section Safety Data Sheets prepared for Indian manufacturers, merchant traders, and global chemical exporters.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'stretch', marginBottom: '36px' }}>
          {/* Card 1 */}
          <div className="reveal" ref={useReveal()} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>Standard GHS SDS</h3>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '18px', minHeight: '36px' }}>Single Substances &amp; Simple Formulations</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>From</span>
                <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#111827' }}>₹4,499</span>
                <span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: 600 }}>/ $55</span>
              </div>
              <div style={{ display: 'inline-block', background: 'rgba(5,150,105,0.08)', color: '#059669', fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', marginBottom: '22px' }}>
                ⚡ 24–48 Hours Turnaround
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '0.86rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> 16-Section GHS Rev. 10 Structure</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> US OSHA HazCom 2012 &amp; EU CLP</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Essential Oils &amp; Single Chemicals</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Official GHS Hazard Pictograms</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Export-ready PDF Delivery</li>
              </ul>
            </div>
            <a href="#contact" className="button-outline" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>Order Single SDS</a>
          </div>

          {/* Card 2 (Featured) */}
          <div className="reveal" ref={useReveal()} style={{ background: '#ffffff', border: '2px solid #059669', borderRadius: '16px', padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', boxShadow: '0 8px 24px rgba(5,150,105,0.12)' }}>
            <span style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#059669', color: '#ffffff', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em', padding: '3px 14px', borderRadius: '100px' }}>
              MOST POPULAR
            </span>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>Chemical Mixtures &amp; Revisions</h3>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '18px', minHeight: '36px' }}>Multi-Component Formulations &amp; Blends</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>From</span>
                <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#111827' }}>₹8,499</span>
                <span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: 600 }}>/ $105</span>
              </div>
              <div style={{ display: 'inline-block', background: 'rgba(5,150,105,0.08)', color: '#059669', fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', marginBottom: '22px' }}>
                ⚡ 48 Hours Turnaround
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '0.86rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Multi-Component Hazard Classification</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Legacy MSDS → Modern GHS SDS Conversion</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Full GHS Label &amp; Precautionary Rules</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Transport Classification (UN/IATA/IMDG)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Free Revisions within 14 Days</li>
              </ul>
            </div>
            <a href="#contact" className="button-mint" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>Submit Formulation</a>
          </div>

          {/* Card 3 */}
          <div className="reveal" ref={useReveal()} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>Multi-Market &amp; Complex</h3>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '18px', minHeight: '36px' }}>Global Jurisdictions &amp; Amazon Hazmat</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '10px' }}>
                <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#111827' }}>Custom</span>
                <span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: 600 }}>Quotation</span>
              </div>
              <div style={{ display: 'inline-block', background: '#f3f4f6', color: '#4b5563', fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', marginBottom: '22px' }}>
                ⏱ Scope-based Delivery
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '0.86rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> US, EU (REACH), Middle East &amp; APAC</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Amazon FBA Dangerous Goods Clearance</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Country-Specific Language Adaptation</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> Dedicated Regulatory Specialist Support</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#059669" /> High-Priority Authoring Pipeline</li>
              </ul>
            </div>
            <a href="#contact" className="button-outline" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>Get Custom Quote</a>
          </div>
        </div>

        {/* NDA & Trust Box - Clean, High Contrast & Always 100% Opaque */}
        <div style={{ background: '#ffffff', border: '1px solid #d1d5db', borderLeft: '5px solid #059669', borderRadius: '12px', padding: '22px 26px', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111827', fontWeight: 800, fontSize: '1rem', marginBottom: '8px' }}>
            <Lock size={18} color="#059669" strokeWidth={2.4} />
            <span>Strict Confidentiality &amp; Intellectual Property Protection</span>
          </div>
          <p style={{ margin: '0 0 10px 0', fontSize: '0.92rem', color: '#1f2937', lineHeight: 1.6, fontWeight: 500 }}>
            Chemical compositions, CAS numbers, trade secrets, and proprietary formulations are handled with complete confidentiality and protected under our standard Non-Disclosure Agreement (NDA).
          </p>
          <div style={{ fontSize: '0.85rem', color: '#4b5563', fontWeight: 600 }}>
            *Final pricing depends on product complexity, formulation components, regulatory requirements, and target markets.
          </div>
        </div>
      </div>
    </section>
  );
}
