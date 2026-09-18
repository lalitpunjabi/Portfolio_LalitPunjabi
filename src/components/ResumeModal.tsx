import { X, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const resumeUrl = "https://drive.google.com/file/d/1Z3KWY-u0CRRqhxd26ZznGPZ0TBoG8dHk/view?usp=sharing";
  const embedUrl = "https://drive.google.com/file/d/1Z3KWY-u0CRRqhxd26ZznGPZ0TBoG8dHk/preview";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div 
        className="glass-panel w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden flex flex-col border border-accent-primary/40 shadow-[0_0_50px_rgba(0,229,255,0.2)] relative bg-[#0b0f19]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#111827] border-b border-border-color px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent-primary/10 border border-accent-primary/30 text-accent-primary shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-text-primary flex items-center gap-2">
                Lalit Punjabi – Official Resume
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hidden sm:flex items-center gap-1">
                  <CheckCircle2 size={10} /> Certified DevOps
                </span>
              </h3>
              <p className="text-xs text-text-tertiary font-mono">AWS • Kubernetes • Terraform • DevSecOps • RHCSA</p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline text-xs px-3.5 py-2 flex items-center gap-1.5 text-text-secondary hover:text-accent-primary"
            >
              <Download size={14} /> Download PDF
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-xs px-3.5 py-2 flex items-center gap-1.5"
            >
              <ExternalLink size={14} /> Open in Google Drive
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-secondary hover:bg-white/10 text-text-tertiary hover:text-text-primary transition-colors border border-border-color ml-1"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded Document Preview Body */}
        <div className="flex-1 bg-[#0d1117] relative overflow-hidden flex flex-col items-center justify-center">
          <iframe
            src={embedUrl}
            title="Lalit Punjabi Resume"
            className="w-full h-full border-none"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
