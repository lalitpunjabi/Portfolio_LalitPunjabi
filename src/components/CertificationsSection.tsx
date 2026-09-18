import { Award, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { certificationsData } from '../data/certifications';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Industry Certifications
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Verified technical credentials in Linux Administration, Cloud Platform, and Database Systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <SpotlightCard
              key={cert.id}
              className="p-6 rounded-xl overflow-hidden hover-lift hover:border-accent-primary/40 animate-scale-in tech-border"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary border border-accent-primary/20 shrink-0">
                  <Award size={28} />
                </div>
                
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary leading-snug group-hover:text-accent-primary transition-colors">
                      {cert.name}
                    </h3>
                    <span className={`px-2.5 py-0.5 text-xs font-mono rounded-full border ${cert.badgeColor} shrink-0`}>
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-accent-primary">
                    Issuer: {cert.issuer}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-primary hover:underline pt-1"
                    >
                      <ExternalLink size={12} /> Verify Credential ↗
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

