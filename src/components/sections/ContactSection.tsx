import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';
import { LinkedInIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleCopyLinkedIn = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.linkedin);
    setCopiedLinkedIn(true);
    setTimeout(() => setCopiedLinkedIn(false), 2200);
  };

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`;

  // Shared card style matching Image 2 (Curriculum Vitae / Résumé card) exactly:
  // Pure white background, 2px pink border, soft shadow, clean typography
  const cardStyle = "group relative flex flex-col justify-between rounded-2xl border-2 border-[#f43f8e]/35 bg-white p-6 shadow-sm hover:border-[#f43f8e] hover:shadow-lg hover:shadow-[#f43f8e]/15 transition-all";

  return (
    <section id="contact" className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-16 pt-24 md:px-10 md:pb-20">
      <div className="cinematic-depth w-full max-w-6xl">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#f43f8e]">
            04 / Contact
          </p>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-normal text-slate-900">
          CONTACT INFORMATION<span className="text-[#f43f8e]">.</span>
        </h2>
        
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-slate-600">
          Reach out directly for AI developer roles, semantic vector pipelines, or autonomous systems collaborations.
        </p>

        {/* Contact Cards Grid — All matching Image 2 exactly */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card 1: Direct Email */}
          <div className={cardStyle}>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f43f8e] text-white shadow-md shadow-[#f43f8e]/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Direct Email Address
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 block">
                    {PERSONAL_INFO.email} · Response within 24h
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send inquiries directly for AI engineering opportunities, semantic vector search architectures, autonomous agent workflows, or production system collaborations.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f43f8e] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#f43f8e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Open in Gmail</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:border-[#f43f8e] hover:text-[#f43f8e] transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className={cardStyle}>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f43f8e] text-white shadow-md shadow-[#f43f8e]/30">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Direct Phone & WhatsApp
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 block">
                    {PERSONAL_INFO.phone} · IST (UTC+5:30)
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Available for direct phone calls, interview scheduling, and WhatsApp messaging for rapid communication regarding full-time roles, internships, or consultations.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#f43f8e] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#f43f8e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call Directly</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:border-[#f43f8e] hover:text-[#f43f8e] transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span>{copiedPhone ? 'Phone Copied!' : 'Copy Phone'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: LinkedIn Profile */}
          <div className={cardStyle}>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f43f8e] text-white shadow-md shadow-[#f43f8e]/30">
                  <LinkedInIcon className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    LinkedIn Network Profile
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 block">
                    tanmay-das-6b9748273 · Verified Profile
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect on LinkedIn to review verified skill endorsements, professional timeline at Interloom, open-source initiatives, and academic engineering background at MIT Bengaluru.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f43f8e] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#f43f8e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View LinkedIn</span>
              </a>

              <button
                onClick={handleCopyLinkedIn}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:border-[#f43f8e] hover:text-[#f43f8e] transition-colors cursor-pointer"
              >
                {copiedLinkedIn ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span>{copiedLinkedIn ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Card 4: Location & Institution */}
          <div className={cardStyle}>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f43f8e] text-white shadow-md shadow-[#f43f8e]/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Current Location & Base
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 block">
                    {PERSONAL_INFO.location} · {PERSONAL_INFO.institution}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Based in Bengaluru, India. Pursuing B.Tech in Computer Science and Engineering at Manipal Institute of Technology (2025–2029). Open to on-site, hybrid, and global remote AI roles.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f43f8e] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#f43f8e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <ArrowUpRight className="h-4 w-4" />
                <span>Get In Touch</span>
              </a>

              <a
                href="https://maps.google.com/?q=Manipal+Institute+of+Technology+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:border-[#f43f8e] hover:text-[#f43f8e] transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Campus on Maps</span>
              </a>
            </div>
          </div>

          {/* Card 5: Curriculum Vitae / Résumé (Original reference card matching Image 2 exactly) */}
          <div className={`${cardStyle} md:col-span-2`}>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f43f8e] text-white shadow-md shadow-[#f43f8e]/30">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Curriculum Vitae / Résumé
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 block">
                    ATS Optimized · PDF Document · Complete Work Experience
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Download Tanmay Das's complete curriculum vitae covering his engineering background at Manipal Institute of Technology, AI Developer role at Interloom, multi-agent frameworks, benchmark metrics, and production deployments.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href="./Tanmay_Das_Resume.pdf"
                download="Tanmay_Das_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f43f8e] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#f43f8e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Download Résumé (PDF)</span>
              </a>

              <a
                href="./Tanmay_Das_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:border-[#f43f8e] hover:text-[#f43f8e] transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View in New Tab</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 font-mono text-[11px] uppercase tracking-wider text-slate-500">
          <span>{PERSONAL_INFO.name} · {PERSONAL_INFO.location}</span>
          <span>{PERSONAL_INFO.title}</span>
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
        </div>

      </div>
    </section>
  );
};
