"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LanguageProvider";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const fontAr = { fontFamily: isAr ? "var(--font-cairo)" : "inherit" };
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "At THINKWAY, we are committed to protecting your privacy and ensuring transparency in how we handle your personal information. This Privacy Policy outlines our data practices and your rights regarding your information.",
        "This policy applies to all interactions with our website, services, and campaigns. By using our services, you consent to the data practices described herein.",
      ],
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      content: [
        "We collect limited business and operational personal data necessary to execute influencer marketing campaigns effectively. This includes:",
        "• Contact Information: Name, email address, phone number, business affiliation",
        "• Campaign Data: Brief details, target audience, campaign objectives, performance metrics",
        "• Professional Information: Job title, company name, industry, role in campaign execution",
        "• Technical Data: IP address, browser type, pages visited, referring URL (via analytics)",
        "• Communication Data: Messages, inquiries, and campaign correspondence",
        "We do not intentionally collect sensitive personal data such as health information, genetic data, biometric data, or racial/ethnic origin information.",
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Information",
      content: [
        "We use the information we collect solely for operational and business purposes related to influencer marketing campaign execution:",
        "• Campaign Execution: Coordinating creators, clients, and stakeholders for campaign delivery",
        "• Communication: Responding to inquiries, providing updates, and facilitating collaboration",
        "• Analytics & Reporting: Measuring campaign performance and generating insights",
        "• Payment Processing: Coordinating payments and financial transactions",
        "• Legal Compliance: Maintaining records and fulfilling legal obligations",
        "We do not use your data for marketing purposes beyond campaign-related communications unless you explicitly opt-in.",
      ],
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      content: [
        "We may share limited personal data with third parties only when operationally necessary:",
        "• Clients: Campaign details required for campaign execution and reporting",
        "• Creators & Influencers: Contact information and campaign briefs necessary for collaboration",
        "• Service Providers: Payment processors, email platforms, and analytics tools",
        "• Partner Agencies: When coordinating campaign execution across multiple organizations",
        "We require all recipients to maintain the same level of data confidentiality and only use data for specified purposes. We do not sell your personal data to third parties.",
      ],
    },
    {
      id: "cookies-analytics",
      title: "Cookies & Analytics",
      content: [
        "Our website uses cookies and similar technologies to enhance functionality and user experience:",
        "• Essential Cookies: Required for website functionality and security",
        "• Analytics Cookies: Help us understand how visitors use our website (Google Analytics)",
        "• Performance Cookies: Used to optimize website speed and reliability",
        "You can manage cookie preferences through your browser settings. Disabling certain cookies may limit functionality.",
        "We implement Google Analytics with anonymized IP addresses to respect your privacy while gathering insights.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "We implement reasonable and appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction:",
        "• Encrypted Data Transmission: HTTPS encryption for all data in transit",
        "• Access Controls: Limited access to personal data by authorized personnel only",
        "• Regular Security Assessments: Periodic reviews and updates of security practices",
        "• Data Retention: We retain personal data only for as long as necessary for the purposes outlined in this policy",
        "While we strive to maintain high security standards, no method of data transmission over the internet is 100% secure. We cannot guarantee absolute security.",
      ],
    },
    {
      id: "third-party-platforms",
      title: "Third-Party Platforms",
      content: [
        "Our services involve coordinating campaigns across social media platforms (Instagram, TikTok, YouTube, etc.). When you interact with creators through these platforms:",
        "• Platform Data: Social media platforms collect their own data under their privacy policies",
        "• Campaign Tracking: We may track campaign performance metrics shared by creators or platforms",
        "• Your Data on Third-Party Sites: Your data on social platforms is governed by their privacy policies, not ours",
        "We are not responsible for third-party privacy practices. Please review the privacy policies of social platforms and other services independently.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: [
        "Depending on your location and applicable laws, you may have the following rights:",
        "• Access: Request access to the personal data we hold about you",
        "• Correction: Request correction of inaccurate or incomplete data",
        "• Deletion: Request deletion of your personal data, subject to legal obligations",
        "• Opt-Out: Unsubscribe from campaign-related communications",
        "• Data Portability: Request your data in a portable format",
        "• Withdraw Consent: Withdraw consent for data processing at any time",
        "To exercise any of these rights, please contact us at the information provided below. We will respond to verified requests within 30 days.",
      ],
    },
    {
      id: "contact",
      title: "Contact Information",
      content: [
        "If you have questions about this Privacy Policy, or if you wish to exercise your data rights, please contact us:",
        "Company: [Company Name]",
        "Email: [Contact Email]",
        "Website: [Website URL]",
        "Address: [Business Address]",
        "We are committed to addressing your concerns promptly and transparently.",
      ],
    },
  ];

  return (
    <main className="bg-white min-h-screen w-full overflow-x-clip">
      <Navigation />

      {/* Hero Section */}
      <section
        className="container-custom section-padding"
        dir={isAr ? "rtl" : "ltr"}
        style={{ paddingTop: "100px" }}
      >
        <div className="max-w-[960px] mx-auto">
          {/* Eyebrow */}
          <p
            className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-8 flex items-center gap-4"
            style={fontAr}
          >
            <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
            Privacy & Compliance
          </p>

          {/* Title */}
          <h1
            className="font-black uppercase text-black mb-12"
            style={{
              fontSize: isAr ? "clamp(36px, 5vw, 72px)" : "clamp(48px, 7vw, 96px)",
              letterSpacing: isAr ? "-0.03em" : "-0.05em",
              lineHeight: isAr ? "1.1" : "0.95",
              ...fontAr,
            }}
          >
            Privacy <br />
            <span className="text-[#1535C2]">Policy</span>
          </h1>

          {/* Intro Description */}
          <div className="max-w-[720px] space-y-6 mb-16">
            <p
              className="text-[14px] leading-[2] text-[#555555]"
              style={fontAr}
            >
              We collect limited business and operational data to execute influencer marketing campaigns effectively. We do not collect sensitive personal data and implement reasonable security measures to protect your information.
            </p>
            <p
              className="text-[12px] leading-[2] text-[#888888] italic"
              style={fontAr}
            >
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Table of Contents */}
          <div
            className="bg-[#f9f9f9] border border-[#e8e8e8] p-8 rounded-none"
            style={{ ...fontAr }}
          >
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#1535C2] mb-6" style={fontAr}>
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[11px] text-[#1535C2] hover:text-[#2a4fd4] transition-colors uppercase tracking-[0.15em]"
                  style={fontAr}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="hr-line mx-auto max-w-[1440px]" />

      {/* Content Sections */}
      <section
        className="container-custom py-20"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="max-w-[960px] mx-auto space-y-0">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="border-b border-[#e8e8e8] py-12 scroll-mt-24"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between gap-6 group mb-0 hover:opacity-70 transition-opacity"
                style={fontAr}
              >
                <div className="text-left flex-1">
                  <h2
                    className="font-bold uppercase text-[#0a0a0a]"
                    style={{
                      fontSize: "clamp(18px, 2vw, 28px)",
                      letterSpacing: "-0.02em",
                      lineHeight: "1.2",
                      ...fontAr,
                    }}
                  >
                    {index + 1}. {section.title}
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#1535C2] transition-transform duration-300 flex-shrink-0 ${
                    expandedSections[section.id] ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Section Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSections[section.id] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-8 space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-[14px] leading-[2] text-[#555555]"
                      style={fontAr}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="hr-line mx-auto max-w-[1440px]" />

      {/* CTA Section */}
      <section
        className="container-custom py-20"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="max-w-[960px] mx-auto text-center">
          <h3
            className="text-[20px] font-bold uppercase text-[#0a0a0a] mb-6 tracking-[-0.02em]"
            style={fontAr}
          >
            Have Questions About Your Privacy?
          </h3>
          <p
            className="text-[14px] leading-[2] text-[#555555] mb-10"
            style={fontAr}
          >
            Contact us and we'll respond within 30 days. Your data privacy is our priority.
          </p>
          <a href="/contact-us" className="btn-primary" style={fontAr}>
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
