import { Award, CheckCircle } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'Red Hat',
      link: 'https://www.credly.com/badges/7a1baa8a-8a65-4342-8c38-6d4eff067d52/public_url',
      icon: <Award className="text-accent" size={32} />
    },
    {
      title: 'FreeCodeCamp Labs - Docker for the Absolute Beginner',
      issuer: 'KodeKloud',
      link: 'https://learn.kodekloud.com/user/certificate/be911ecc-3b52-4621-890c-af8ea684d2a9',
      icon: <CheckCircle className="text-accent" size={32} />
    },
    {
      title: 'Salesforce Programming Architect',
      issuer: 'TechForce Academy, Australia',
      link: 'https://www.linkedin.com/posts/lalit-punjabi-443911312_thrilled-to-share-that-ive-successfully-activity-7373400354555793408-YooC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-DZjMB9kaUKK1D7HPfC1gWzu2nAOtA5eA',
      icon: <CheckCircle className="text-accent" size={32} />
    },
    {
      title: 'Oracle Fusion Cloud Applications ERP Certified Foundations Associate',
      issuer: 'Oracle',
      link: 'https://www.linkedin.com/posts/lalit-punjabi-443911312_oraclecloud-erp-certification-activity-7310174042748051456-RnuW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-DZjMB9kaUKK1D7HPfC1gWzu2nAOtA5eA',
      icon: <CheckCircle className="text-accent" size={32} />
    },
    {
      title: 'Prompt Design in Vertex AI Skill Badge',
      issuer: 'Google',
      link: 'https://www.cloudskillsboost.google/public_profiles/84461837-00c2-4e94-a738-5a096c760880/badges/14288873',
      icon: <Award className="text-accent" size={32} />
    },
    {
      title: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Skill Badge',
      issuer: 'Google',
      link: 'https://www.credly.com/badges/519ab086-83fb-40bf-8027-0b722a33840c/linked_in?t=szrhow',
      icon: <Award className="text-accent" size={32} />
    },
    {
      title: 'Develop GenAI Apps with Gemini and Streamlit Skill Badge',
      issuer: 'Google',
      link: 'https://www.credly.com/badges/03b16f93-1f35-4b90-9f4c-6c8f349568ee/linked_in?t=szqx9a',
      icon: <Award className="text-accent" size={32} />
    },
    {
      title: 'Build Real World AI Applications with Gemini and Imagen Skill Badge',
      issuer: 'Google',
      link: 'https://www.cloudskillsboost.google/public_profiles/84461837-00c2-4e94-a738-5a096c760880/badges/15570327',
      icon: <Award className="text-accent" size={32} />
    },
    {
      title: 'Explore Generative AI with the Vertex AI Gemini API Skill Badge',
      issuer: 'Google',
      link: 'https://www.credly.com/badges/fed6499e-78c9-4218-906b-15af45f2aaa6/linked_in?t=szsrbb',
      icon: <Award className="text-accent" size={32} />
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-2 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {certifications.map((cert, index) => (
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer" 
              key={index} 
              className="cert-card p-6 rounded-xl flex items-start gap-4 transition-all hover:shadow-glow group glass-panel relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-bg-tertiary p-3 rounded-xl border border-color relative z-10 group-hover:border-accent-primary/40 transition-colors">
                {cert.icon}
              </div>
              <div className="relative z-10 flex-1">
                <h3 className="text-[1.05rem] leading-snug font-semibold mb-2 group-hover:text-accent-primary transition-colors text-text-primary">{cert.title}</h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="font-medium text-text-secondary/80 bg-bg-secondary px-2 py-0.5 rounded border border-color">{cert.issuer}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
