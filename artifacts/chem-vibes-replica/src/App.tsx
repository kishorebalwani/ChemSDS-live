import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, ArrowRight, Check, ChevronDown, FileCheck2, FlaskConical, Globe2, Mail, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, X, Zap, type LucideIcon } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const WA_LINK = "https://wa.me/919183519390?text=Hi%2C%20I%20need%20SDS%2FMSDS%20for%20my%20product(s).%0A%0APlease%20find%20the%20details%20below%3A%0A%0A1.%20Product%20Name%3A%20%0A2.%20Language%20Required%3A%20%0A3.%20Country%20of%20Use%2FExport%3A%20%0A4.%20Number%20of%20Products%3A%20%0A%0APlease%20share%20pricing%20and%20turnaround%20time.";

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
        <a href="#process" onClick={close} data-testid="link-process">Process</a>
        <a href="#industries" onClick={close} data-testid="link-industries">Industries</a>
        <a href="#why" onClick={close}>Compliance</a>
        <a href="#contact" onClick={close}>Samples</a>
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
          <div className="hero-kicker"><span className="kicker-dot" /> ✧&nbsp; Multi-country Compliance • Professional Formatting • WhatsApp Support</div>
          <h1>GHS-Compliant<br />SDS/MSDS <em>for India &amp;<br />Global Markets</em></h1>
          <p className="hero-lede">SDS authored according to destination-market regulations: OSHA HazCom, EU REACH / CLP, WHMIS, and India Draft Rules. Delivered in 24–48 Hours.</p>
          <div className="hero-features">
            <span><Check size={15} /> 16-Sections GHS<br />Format</span>
            <span><Check size={15} /> GHS Classification<br />&amp; Pictograms</span>
            <span><Check size={15} /> Transport Data<br />(UN/IATA/IMDG)</span>
            <span><Check size={15} /> Free Revisions</span>
          </div>
          <div className="hero-actions">
            <a className="button-mint" href="#contact" data-testid="link-hero-start">Get a Quick Quote <ArrowRight size={16} /></a>
            <a className="button-outline" href={WA_LINK} target="_blank" rel="noreferrer" data-testid="link-hero-services"><MessageCircle size={17} /> WhatsApp for Rush</a>
          </div>
          <div className="hero-stats">
            <span><strong>24–48h</strong><small>TURNAROUND</small></span>
            <span><strong>50+</strong><small>COUNTRIES</small></span>
            <span><strong>16</strong><small>GHS SECTIONS</small></span>
            <span><strong>100%</strong><small>COMPLIANCE</small></span>
          </div>
        </div>
        <DocumentPreview />
      </div>
      <div className="trust-strip">
        <div className="container trust-items"><span>Regulation-ready</span><span>Human-reviewed</span><span>Global destinations</span><span>Confidential process</span></div>
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

const services = [
  { number: '01', title: 'SDS/MSDS Preparation', text: 'Professionally authored Safety Data Sheets in 16-section GHS format, ready for global submission.', icon: FileCheck2 },
  { number: '02', title: 'GHS Classification', text: 'Accurate hazard classification, pictograms, and precautionary statements as per GHS Rev 10.', icon: ShieldCheck },
  { number: '03', title: 'Chemical Labeling Support', text: 'Compliant labels with the right pictograms, signal words, and warnings for every market.', icon: FlaskConical },
  { number: '04', title: 'Export & Regulatory Compliance', text: 'OSHA HazCom, EU REACH/CLP, WHMIS, and India Draft Rules — all covered.', icon: Globe2 },
  { number: '05', title: 'SDS Revision & Updates', text: 'Keep documents current with formulation changes, new regulations, and market requirements.', icon: FileCheck2 },
  { number: '06', title: 'Multilingual SDS', text: 'SDS in multiple languages tailored to destination country requirements.', icon: MessageCircle },
];

function Services() {
  const ref = useReveal();
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head reveal" ref={ref}>
           <div><div className="eyebrow">Services</div><h2 className="section-heading">Everything you need for SDS compliance</h2></div>
           <p className="section-copy">Professional SDS/MSDS authoring services for chemical products in compliance with global standards including GHS, OSHA &amp; REACH.</p>
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
  return <article className="service-card reveal" ref={cardRef} style={{ transitionDelay: `${index * 80}ms` }} data-testid={`card-service-${service.number}`}>
    <div className="service-number">{service.number}</div><Icon size={19} strokeWidth={1.7} style={{ position: 'absolute', right: 29, top: 29 }} />
    <h3>{service.title}</h3><p className="service-text">{service.text}</p><span className="arrow-badge"><ArrowDownRight size={16} /></span>
  </article>;
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
          {steps.map(([number, title, text], index) => <div className="process-step reveal" ref={useReveal()} key={number} style={{ transitionDelay: `${index * 80}ms` }}>
            <div className="step-num">{number}</div><h3>{title}</h3><p>{text}</p>
          </div>)}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  ['Fast Turnaround', 'Delivered in 24–48 hours'],
  ['Global Compliance', 'Expertise across regions'],
  ['Affordable Pricing', 'Priced by product complexity'],
  ['Responsive Support', 'WhatsApp & email replies'],
  ['Reliable Documents', 'Export-ready formatting'],
  ['Confidential Handling', 'NDA & data privacy'],
];

