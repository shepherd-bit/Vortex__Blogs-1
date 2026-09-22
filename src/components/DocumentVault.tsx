import React, { useState } from 'react';
import { FileText, FileSpreadsheet, ChartColumn, ArrowUpRight, Check } from 'lucide-react';
import { VaultDocument, FileType } from '../types';

interface DocumentVaultProps {
  documents: VaultDocument[];
}

export const DocumentVault: React.FC<DocumentVaultProps> = ({ documents }) => {
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestEmail, setRequestEmail] = useState('');
  const [requestSuccess, setRequestSuccess] = useState(false);

  const getDocIcon = (type: FileType) => {
    switch (type) {
      case 'CSV':
        return <FileSpreadsheet className="w-4 h-4 text-black" />;
      case 'Deck':
        return <ChartColumn className="w-4 h-4 text-black" />;
      default:
        return <FileText className="w-4 h-4 text-black" />;
    }
  };

  const handleDownload = (docName: string) => {
    setDownloadedDoc(docName);
    setTimeout(() => setDownloadedDoc(null), 2500);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestEmail) return;
    setRequestSuccess(true);
    setTimeout(() => {
      setRequestSuccess(false);
      setShowRequestModal(false);
      setRequestEmail('');
    }, 2000);
  };

  return (
    <section id="vault" className="max-w-[1280px] mx-auto px-6 md:px-8 pb-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] leading-none">
            Document Vault
          </h3>
          <p className="text-[13px] text-black/50 mt-2">
            Texas UAS docs • FAA + TxDOT • No paywall.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[11px] text-black/40">
          <span>Scroll →</span>
          <div className="w-10 h-[2px] bg-black/10 rounded-full" />
        </div>
      </div>

      {downloadedDoc && (
        <div className="mt-4 p-3 bg-black text-[#E8FF5A] rounded-xl text-[12px] font-medium flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#E8FF5A]" />
            <span>Vault file download verified: <strong>{downloadedDoc}</strong></span>
          </div>
          <span className="text-[11px] opacity-60">SHA-256 Validated</span>
        </div>
      )}

      <div className="mt-6 -mx-6 md:mx-0">
        <div className="flex gap-4 overflow-auto no-scrollbar px-6 md:px-0 pb-4 snap-x snap-mandatory">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[280px] rounded-[24px] bg-white border border-black/10 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center">
                    {getDocIcon(doc.type)}
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-black text-white font-semibold tracking-wider">
                    {doc.type}
                  </span>
                </div>
                <div className="mt-5 text-[14px] font-semibold leading-tight text-[#111] truncate" title={doc.name}>
                  {doc.name}
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-black/40 font-mono">
                  <span>{doc.size}</span>
                  <span className="w-1 h-1 rounded-full bg-black/20" />
                  <span>{doc.date}</span>
                </div>
              </div>

              <div 
                onClick={() => handleDownload(doc.name)}
                className="mt-5 h-[44px] rounded-[14px] bg-[#F2EDE8] flex items-center px-3 gap-2 cursor-pointer hover:bg-black hover:text-white transition-colors group/btn"
              >
                <div className="flex-1 h-1.5 bg-black/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full group-hover/btn:bg-[#E8FF5A] transition-colors" 
                    style={{ width: `${60 + idx * 7}%` }} 
                  />
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}

          {/* Request a doc card */}
          <div 
            onClick={() => setShowRequestModal(true)}
            className="snap-start shrink-0 w-[280px] rounded-[24px] bg-[#E8FF5A] border border-black/10 p-5 flex flex-col justify-between cursor-pointer hover:bg-[#E8FF5A]/90 hover:scale-[1.02] transition"
          >
            <div className="w-10 h-10 rounded-full bg-black text-[#E8FF5A] flex items-center justify-center font-bold text-lg">
              +
            </div>
            <div>
              <div className="text-[20px] font-bold leading-[1.1] text-black">
                Request a doc
              </div>
              <div className="text-[12px] mt-1 text-black/60 font-medium">
                FAA / TxDOT / Investor — we respond within 24h.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Requesting Doc */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] p-6 max-w-md w-full shadow-2xl border border-black/10 animate-in fade-in zoom-in-95">
            <h4 className="text-[20px] font-bold text-[#111]">Request Unreleased Telemetry</h4>
            <p className="text-[13px] text-black/60 mt-1">
              Provide your official organization or firm email. Documents are released subject to FAA Part 107 NDA verification.
            </p>

            {requestSuccess ? (
              <div className="mt-4 p-4 bg-emerald-50 text-emerald-800 rounded-[16px] text-[13px] flex items-center gap-2 font-medium">
                <Check className="w-5 h-5 text-emerald-600" />
                Request received. Dispatching secure link to your inbox.
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="mt-4 space-y-3">
                <input
                  type="email"
                  required
                  placeholder="name@organization.gov or .com"
                  value={requestEmail}
                  onChange={(e) => setRequestEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-full bg-[#FAF9F6] border border-black/10 text-[13px] outline-none focus:border-black"
                />
                <div className="flex gap-2 justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setShowRequestModal(false)}
                    className="px-4 h-10 rounded-full text-[13px] font-medium text-black/60 hover:text-black"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 h-10 rounded-full bg-black text-white text-[13px] font-medium hover:bg-black/90"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
