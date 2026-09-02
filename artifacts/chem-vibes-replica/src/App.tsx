import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, ArrowRight, Check, ChevronDown, FileCheck2, FlaskConical, Globe2, Lock, Mail, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, X, Zap, type LucideIcon } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const WA_LINK = "https://wa.me/919183519390?text=Hi%2C%20I%20need%20SDS%2FMSDS%20for%20my%20product(s).%0A%0APlease%20find%20the%20details%20below%3A%0A%0A1.%20Product%20Name%3A%20%0A2.%20Language%20Required%3A%20%0A3.%20Country%20of%20Use%2FExport%3A%20%0A4.%20Number%20of%20Products%3A%20%0A%0APlease%20share%20pricing%20and%20turnaround%20time.";
const WA_SAMPLE_LINK = "https://wa.me/919183519390?text=Hi%2C%20I%20would%20like%20to%20review%20a%20sample%2016-section%20GHS%20SDS%20document.";

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Brand() {
  return (
    <a href="#top" className="brand" data-testid="link-brand">
      <span className="brand-mark"><FlaskConical size={19} strokeWidth={2.2} /></span>
      <span><strong>ChemSDS</strong><small>SDS/MSDS SERVICES</small></span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className={`nav${open ? ' mobile-open' : ''}`} data-testid="navigation">
      <Brand />
      <div className="nav-links">
        <a href="#services" onClick={close} data-testid="link-services">Services</a>
        <a href="#standards-grid" onClick={close}>16-Sections</a>
        <a href="#pricing" onClick={close}>Pricing</a>
        <a href="#process" onClick={close} data-testid="link-process">Process</a>
        <a href="#industries" onClick={close} data-testid="link-industries">Industries</a>
        <a href="#why" onClick={close}>Compliance</a>
        <a href="#reviews" onClick={close}>Reviews</a>
        <a href="#faq" onClick={close} data-testid="link-faq">FAQs</a>
        <a href="#contact" onClick={close}>Contact</a>
      </div>
      <div className="nav-actions">
        <a className="nav-whatsapp" href={WA_LINK} target="_blank" rel="noreferrer" onClick={close}>◌&nbsp; WhatsApp</a>
        <a className="nav-cta" href="#contact" onClick={close} data-testid="link-nav-contact">Get a Quote</a>
      </div>
      <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} data-testid="button-menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}

function DocumentPreview() {
  return (
    <div className="sds-visual reveal" ref={useReveal()} aria-label="Illustration of a GHS-compliant safety data sheet">
      <div className="orbit" aria-hidden="true" />
      <div className="float-tag tag-top"><ShieldCheck size={15} /> GHS COMPLIANT</div>
      <div className="float-tag tag-bottom"><Zap size={15} /> 24–48 HOUR DELIVERY</div>
      <div className="document">
        <div className="doc-corner" aria-hidden="true" />
        <div className="doc-kicker">CHEMSDS / SAFETY DATA SHEET</div>
        <h3>Acetone<br />Solution 99.5%</h3>
        <div className="doc-line" /><div className="doc-line short" /><div className="doc-line tiny" />
        <div className="doc-rule" />
        <div className="doc-label">Hazard identification</div>
        <div className="pictogram-row" aria-label="Hazard pictograms">
          <div className="hazard"><span /></div><div className="hazard"><span /></div><div className="hazard"><span /></div>
        </div>
        <div className="doc-line" /><div className="doc-line short" />
        <div className="doc-rule" />
        <div className="doc-label">Regulatory information</div>
        <div className="doc-line" /><div className="doc-line short" />
        <div className="doc-footer"><span>REV. 04 / 2024</span><span>PAGE 01 / 16</span></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <Nav />
      <div className="container hero-inner">
        <div className="hero-copy reveal" ref={useReveal()}>
          <div className="hero-kicker"><span className="kicker-dot" /> ✧&nbsp; Customs &amp; Freight Clearance • Global Compliance • 24–48h Delivery</div>
          <h1>GHS-Compliant<br />SDS/MSDS <em>for India &amp;<br />Global Markets</em></h1>
          <p className="hero-lede">Fast-track 16-section SDS for Customs, Port &amp; Freight Clearance. Fully compliant with US OSHA HazCom, EU REACH, IATA Air Cargo &amp; IMDG Ocean Transport. Delivered in 24–48 Hours.</p>
          <div className="hero-features">
            <span><Check size={15} /> 16-Sections GHS<br />Format</span>
            <span><Check size={15} /> Customs &amp; Port<br />Clearance Ready</span>
            <span><Check size={15} /> Transport Data<br />(UN/IATA/IMDG)</span>
            <span><Check size={15} /> Free Revisions</span>
          </div>
          <div className="hero-actions">
            <a className="button-mint" href="#contact" data-testid="link-hero-start">Get a Quick Quote <ArrowRight size={16} /></a>
            <a className="button-outline" href={WA_LINK} target="_blank" rel="noreferrer" data-testid="link-hero-services"><MessageCircle size={17} /> WhatsApp for Rush Orders</a>
          </div>
          <div className="hero-stats">
            <span><strong>24–48h</strong><small>TURNAROUND</small></span>
            <span><strong>50+</strong><small>COUNTRIES</small></span>
            <span><strong>16</strong><small>GHS SECTIONS</small></span>
            <span><strong>100%</strong><small>CUSTOMS COMPLIANT</small></span>
          </div>
        </div>
        <DocumentPreview />
      </div>
      <div className="trust-strip">
        <div className="container trust-items"><span>Customs-ready</span><span>Human-reviewed</span><span>Air &amp; Sea Freight</span><span>Strict NDA Protection</span></div>
      </div>
    </header>
  );
}

const standards = ['OSHA HazCom 2012', 'EU REACH / CLP', 'WHMIS 2015', 'India Draft Rules', 'UK REACH', 'UN / IATA / IMDG', 'GHS Rev 10', 'Amazon FBA Hazmat', '16-Section Format', 'Multilingual SDS'];

function StandardsRibbon() {
  return (
    <div className="ribbon" id="samples" aria-label="Standards supported">
      <div className="ribbon-track">{[...standards, ...standards].map((standard, index) => <span key={`${standard}-${index}`}>{standard}</span>)}</div>
    </div>
  );
}

const trustCards = [
  { standard: 'GHS Rev. 10', desc: 'UN Globally Harmonized System' },
  { standard: 'OSHA HazCom 2012', desc: 'US 29 CFR 1910.1200' },
  { standard: 'EU REACH / CLP', desc: 'Regulation (EU) 2020/878' },
  { standard: 'Amazon Hazmat', desc: 'FBA Dangerous Goods Review' },
];

function TrustBadgesSection() {
  const ref = useReveal();
  return (
    <section className="section" style={{ paddingTop: '28px', paddingBottom: '32px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#374151', marginBottom: '20px' }}>
          Authored Strictly in Accordance With Global Regulatory &amp; Transport Standards
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }} className="reveal" ref={ref}>
          {trustCards.map((item) => (
            <div key={item.standard} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '18px 14px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ color: '#059669', fontWeight: 800, fontSize: '1.05rem', marginBottom: '4px' }}>{item.standard}</div>
              <div style={{ fontSize: '0.82rem', color: '#4b5563', fontWeight: 500 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ghsSections = [
  { num: '01', title: 'Identification & Supplier' },
  { num: '02', title: 'Hazard(s) Identification' },
  { num: '03', title: 'Composition / Ingredients' },
  { num: '04', title: 'First-Aid Measures' },
  { num: '05', title: 'Fire-Fighting Measures' },
  { num: '06', title: 'Accidental Release' },
  { num: '07', title: 'Handling & Storage' },
  { num: '08', title: 'Exposure Controls & PPE' },
  { num: '09', title: 'Physical & Chemical Prop.' },
  { num: '10', title: 'Stability & Reactivity' },
  { num: '11', title: 'Toxicological Information' },
  { num: '12', title: 'Ecological Information' },
  { num: '13', title: 'Disposal Considerations' },
  { num: '14', title: 'Transport Info (UN/IATA/IMDG)' },
  { num: '15', title: 'Regulatory Information' },
  { num: '16', title: 'Other / Revision Info' },
];

function GHSArchitectureSection() {
  const ref = useReveal();
  return (
    <section className="section" id="standards-grid" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container">
        <div className="section-head reveal" ref={ref}>
          <div>
            <div className="eyebrow">Full Coverage</div>
            <h2 className="section-heading">Complete 16-Section GHS Architecture</h2>
          </div>
          <p className="section-copy">
            Every document is authored with comprehensive technical classifications, toxicology mappings, and global transport compliance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '12px', marginBottom: '36px' }}>
          {ghsSections.map((sec, idx) => (
            <div key={sec.num} className="reveal" ref={useReveal()} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', transitionDelay: `${idx * 25}ms`, boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, fontFamily: 'monospace', color: '#059669', background: 'rgba(5,150,105,0.1)', padding: '3px 7px', borderRadius: '5px' }}>
                {sec.num}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#1f2937', fontWeight: 600 }}>
                {sec.title}
              </span>
            </div>
          ))}
        </div>

        <div style={{ background: '#ffffff', border: '1px solid rgba(5,150,105,0.3)', borderRadius: '16px', padding: '32px 24px', textAlign: 'center', maxWidth: '750px', margin: '0 auto', boxShadow: '0 4px 20px rgba(5,150,105,0.08)' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Need to inspect our authoring quality?</h3>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', marginBottom: '20px', lineHeight: 1.5 }}>Request a complete 16-section sample SDS or get a free compliance check on your existing sheet.</p>
          <a href={WA_SAMPLE_LINK} target="_blank" rel="noreferrer" className="button-mint" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span>Get Sample SDS via WhatsApp</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  { number: '01', title: 'SDS/MSDS Preparation', text: 'Professionally authored Safety Data Sheets in 16-section GHS format, ready for global submission and customs release.', icon: FileCheck2 },
  { number: '02', title: 'GHS Classification', text: 'Accurate hazard classification, pictograms, and precautionary statements as per GHS Rev 10.', icon: ShieldCheck },
  { number: '03', title: 'Chemical Labeling Support', text: 'Compliant labels with the right pictograms, signal words, and warnings for every destination market.', icon: FlaskConical },
  { number: '04', title: 'Export & Regulatory Compliance', text: 'OSHA HazCom, EU REACH/CLP, WHMIS, and India Draft Rules — all covered.', icon: Globe2 },
  { number: '05', title: 'Air & Sea Freight Classification', text: 'Section 14 transport data compliant with IATA Dangerous Goods (Air) and IMDG Code (Ocean Cargo).', icon: FileCheck2 },
  { number: '06', title: 'Multilingual SDS', text: 'SDS in multiple languages tailored to European, Middle Eastern, and Asian port requirements.', icon: MessageCircle },
];

function Services() {
  const ref = useReveal();
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head reveal" ref={ref}>
          <div><div className="eyebrow">Services</div><h2 className="section-heading">Everything you need for SDS &amp; Export compliance</h2></div>
          <p className="section-copy">Professional SDS/MSDS authoring services for chemical products in compliance with global standards including GHS, OSHA, REACH, IATA &amp; IMDG.</p>
        </div>
        <div className="service-grid service-grid-six">
          {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const cardRef = useReveal();
  const Icon = service.icon;
  return (
    <article className="service-card reveal" ref={cardRef} style={{ transitionDelay: `${index * 80}ms` }} data-testid={`card-service-${service.number}`}>
      <div className="service-number">{service.number}</div>
      <Icon size={19} strokeWidth={1.7} style={{ position: 'absolute', right: 29, top: 29 }} />
      <h3>{service.title}</h3>
      <p className="service-text">{service.text}</p>
      <span className="arrow-badge"><ArrowDownRight size={16} /></span>
    </article>
  );
}

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

        {/* NDA & Trust Box */}
        <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderLeft: '4px solid #059669', borderRadius: '12px', padding: '20px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#111827', fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px' }}>
            <Lock size={17} color="#059669" />
            <span>Strict Confidentiality &amp; Intellectual Property Protection</span>
          </div>
          <p style={{ margin: '0 0 8px 0', fontSize: '0.86rem', color: '#4b5563', lineHeight: 1.5 }}>
            Chemical compositions, CAS numbers, trade secrets, and proprietary formulations are handled with complete confidentiality and protected under our standard Non-Disclosure Agreement (NDA).
          </p>
          <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
            *Final pricing depends on product complexity, formulation components, regulatory requirements, and target markets.
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  ['01', 'Share Formulation', 'Send product details, composition, and destination country via form or WhatsApp.'],
  ['02', 'Get a Quick Quote', 'Receive transparent pricing and turnaround time within 1 hour.'],
  ['03', 'Expert Authoring', 'Our regulatory experts prepare your SDS in 16-section GHS format.'],
  ['04', 'Delivered in 24–48h', 'Receive export-ready SDS with free revisions if anything needs tweaking.'],
];

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-head reveal" ref={useReveal()}>
          <div><div className="eyebrow">Process</div><h2 className="section-heading">From formulation to export-ready SDS</h2></div>
          <p className="section-copy">A simple 4-step workflow to get compliant safety documentation into your hands — quickly.</p>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, text], index) => (
            <div className="process-step reveal" ref={useReveal()} key={number} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="step-num">{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  ['Port & Customs Clearance', 'Zero shipment holds at air cargo & sea customs'],
  ['Fast Cargo Turnaround', 'Delivered in 24–48 hours for urgent export deadlines'],
  ['Global Logistics Compliance', 'IATA (Air), IMDG (Ocean) & UN transport ready'],
  ['Affordable Pricing', 'Transparent slab pricing with no hidden charges'],
  ['Amazon Hazmat Review', 'FBA dangerous goods review clearance support'],
  ['Confidential Handling', 'Complete formulation privacy protected under NDA'],
];

function WhyChemSds() {
  return (
    <section className="section why-section dark-section" id="why">
      <div className="container why-layout">
        <div className="why-intro reveal" ref={useReveal()}>
          <div className="eyebrow">Why ChemSDS</div>
          <h2 className="section-heading">Built for chemical exporters who value speed &amp; accuracy</h2>
          <p className="section-copy">Reliable, market-specific documentation that prevents customs delays and helps your shipments clear ports smoothly worldwide.</p>
          <a className="button-mint" href="#contact" data-testid="link-why-contact">Talk to an expert <ArrowRight size={15} /></a>
        </div>
        <div className="benefits">
          {benefits.map(([title, text], index) => (
            <div className="benefit reveal" ref={useReveal()} key={title} style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="benefit-icon"><Check size={21} /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries: Array<[string, string, LucideIcon]> = [
  ['Specialty Chemicals & Solvents', 'Safety documentation for industrial chemical products.', FlaskConical],
  ['Cosmetics & Personal Care Ingredients', 'Clear compliance for formulations, ingredients, and finished goods.', Sparkles],
  ['Agrochemicals, Fertilizers & Pesticides', 'Market-ready information for agricultural inputs.', Globe2],
  ['Paints, Coatings & Resins', 'Hazard communication that matches every product label.', Zap],
  ['E-Commerce & Amazon FBA Exporters', 'Get your products through review and into the warehouse.', ShieldCheck],
  ['Battery & Automotive Industry', 'Reliable documents for high-specification products and supply chains.', FileCheck2],
];

function Industries() {
  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="section-head reveal" ref={useReveal()}>
          <div><div className="eyebrow">Industries</div><h2 className="section-heading">Sectors we serve daily</h2></div>
          <p className="section-copy">We help manufacturers, exporters and sellers across categories deliver compliant safety documentation for every market they ship to.</p>
        </div>
        <div className="industry-grid">
          {industries.map(([title, text, Icon], index) => (
            <article className="industry reveal" ref={useReveal()} key={title} style={{ transitionDelay: `${index * 45}ms` }} data-testid={`card-industry-${index}`}>
              <div className="industry-mark"><Icon size={17} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="container testimonial-layout">
        <div className="reveal" ref={useReveal()}>
          <div className="quote-mark">“</div>
          <div className="eyebrow">Testimonials</div>
          <h2 className="section-heading">Trusted by exporters worldwide</h2>
          <p className="section-copy">From Amazon FBA sellers to global chemical exporters — here’s what teams shipping to international destinations say about working with ChemSDS.</p>
        </div>
        <div className="quote-card reveal" ref={useReveal()}>
          <blockquote>“Our chemical consignment was held at customs due to missing GHS Section 14 transport data. ChemSDS delivered an updated, compliant SDS in less than 24 hours, and the shipment cleared immediately.”</blockquote>
          <div className="quote-author"><span className="avatar">RM</span><span><strong>Rahul Menon</strong><br />Export Manager • AgriChem Exports · India</span></div>
          <div className="review-stats"><span><strong>4.9/5</strong><small>Average rating</small></span><span><strong>50+</strong><small>Countries served</small></span><span><strong>98%</strong><small>On-time delivery</small></span></div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ['Do you help if my shipment is held at customs or port for a missing SDS?', 'Yes. We prioritize urgent export consignments and offer 24-hour express authoring to help release shipments held by airlines, shipping lines, freight forwarders, or port customs authorities.'],
  ['Is your SDS accepted by international airlines and shipping lines?', 'Yes. Every SDS includes comprehensive Section 14 transport data (UN Number, Proper Shipping Name, Class, Packing Group, and Marine Pollutant info) compliant with IATA-DGR (Air) and IMDG Code (Ocean).'],
  ['What is an SDS/MSDS?', 'A Safety Data Sheet (SDS), formerly known as an MSDS, communicates the hazards, handling, storage, transport, and emergency measures for a chemical product.'],
  ['Which international standards do you support?', 'We support US OSHA HazCom 2012, EU REACH (Regulation 2020/878) / CLP, WHMIS 2015, India Draft Chemicals Rules, UK REACH, and UN GHS Rev. 10.'],
  ['What details are required for SDS preparation?', 'Share your product name, ingredients or chemical composition, intended application, target country of export, and any existing laboratory test or TDS.'],
  ['How long does SDS preparation take?', 'Standard orders are delivered in 24–48 hours. Expedited rush authoring is available for time-sensitive port and air cargo deadlines.'],
  ['Will this SDS work for Amazon FBA Dangerous Goods / Hazmat review?', 'Yes. We specifically author documents to satisfy Amazon Hazmat FBA requirements, ensuring smooth product clearance.'],
  ['Do you provide multilingual SDS?', 'Yes. We author SDS in destination-specific languages including English, Spanish, German, French, and Arabic.'],
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="reveal" ref={useReveal()}>
          <div className="eyebrow">Questions / 08</div>
          <h2 className="section-heading">Clarity before you commit.</h2>
          <p className="section-copy">Have questions about export clearance, compliance standards, or turnaround times? Everything you need to know is right here.</p>
        </div>
        <div className="faq-list reveal" ref={useReveal()}>
          {faqs.map(([question, answer], index) => (
            <div className="faq-item" key={question}>
              <button className={`faq-question${open === index ? ' open' : ''}`} onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} data-testid={`button-faq-${index}`}>
                <span>{question}</span>
                <ChevronDown size={18} />
              </button>
              <div className={`faq-answer${open === index ? ' open' : ''}`} aria-hidden={open !== index}>{answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const clientName = formData.get('client_name') || 'Not specified';
    const clientContact = formData.get('client_contact') || 'Not specified';
    const productName = formData.get('name') || 'Not specified';
    const language = formData.get('email') || 'English';
    const country = formData.get('company') || 'Not specified';
    const productsCount = formData.get('products') || '1';
    const message = formData.get('message') || 'None';

    const text = `Hi, I need SDS/MSDS for my product(s).%0A%0APlease find the details below:%0A• Client Name: ${encodeURIComponent(String(clientName))}%0A• Contact / Company: ${encodeURIComponent(String(clientContact))}%0A• Product Name: ${encodeURIComponent(String(productName))}%0A• Language Required: ${encodeURIComponent(String(language))}%0A• Country of Use/Export: ${encodeURIComponent(String(country))}%0A• Number of Products: ${encodeURIComponent(String(productsCount))}%0A• Additional Details: ${encodeURIComponent(String(message))}%0A%0APlease share pricing and turnaround time.`;

    setSent(true);
    event.currentTarget.reset();
    window.open(`https://wa.me/919183519390?text=${text}`, '_blank');
  };

  return (
    <section className="section contact-section dark-section" id="contact">
      <div className="container contact-layout">
        <div className="reveal" ref={useReveal()}>
          <div className="eyebrow">Contact</div>
          <h2 className="section-heading">Get a quick quote within 1 hour</h2>
          <p className="section-copy">Share your product details and we’ll respond with pricing and turnaround. WhatsApp for instant response.</p>
          <div className="contact-details">
            <a href="tel:+919183519390" className="contact-detail" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Phone size={16} /> +91-9183519390
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="contact-detail" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MessageCircle size={16} /> Chat for instant response
            </a>
            <a href="mailto:info@chemsds.in?subject=SDS%20Authoring%20Inquiry" className="contact-detail" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Mail size={16} /> info@chemsds.in
            </a>
          </div>
        </div>
        <form className="contact-form reveal" ref={useReveal<HTMLFormElement>()} onSubmit={onSubmit} data-testid="form-contact">
          <div className="field-row">
            <div className="field">
              <label htmlFor="client_name">Your Name / Company</label>
              <input id="client_name" name="client_name" required placeholder="Your Name / Company" />
            </div>
            <div className="field">
              <label htmlFor="client_contact">Your Email / Phone</label>
              <input id="client_contact" name="client_contact" required placeholder="Email or Phone Number" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Product name</label>
              <input id="name" name="name" required placeholder="Product name" data-testid="input-name" />
            </div>
            <div className="field">
              <label htmlFor="email">Language required</label>
              <input id="email" name="email" required placeholder="English, Spanish..." data-testid="input-email" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="company">Country of use / export</label>
              <input id="company" name="company" placeholder="Destination market" data-testid="input-company" />
            </div>
            <div className="field">
              <label htmlFor="products">Number of products</label>
              <input id="products" name="products" placeholder="1" data-testid="input-products" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Additional details</label>
            <textarea id="message" name="message" placeholder="Tell us about your formulation, port deadline, or urgency." data-testid="input-message" />
          </div>
          <div className="submit-row">
            {sent ? <span className="form-status" data-testid="status-form-sent">Redirecting to WhatsApp...</span> : <span className="form-status">Instant reply on WhatsApp.</span>}
            <button className="button-mint" type="submit" data-testid="button-submit-contact">
              {sent ? 'Send another inquiry' : 'Send Enquiry via WhatsApp'} <ArrowRight size={15} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="contact-section" style={{ paddingTop: 0 }}>
      <div className="container footer">
        <Brand />
        <span>Serving India &amp; Global Markets</span>
        <div className="footer-links">
          <a href="#services" data-testid="link-footer-services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#industries" data-testid="link-footer-industries">Industries</a>
          <a href="#contact" data-testid="link-footer-contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="site-shell">
      <Hero />
      <StandardsRibbon />
      <TrustBadgesSection />
      <Services />
      <GHSArchitectureSection />
      <PricingSection />
      <Process />
      <WhyChemSds />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <a className="whatsapp" href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Contact ChemSDS on WhatsApp" data-testid="link-whatsapp">
        <MessageCircle size={23} />
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  return <ErrorBoundary resetKey={window.location.pathname}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <RoutedErrorBoundary>
            <Router />
          </RoutedErrorBoundary>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
