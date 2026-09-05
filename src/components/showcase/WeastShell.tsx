"use client";

import type { ReactNode } from "react";

export type WeastView = "docs" | "chat" | "studio" | "runtime";

/* ---------- tiny icon set ---------- */

type IconProps = { className?: string };

const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ScanIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10" />
  </svg>
);
export const ChatIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
export const SparkIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z" />
  </svg>
);
export const ServerIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);
export const CodeIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
  </svg>
);
export const ShieldIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
export const GearIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);
export const LogoutIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
);
export const BotIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <rect x="5" y="8" width="14" height="11" rx="2" />
    <path d="M12 8V5M9 5h6M9.5 13h.01M14.5 13h.01M9 16.5h6" />
  </svg>
);
export const FolderIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
export const FileIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6" />
  </svg>
);
export const SearchIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);
export const UploadIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M12 16V4m0 0L7 9m5-5l5 5M4 20h16" />
  </svg>
);
export const BackIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M19 12H5m0 0l6 6m-6-6l6-6" />
  </svg>
);
export const SendIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
  </svg>
);
export const ClipIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M21.4 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.2-9.19a4 4 0 0 1 5.65 5.66l-9.2 9.19a2 2 0 0 1-2.82-2.83l8.49-8.48" />
  </svg>
);
export const MoonIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);
export const RefreshIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6" />
  </svg>
);
export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);
export const GridIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
export const ListIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
  </svg>
);
export const FlowIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <path d="M10 6.5h5a2 2 0 0 1 2 2V14" />
  </svg>
);
export const PlusIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const UserIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
  </svg>
);
export const CheckIcon = ({ className }: IconProps) => (
  <svg className={className} {...svgProps} strokeWidth={2.4}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
export const SpinnerIcon = ({ className }: IconProps) => (
  <svg className={`animate-spin ${className ?? ""}`} {...svgProps}>
    <path d="M21 12a9 9 0 1 1-9-9" />
  </svg>
);

/* ---------- shared bits ---------- */

export function StatusBadge({
  kind,
  label,
}: {
  kind: "online" | "offline" | "sleeping" | "error" | "indexed";
  label: string;
}) {
  const styles: Record<string, string> = {
    online: "border-emerald-200 bg-emerald-50 text-emerald-600",
    indexed: "border-emerald-200 bg-emerald-50 text-emerald-600",
    offline: "border-slate-200 bg-slate-100 text-slate-500",
    sleeping: "border-indigo-200 bg-indigo-50 text-indigo-500",
    error: "border-red-200 bg-red-50 text-[#E31E24]",
  };
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-wider ${styles[kind]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          kind === "online" || kind === "indexed"
            ? "bg-emerald-500"
            : kind === "sleeping"
              ? "bg-indigo-400"
              : kind === "error"
                ? "bg-[#E31E24]"
                : "bg-slate-400"
        }`}
      />
      {label}
    </span>
  );
}

export function SlugChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-500">
      {children}
    </span>
  );
}

/* ---------- shell ---------- */

const NAV: {
  section: string;
  items: { id: WeastView | "api"; label: string; icon: (p: IconProps) => ReactNode; count?: number }[];
}[] = [
  { section: "Knowledge", items: [{ id: "docs", label: "Document Intelligence", icon: ScanIcon }] },
  {
    section: "Build",
    items: [
      { id: "chat", label: "Agent Chat", icon: ChatIcon },
      { id: "studio", label: "Agent Studio", icon: SparkIcon },
      { id: "runtime", label: "Agent Runtime", icon: ServerIcon, count: 1 },
    ],
  },
  { section: "Integration", items: [{ id: "api", label: "Open API Access", icon: CodeIcon }] },
];

export function WeastShell({
  active,
  onNavigate,
  header,
  children,
}: {
  active: WeastView;
  onNavigate: (view: WeastView) => void;
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full bg-white text-slate-700">
      {/* Sidebar */}
      <aside className="hidden w-56 shrink-0 flex-col border-r border-slate-200 bg-white md:flex">
        <div className="px-4 pb-4 pt-5">
          <img
            src="/weast/weast-logo-black.png"
            alt="WEAST by EasternStack.AI"
            className="h-9 w-auto"
          />
        </div>

        <div className="mx-3 mb-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-slate-800">Credit Scoring</p>
            <ChevronDownIcon className="h-3.5 w-3.5 text-slate-400" />
          </div>
          <span className="mt-1 inline-block rounded bg-red-50 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-[#E31E24]">
            ADMIN
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3">
          {NAV.map((group) => (
            <div key={group.section} className="mb-4">
              <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {group.section}
              </p>
              {group.items.map((item) => {
                const isActive = item.id === active;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => item.id !== "api" && onNavigate(item.id)}
                    className={`relative mb-0.5 flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px] font-medium transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#E31E24]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-[-12px] top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-[#E31E24]" />
                    )}
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.count !== undefined && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="border-t border-slate-100 px-3 py-3">
          <button className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50">
            <ShieldIcon className="h-4 w-4" /> Platform Admin
          </button>
          <button className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50">
            <GearIcon className="h-4 w-4" /> Workspace Settings
          </button>
          <div className="mt-2 flex items-center gap-2.5 rounded-lg border border-slate-200 px-2.5 py-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white">
              E
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[12px] font-semibold text-slate-800">ES Admin</p>
              <p className="truncate text-[10px] text-slate-400">Admin · Credit Scoring</p>
            </div>
            <LogoutIcon className="h-3.5 w-3.5 text-slate-400" />
          </div>
          <p className="mt-2 px-1 text-[10px] text-slate-300">WEAST v0.1.0</p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {header}
        <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50">{children}</div>
      </div>
    </div>
  );
}

export function ViewHeader({
  icon,
  title,
  subtitle,
  right,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-3 py-3 sm:px-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E31E24]">
        {icon}
      </span>
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-[15px] font-bold text-slate-900">{title}</p>
        {subtitle && <p className="truncate text-[11px] text-slate-400">{subtitle}</p>}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}
