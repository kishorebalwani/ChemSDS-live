import React from "react";
import { ShieldCheck, MessageCircle, Phone, ArrowRight, AlertTriangle, FileCheck, CheckCircle2 } from "lucide-react";

export default function AmazonHazmatGuide() {
  const waLink = "https://wa.me/919183519390?text=Hi%2C%20I%20need%20urgent%20help%20with%20Amazon%20Hazmat%20SDS%20%2F%20FBA%20Dangerous%20Goods%20Clearance.";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" /> Amazon FBA Compliance Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Amazon Hazmat SDS & FBA Dangerous Goods Clearance
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Resolve "Hazmat Review Pending", prevent ASIN suppression, and secure 100% compliant 16-section Safety Data Sheets or Exemption Sheets within 24–48 hours.
          </p>
        </div>

        {/* Urgent Alert Banner / CTA */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">ASIN Under Hazmat Review or Blocked?</h3>
              <p className="text-sm text-slate-300">Don't let listings stay suppressed. Get verified SDS tailored to your Amazon detail page.</p>
            </div>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shrink-0"
          >
            <MessageCircle className="w-4 h-4" /> Contact for Amazon Hazmat
          </a>
        </div>

        {/* Section 1: Why Amazon Flags ASINs */}
        <div className="space-y-4 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-emerald-400" /> Why Amazon Flags Products for Hazmat Review
          </h2>
          <p className="text-slate-300 leading-relaxed">
            When converting an ASIN to Fulfillment by Amazon (FBA) or selling items containing liquids, sprays, powders, cosmetics, essential oils, or batteries, Amazon’s automated scanning algorithm flags the product for a <strong>Dangerous Goods (Hazmat) Review</strong>.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Until approved, inventory remains locked, inbound shipments cannot be created, and sales pause. Amazon mandates a verified <strong>16-Section GHS Safety Data Sheet (SDS)</strong> or a certified <strong>Exemption Sheet</strong> within 14 business days.
          </p>
        </div>

        {/* Section 2: SDS vs Exemption Table */}
        <div className="space-y-4 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white">SDS vs. Exemption Sheet: Which Document Do You Need?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-white font-semibold">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4">16-Section Safety Data Sheet (SDS)</th>
                  <th className="py-3 px-4">Amazon Exemption Sheet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Target Products</td>
                  <td className="py-3 px-4">Chemical mixtures, cosmetics, essential oils, cleansers, glues, inks, sprays.</td>
                  <td className="py-3 px-4">Dry non-chemical products, battery-operated goods, or products without harmful chemicals.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Amazon Criteria</td>
                  <td className="py-3 px-4">Created within 5 years, exact ASIN title/brand match, complete 16 sections with CAS numbers.</td>
                  <td className="py-3 px-4">Official Amazon Excel format; gets rejected if any hazardous ingredient is detected.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Review Time</td>
                  <td className="py-3 px-4">2 to 4 business days by Amazon DG team.</td>
                  <td className="py-3 px-4">2 business days (subject to frequent manual rejections).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Why SDS Files Get Rejected */}
        <div className="space-y-4 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white">The 5 Reasons Amazon Rejects Safety Data Sheets</h2>
          <ul className="space-y-3">
            {[
              "Product title or brand name mismatch between Section 1 and Amazon product listing.",
              "Submitting obsolete 8-9 section MSDS instead of updated 16-section GHS Rev. 10 format.",
              "Missing CAS numbers or vague ingredient declarations in Section 3.",
              "Conflicting transportation classification in Section 14 (IATA / IMDG / ADR).",
              "Document older than 5 years from submission date."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Big CTA Box */}
        <div className="bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need an Amazon-Compliant SDS or Exemption Sheet Fast?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            ChemSDS authors customized, 100% compliant Safety Data Sheets that match your exact ASIN details. Approved by Amazon Dangerous Goods teams in 24–48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp for Fast Clearance
            </a>
            <a
              href="tel:+919183519390"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all"
            >
              <Phone className="w-5 h-5" /> Call: 091835 19390
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
