"use client";

import { WeastShell, ViewHeader, ShieldIcon } from "./WeastShell";
import type { WeastView } from "./WeastShell";

const MENU: { section: string; items: string[] }[] = [
  { section: "Accounts", items: ["Users", "Workspaces"] },
  { section: "Security & Audit", items: ["Platform Keys", "Activity"] },
];

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

export default function AdminLockedView({ onNavigate }: { onNavigate: (v: WeastView) => void }) {
  const header = (
    <ViewHeader icon={<ShieldIcon className="h-4.5 w-4.5" />} title="Platform" subtitle="Administration" />
  );

  return (
    <WeastShell active="admin" onNavigate={onNavigate} header={header}>
      <div className="flex h-full">
        {/* inner sidebar mirrors the real admin, locked */}
        <aside className="hidden w-52 shrink-0 overflow-y-auto border-r border-slate-200 bg-white p-3 lg:block">
          {MENU.map((group) => (
            <div key={group.section} className="mb-4">
              <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {group.section}
              </p>
              {group.items.map((item) => (
                <span
                  key={item}
                  className="mb-0.5 flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[12px] font-medium text-slate-400"
                >
                  <span className="flex-1">{item}</span>
                  <LockIcon className="h-3 w-3 text-slate-300" />
                </span>
              ))}
            </div>
          ))}
        </aside>

        {/* main: big lock */}
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-300 shadow-sm">
            <LockIcon className="h-10 w-10" />
          </span>
          <p className="mt-5 text-lg font-bold text-slate-800">Platform Admin</p>
          <span className="mt-2 flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <LockIcon className="h-3 w-3" /> Onboarding only
          </span>
          <p className="mt-4 max-w-sm text-[12.5px] leading-relaxed text-slate-500">
            User management, workspaces, platform keys, and the activity audit are walked
            through with your team during onboarding, so the public tour stops here.
          </p>
        </div>
      </div>
    </WeastShell>
  );
}