function WhyChemSds() {
  return (
    <section className="section why-section dark-section" id="why">
      <div className="container why-layout">
        <div className="why-intro reveal" ref={useReveal()}>
           <div className="eyebrow">Why ChemSDS</div><h2 className="section-heading">Built for chemical exporters who value speed &amp; accuracy</h2>
           <p className="section-copy">Reliable, market-specific documentation that helps your products move through review and into the real world.</p>
          <a className="button-mint" href="#contact" data-testid="link-why-contact">Talk to an expert <ArrowRight size={15} /></a>
        </div>
        <div className="benefits">
          {benefits.map(([title, text], index) => <div className="benefit reveal" ref={useReveal()} key={title} style={{ transitionDelay: `${index * 90}ms` }}>
            <div className="benefit-icon"><Check size={21} /></div><div><h3>{title}</h3><p>{text}</p></div>
          </div>)}
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
          {industries.map(([title, text, Icon], index) => <article className="industry reveal" ref={useReveal()} key={title} style={{ transitionDelay: `${index * 45}ms` }} data-testid={`card-industry-${index}`}>
            <div className="industry-mark"><Icon size={17} /></div><h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="container testimonial-layout">
        <div className="reveal" ref={useReveal()}><div className="quote-mark">“</div><div className="eyebrow">Testimonials</div><h2 className="section-heading">Trusted by exporters worldwide</h2><p className="section-copy">From Amazon FBA sellers to fragrance houses — here’s what teams shipping to global markets say about working with ChemSDS.</p></div>
        <div className="quote-card reveal" ref={useReveal()}>
          <blockquote>“We received our SDS in under 36 hours. Amazon FBA cleared our hazmat review on the first try. Absolutely reliable.”</blockquote>
          <div className="quote-author"><span className="avatar">RM</span><span><strong>Rahul Menon</strong><br />Export Manager • AgriChem Exports · India</span></div>
          <div className="review-stats"><span><strong>4.9/5</strong><small>Average rating</small></span><span><strong>50+</strong><small>Countries served</small></span><span><strong>98%</strong><small>On-time delivery</small></span></div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ['What is an SDS/MSDS?', 'A Safety Data Sheet (SDS), formerly known as an MSDS, communicates the hazards, handling, storage, and emergency information for a chemical product.'],
  ['Which standards do you support?', 'We support OSHA HazCom, EU REACH / CLP, WHMIS, India Draft Rules, UK REACH, and GHS requirements for global markets.'],
  ['What details are required for SDS preparation?', 'Share your product name, composition, intended use, destination country, and any existing label or SDS.'],
  ['How long does SDS preparation take?', 'Most documents are delivered in 24–48 hours after we receive complete product and formulation details.'],
  ['Do you support Amazon FBA SDS requirements?', 'Yes. We prepare export-ready documentation for dangerous goods and Hazmat review.'],
  ['Do you provide multilingual SDS?', 'Yes. SDS can be tailored to multiple languages and destination country requirements.'],
  ['Do you support 24-hour rush orders?', 'Yes. Message us on WhatsApp for expedited orders and current availability.'],
  ['What details do I need to provide?', 'Product name, ingredients or composition, country of use/export, and number of products are a helpful starting point.'],
  ['Will this SDS work for Amazon FBA Dangerous Goods / Hazmat review?', 'We format documents for marketplace and destination-market requirements, including Amazon FBA Hazmat review.'],
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="reveal" ref={useReveal()}><div className="eyebrow">Questions / 06</div><h2 className="section-heading">Clarity before you commit.</h2><p className="section-copy">Still unsure what your product needs? Send us a note and we will point you in the right direction.</p></div>
        <div className="faq-list reveal" ref={useReveal()}>
          {faqs.map(([question, answer], index) => <div className="faq-item" key={question}>
            <button className={`faq-question${open === index ? ' open' : ''}`} onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} data-testid={`button-faq-${index}`}>
              <span>{question}</span><ChevronDown size={18} />
            </button>
            <div className={`faq-answer${open === index ? ' open' : ''}`} aria-hidden={open !== index}>{answer}</div>
          </div>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
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
            <textarea id="message" name="message" placeholder="Tell us about your formulation or deadline." data-testid="input-message" />
          </div>
          <div className="submit-row">
            {sent ? <span className="form-status" data-testid="status-form-sent">Thanks — we’ll be in touch shortly.</span> : <span className="form-status">Replies within one business day.</span>}
            <button className="button-mint" type="submit" data-testid="button-submit-contact">
              {sent ? 'Send another' : 'Send enquiry'} <ArrowRight size={15} />
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
      <Services />
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
