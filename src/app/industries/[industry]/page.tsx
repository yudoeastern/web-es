'use client';

import Link from "next/link";
import { use } from "react";

const industryData: Record<string, { icon: string; title: string; description: string; metrics: Array<{ value: string; label: string; desc: string }> }> = {
  "real-estate": {
    icon: "🏢",
    title: "REAL ESTATE",
    description: "Transform property management, valuation, and customer experience with AI-powered real estate solutions.",
    metrics: [
      { value: "50%", label: "Faster Valuation", desc: "AI-powered property valuation with market analysis." },
      { value: "40%", label: "Higher Conversion", desc: "Better lead qualification and matching." },
      { value: "60%", label: "Time Savings", desc: "Automated documentation and compliance." },
    ],
  },
  insurance: {
    icon: "🛡️",
    title: "INSURANCE",
    description: "Streamline claims processing, underwriting, and customer service with AI-powered insurance solutions.",
    metrics: [
      { value: "70%", label: "Faster Claims", desc: "Automated claims processing and fraud detection." },
      { value: "35%", label: "Lower Costs", desc: "Reduced operational costs through automation." },
      { value: "90%", label: "Accuracy", desc: "Improved underwriting accuracy with AI." },
    ],
  },
  consulting: {
    icon: "💼",
    title: "CONSULTING",
    description: "Enhance client insights, research, and deliverables with AI-powered consulting tools.",
    metrics: [
      { value: "60%", label: "Faster Research", desc: "AI-powered market research and analysis." },
      { value: "45%", label: "Better Insights", desc: "Data-driven recommendations and insights." },
      { value: "50%", label: "Time Savings", desc: "Automated report generation and documentation." },
    ],
  },
  education: {
    icon: "🎓",
    title: "EDUCATION",
    description: "Personalize learning, automate administration, and improve student outcomes with AI.",
    metrics: [
      { value: "40%", label: "Better Outcomes", desc: "Personalized learning paths for students." },
      { value: "50%", label: "Admin Efficiency", desc: "Automated grading and administration." },
      { value: "80%", label: "Engagement", desc: "Interactive AI-powered learning experiences." },
    ],
  },
  hospitality: {
    icon: "🏨",
    title: "HOSPITALITY",
    description: "Enhance guest experience, optimize operations, and boost revenue with AI-powered hospitality solutions.",
    metrics: [
      { value: "30%", label: "Higher Revenue", desc: "Dynamic pricing and personalized offers." },
      { value: "50%", label: "Guest Satisfaction", desc: "AI-powered concierge and support." },
      { value: "40%", label: "Operational Efficiency", desc: "Automated booking and operations." },
    ],
  },
  "food-beverage": {
    icon: "🍔",
    title: "FOOD & BEVERAGE",
    description: "Optimize supply chain, personalize menus, and enhance customer experience with AI solutions.",
    metrics: [
      { value: "35%", label: "Reduced Waste", desc: "AI-powered demand forecasting." },
      { value: "25%", label: "Higher Sales", desc: "Personalized recommendations and menus." },
      { value: "45%", label: "Efficiency", desc: "Automated inventory and supply chain." },
    ],
  },
  "saas-software": {
    icon: "💻",
    title: "SAAS & SOFTWARE",
    description: "Accelerate development, improve customer support, and optimize operations with AI-powered software solutions.",
    metrics: [
      { value: "50%", label: "Faster Development", desc: "AI-assisted coding and testing." },
      { value: "40%", label: "Better Support", desc: "Automated customer support with AI." },
      { value: "55%", label: "Efficiency", desc: "Streamlined operations and workflows." },
    ],
  },
  gaming: {
    icon: "🎮",
    title: "GAMING",
    description: "Enhance player experience, optimize game development, and prevent fraud with AI gaming solutions.",
    metrics: [
      { value: "45%", label: "Player Engagement", desc: "Personalized gaming experiences." },
      { value: "60%", label: "Faster Development", desc: "AI-assisted game design and testing." },
      { value: "70%", label: "Fraud Prevention", desc: "Real-time cheating detection." },
    ],
  },
  cybersecurity: {
    icon: "🔒",
    title: "CYBERSECURITY",
    description: "Detect threats, automate response, and protect assets with AI-powered cybersecurity solutions.",
    metrics: [
      { value: "80%", label: "Threat Detection", desc: "AI-powered threat identification." },
      { value: "60%", label: "Faster Response", desc: "Automated incident response." },
      { value: "50%", label: "Cost Savings", desc: "Reduced breach impact and costs." },
    ],
  },
  automotive: {
    icon: "🚗",
    title: "AUTOMOTIVE",
    description: "Optimize manufacturing, enhance safety, and improve customer experience with AI automotive solutions.",
    metrics: [
      { value: "40%", label: "Efficiency", desc: "Optimized manufacturing processes." },
      { value: "50%", label: "Safety", desc: "AI-powered safety systems." },
      { value: "35%", label: "Customer Satisfaction", desc: "Personalized customer experiences." },
    ],
  },
  chemical: {
    icon: "🧪",
    title: "CHEMICAL",
    description: "Optimize production, ensure safety, and reduce environmental impact with AI chemical solutions.",
    metrics: [
      { value: "30%", label: "Production Efficiency", desc: "Optimized chemical processes." },
      { value: "50%", label: "Safety", desc: "AI-powered safety monitoring." },
      { value: "40%", label: "Environmental Impact", desc: "Reduced waste and emissions." },
    ],
  },
};

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const { industry } = use(params);
  const data = industryData[industry] || {
    icon: "🏭",
    title: industry.replace(/-/g, " ").toUpperCase(),
    description: "Transform your industry with AI-powered solutions for intelligent automation and enhanced customer experiences.",
    metrics: [
      { value: "60%", label: "Cost Reduction", desc: "Average operational cost savings through AI automation." },
      { value: "40%", label: "Productivity", desc: "Employee productivity improvement with AI assistance." },
      { value: "90%", label: "Accuracy", desc: "Improvement in decision quality with AI insights." },
    ],
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
              <span className="text-primary-orange text-sm font-semibold">{data.icon} {data.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
              AI FOR <span className="gradient-text">{data.title}</span>
            </h1>
            <p className="text-xl text-text-secondary">{data.description}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">AI USE CASES FOR {data.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.metrics.map((metric, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-text-dark font-semibold mb-2">{metric.label}</div>
                <p className="text-text-secondary text-sm">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">TRANSFORM YOUR {data.title} BUSINESS</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Let&apos;s discuss how AI can enhance your operations.</p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">Schedule Consultation</Link>
        </div>
      </section>
    </div>
  );
}
