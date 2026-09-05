# History & Next Plan - Sesi 1 September 2026

## Ringkasan Sesi Hari Ini

Branding produk resmi diganti: **AgentOS → WEAST** (dengan tagline "WEAST by EasternStack").
Semua perubahan sudah di-commit dan di-push ke `origin/main` (commit `31993a1`).

## Yang Sudah Dikerjakan (Done)

### 1. Rebranding WEAST
- Badge hero: "WEAST by EasternStack" (diperbesar, tunggu logo jadi untuk diganti `<img>` logo)
- Title & meta description halaman `index page /`: "EasternStack WEAST"
- Teks hero, sidebar demo ("WEAST v0.1.0"), runtime view (`weast/worker:0.1.0`), `llms-full.txt`
- Yang BELUM di-rename (internal, bukan teks user-visible):
  - Nama komponen/file kode: `AgentOsShell.tsx`, `AgentOsDemo.tsx`, dst.
  - Path asset: `/agentos/screens/...`, `/agentos/models/...`
  - Folder lama `easternstack-agentos-homepage/`

### 2. Halaman index page / (Landing WEAST)
- Hero baru: "Where enterprise AI becomes real work"
  + subtext: "Build, run, and govern AI workflows across your people, systems, and data."
  + checklist fitur (agents/approvals/traces, model control, tenant boundaries, cost visibility)
  + teks bold: "Live product tour: explore WEAST right here, no account needed..."
- Layout 2 kolom (kiri 4/12 teks, kanan 8/12 demo langsung), container max 1600px, rata atas (items-start)
- Tombol "See it in action" dihapus (demo langsung terlihat)
- Konten dipindah dari halaman lain:
  - Model providers: dari `/solutions` → `index page /`
  - CORE CAPABILITIES + HOW EASTERNSTACK DELIVERS AI: dari homepage (`/`) → `index page /`
- CTA bawah: "Bring agentic AI to your enterprise" + teks baru ngejual:
  "Talk to our team and deploy WEAST on your terms: any public cloud, private cloud, VPC, or fully on-premise. Same platform, same security, wherever your data lives."

### 3. Improvements Interactive Demo (Tour)
- **Agent Chat:**
  - Rail kiri collapsible, DEFAULT COLLAPSED (biar lega)
  - Thinking & Plan otomatis collapse setelah result selesai diketik, bisa diklik untuk expand lagi
  - Result dirapikan jadi format memo terstruktur (metrik per baris)
- **Agent Studio:** default zoom flow = 84% (sebelumnya 132%)
- **Document Intelligence:**
  - Folder di rail kiri bisa collapse/expand dengan animasi smooth
  - Isi folder: contoh dokumen + info OCR (mis. "OCR 6.2s · 12 pg")
  - Klik file → buka detail view dengan pipeline OCR + biaya per dokumen (dinamis)

## Next Plan (Belum Dieksekusi)

### Rombak halaman /solutions per platform WEAST
Diskusi terakhir: halaman `/solutions` mau dipecah per section berdasarkan **3 platform**:
1. **WEAST Core** - Agentic platform (Agent Studio, Agent Editor, Document Intelligence, Workspace)
2. **WEAST for ABI** - AgenticBI / Agentic Pipeline (upload → validate → transform → visualize)
3. **WEAST for Omnichannel** - Sales Transition Engine

Mapping konten lama → baru:
- Tab "Agentic AI" + "IDP" + "Workspace" → WEAST Core
- Tab "ABI (AgenticBI)" → WEAST for ABI
- Tab "Pipeline Relay" (Sales Transition Engine) → WEAST for Omnichannel
- Trust & security section tetap global (berlaku semua platform)
- Use case dipakai sebagai pembuka cerita tiap platform (masalah → hasil → fitur)

**2 opsi yang masih menunggu keputusan user:**
- **Opsi A:** `/solutions` tetap 1 halaman, dirombak jadi 3 section platform + animasi/interactive demo gaya `index page /`
- **Opsi B:** `/solutions` jadi hub + 3 sub-halaman detail:
  `/solutions/weast-core`, `/solutions/weast-abi`, `/solutions/weast-omnichannel`
  (lebih besar kerjanya, lebih scalable, SEO lebih bagus)

### Lain-lain (kalau sempat)
- Ganti badge "WEAST by EasternStack" dengan logo kalau logo sudah jadi
- Opsional: rename komponen internal `AgentOs*` → `Weast*` + pindah asset `/agentos/` → `/weast/`
- Opsional: hapus/archive folder `easternstack-agentos-homepage/` (prototype lama)

## Info Teknis

- Local dev: `PORT=3005 npm run start` (atau `npm run dev`)
- Halaman utama yang dikerjakan: `index page /` (landing WEAST), `/solutions`, `/` (home)
- Komponen demo: `src/components/showcase/` (StudioHero, AgentOsDemo, AgentOsShell, AgentChatView, DocIntelligenceView, AgentStudioView, AgentRuntimeView)


## Perhatian
- Tolong selalu sertakan SEO supaya saat orang search lewat pencarian dari mana saja nama EasternStack/WEAST bisa tampil halaman utama, dan pencarian lewat AI Model pun juga sama
