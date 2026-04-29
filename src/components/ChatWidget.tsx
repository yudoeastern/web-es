'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Inject chat widget styles
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --es-red: #E31E24;
        --es-red-dark: #C4181E;
        --es-dark: #1A1A1A;
        --es-bg: #F9FAFB;
        --es-border: #E5E7EB;
      }

      #chat-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        display: none;
        z-index: 9998;
      }

      #chat-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--es-red), var(--es-red-dark));
        color: #fff;
        font-size: 28px;
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(227, 30, 36, 0.4);
        z-index: 9999;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #chat-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 12px 32px rgba(227, 30, 36, 0.5);
      }

      #chat-widget {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 380px;
        height: 580px;
        max-height: calc(100vh - 120px);
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 9999;
        border: 1px solid var(--es-border);
      }

      #chat-header {
        background: linear-gradient(135deg, var(--es-red), var(--es-red-dark));
        color: white;
        padding: 14px 18px;
        padding-top: max(14px, env(safe-area-inset-top));
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
      }

      #chat-header .logo-wrapper {
        position: relative;
        flex-shrink: 0;
      }

      #chat-header .logo {
        width: 36px;
        height: 36px;
        object-fit: contain;
        border-radius: 50%;
        background: white;
        padding: 4px;
      }

      #chat-header .online-status {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 12px;
        height: 12px;
        background: #22c55e;
        border: 2px solid var(--es-red);
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.1); }
      }

      #chat-header .title-container {
        flex: 1;
        min-width: 0;
      }

      #chat-header .title { font-weight: 700; font-size: 15px; line-height: 1.2; }
      #chat-header .subtitle { font-size: 11px; opacity: 0.9; margin-top: 2px; line-height: 1.2; }
      #chat-header span { cursor: pointer; font-size: 22px; transition: transform 0.2s; flex-shrink: 0; }
      #chat-header span:hover { transform: scale(1.2); }

      #chat-body {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        background: var(--es-bg);
      }

      .bubble {
        max-width: 85%;
        padding: 12px 16px;
        border-radius: 16px;
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 1.6;
        animation: slideIn 0.3s ease;
      }

      @keyframes slideIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .bot {
        background: #fff;
        border: 1px solid var(--es-border);
        color: #111;
        border-bottom-left-radius: 4px;
      }

      .user {
        background: linear-gradient(135deg, var(--es-red), var(--es-red-dark));
        color: #fff;
        margin-left: auto;
        border-bottom-right-radius: 4px;
      }

      #chat-input {
        display: flex;
        padding: 12px 16px;
        border-top: 1px solid var(--es-border);
        background: #fff;
        gap: 8px;
      }

      #chat-input input {
        flex: 1;
        padding: 12px 16px;
        border-radius: 24px;
        border: 1px solid var(--es-border);
        outline: none;
        font-size: 14px;
        transition: border-color 0.2s;
      }

      #chat-input input:focus {
        border-color: var(--es-red);
      }

      #chat-input button {
        padding: 12px 20px;
        border-radius: 24px;
        border: none;
        background: linear-gradient(135deg, var(--es-red), var(--es-red-dark));
        color: white;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.2s;
      }

      #chat-input button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(227, 30, 36, 0.3);
      }

      #chat-powered {
        font-size: 11px;
        text-align: center;
        padding: 8px 0 12px;
        background: #fff;
        border-top: 1px solid var(--es-border);
        color: #6b7280;
      }

      #chat-powered a {
        color: var(--es-red);
        text-decoration: none;
        font-weight: 600;
      }

      #chat-powered a:hover {
        text-decoration: underline;
      }

      .suggestion-chip {
        display: inline-block;
        padding: 6px 12px;
        margin: 3px;
        background: rgba(227, 30, 36, 0.1);
        color: var(--es-red);
        border-radius: 16px;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.2s;
        border: 1px solid rgba(227, 30, 36, 0.3);
        font-weight: 500;
        white-space: nowrap;
      }

      .suggestion-chip:hover {
        transform: translateY(-1px);
        box-shadow: 0 3px 10px rgba(227, 30, 36, 0.2);
        background: rgba(227, 30, 36, 0.2);
        border-color: var(--es-red);
      }

      #suggestions-container {
        padding: 8px 12px;
        background: #f9fafb;
        border-top: 1px solid var(--es-border);
        display: none;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 6px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }

      #suggestions-container::-webkit-scrollbar {
        display: none;
      }

      #suggestions-container.visible {
        display: flex;
      }

      #followup-suggestions {
        padding: 8px 12px;
        background: linear-gradient(180deg, #fff 0%, #f9fafb 100%);
        border-top: 1px solid var(--es-border);
        display: none;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 6px;
        animation: slideUp 0.3s ease;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }

      #followup-suggestions::-webkit-scrollbar {
        display: none;
      }

      #followup-suggestions.visible {
        display: flex;
      }

      @keyframes slideUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .typing::after {
        content: "⠋";
        animation: dots 1s infinite;
      }

      @keyframes dots {
        0% { content:"⠋"; }
        25% { content:"⠙"; }
        50% { content:"⠹"; }
        75% { content:"⠸"; }
        100% { content:"⠋"; }
      }

      @media (max-width: 480px) {
        #chat-toggle {
          bottom: 16px;
          right: 16px;
          width: 56px;
          height: 56px;
          font-size: 24px;
        }

        #chat-widget {
          bottom: 70px;
          right: 16px;
          left: 16px;
          width: calc(100% - 32px);
          height: calc(100vh - 140px);
          max-height: 500px;
          border-radius: 12px;
        }

        #chat-header {
          padding: 12px 16px;
          padding-top: max(12px, env(safe-area-inset-top));
          gap: 10px;
        }

        #chat-header .logo {
          width: 32px;
          height: 32px;
        }

        #chat-header .online-status {
          width: 10px;
          height: 10px;
          border-width: 2px;
        }

        #chat-header .title {
          font-size: 14px;
        }

        #chat-header .subtitle {
          font-size: 10px;
        }

        #chat-body {
          padding: 12px;
        }

        .bubble {
          max-width: 90%;
          padding: 10px 14px;
          font-size: 13px;
        }

        #chat-input {
          padding: 10px 12px;
        }

        #chat-input input {
          font-size: 13px;
          padding: 10px 14px;
        }

        #chat-input button {
          padding: 10px 16px;
          font-size: 13px;
        }
      }
    `;
    document.head.appendChild(style);

    // Inject chat widget HTML
    const chatHTML = `
      <div id="chat-overlay" onclick="closeChat()"></div>
      <button id="chat-toggle" onclick="openChat()">💬</button>
      
      <div id="chat-widget">
        <div id="chat-header">
          <div class="logo-wrapper">
            <img src="/favicon_io/apple-touch-icon.png" alt="EasternStack" class="logo" />
            <div class="online-status"></div>
          </div>
          <div class="title-container">
            <div class="title">EasternStack</div>
            <div class="subtitle">AI Customer Assistant</div>
          </div>
          <span onclick="closeChat()">×</span>
        </div>
        
        <div id="chat-body">
          <div class="bubble bot">
            <p><strong>Halo!</strong> 👋</p>
            <p>Saya <strong>EasternStack Assistant</strong>.<br>
            Ada yang bisa kami bantu terkait AI, Data, Cloud, atau Security?</p>
          </div>
        </div>

        <div id="followup-suggestions"></div>

        <div id="suggestions-container" class="visible">
          <button class="suggestion-chip" onclick="useSuggestion('Apa itu Agentic AI?')">Apa itu Agentic AI?</button>
          <button class="suggestion-chip" onclick="useSuggestion('Solusi AI apa saja yang tersedia?')">Solusi AI</button>
        </div>

        <div id="chat-input">
          <input id="msg" placeholder="Tulis pertanyaan Anda..." />
          <button onclick="send()">Kirim</button>
        </div>
        
        <div id="chat-powered">
          Powered by <a href="https://easternstack.com" target="_blank">easternstack.com</a>
        </div>
      </div>
    `;
    
    const container = document.createElement('div');
    container.innerHTML = chatHTML;
    document.body.appendChild(container);

    // Make functions globally available
    const chat = document.getElementById("chat-widget");
    const body = document.getElementById("chat-body");
    const overlay = document.getElementById("chat-overlay");

    (window as any).openChat = function() {
      if (chat) chat.style.display = "flex";
      if (overlay) overlay.style.display = "block";
    };

    (window as any).closeChat = function() {
      if (chat) chat.style.display = "none";
      if (overlay) overlay.style.display = "none";
    };

    // Listen for custom event to open chat from other pages
    window.addEventListener('open-chat-widget', () => {
      (window as any).openChat();
    });

    (window as any).addBubble = function(html: string, cls: string) {
      if (!body) return;
      const div = document.createElement("div");
      div.className = `bubble ${cls}`;
      div.innerHTML = html;
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
      return div;
    };

    (window as any).formatText = function(text: string) {
      let formatted = text;
      
      // Bold: *text* or **text**
      formatted = formatted.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      formatted = formatted.replace(/\*(.+?)\*/g, "<strong>$1</strong>");
      
      // Italic: _text_ or __text__
      formatted = formatted.replace(/__(.+?)__/g, "<em>$1</em>");
      formatted = formatted.replace(/_(.+?)_/g, "<em>$1</em>");
      
      // Bullet lists: - item or * item
      formatted = formatted.replace(/^\s*[-*]\s+(.+)/gm, "<li class='ml-4'>• $1</li>");
      
      // Numbered lists: 1. item
      formatted = formatted.replace(/^\s*\d+\.\s+(.+)/gm, "<li class='ml-4'>$1</li>");
      
      // Wrap consecutive <li> in <ul>
      formatted = formatted.replace(/(<li[^>]*>.*?<\/li>\n?)+/g, "<ul class='my-2'>$&</ul>");
      
      // Headers: # Header
      formatted = formatted.replace(/^### (.+)$/gm, "<h3 class='text-lg font-bold mt-4 mb-2'>$1</h3>");
      formatted = formatted.replace(/^## (.+)$/gm, "<h2 class='text-xl font-bold mt-4 mb-2'>$1</h2>");
      formatted = formatted.replace(/^# (.+)$/gm, "<h1 class='text-2xl font-bold mt-4 mb-2'>$1</h1>");
      
      // Line breaks
      formatted = formatted.replace(/\n/g, "<br>");
      
      // Clean up multiple <br>
      formatted = formatted.replace(/(<br>){3,}/g, "<br><br>");
      
      return formatted;
    };

    (window as any).useSuggestion = function(question: string) {
      const input = document.getElementById("msg") as HTMLInputElement;
      if (input) {
        input.value = question;
        (window as any).send();
      }
    };

    (window as any).hideSuggestions = function() {
      const container = document.getElementById("suggestions-container");
      if (container) {
        container.classList.remove("visible");
      }
    };

    // Streaming text effect for custom responses
    (window as any).streamResponse = function(htmlContent: string, topic: string, delay: number = 10) {
      const typing = (window as any).addBubble("EasternStack sedang mengetik<span class='typing'></span>", "bot");
      
      // Create empty bot bubble
      setTimeout(() => {
        typing.remove();
        const botBubble = (window as any).addBubble("", "bot");
        
        // Stream the HTML content character by character
        let i = 0;
        const streamInterval = setInterval(() => {
          if (i < htmlContent.length) {
            // Add chunks of characters for faster streaming
            const chunk = htmlContent.substring(i, i + 3);
            botBubble.innerHTML = (window as any).formatText(htmlContent.substring(0, i + 3));
            i += 3;
            
            // Auto scroll to bottom
            const body = document.getElementById("chat-body");
            if (body) {
              body.scrollTop = body.scrollHeight;
            }
          } else {
            clearInterval(streamInterval);
            // Show suggestions after streaming complete
            (window as any).showFollowUpSuggestions(topic);
          }
        }, delay);
      }, 500);
    };

    (window as any).showFollowUpSuggestions = function(topic: string, fromDify?: string[]) {
      const container = document.getElementById("followup-suggestions");
      if (!container) return;

      // If Dify provided suggestions, use them (prioritize Dify)
      if (fromDify && fromDify.length > 0) {
        // Take max 2 from Dify
        const selectedSuggestions = fromDify.slice(0, 2);
        
        container.innerHTML = selectedSuggestions
          .map(q => `<button class="suggestion-chip" onclick="useSuggestion('${q.replace(/'/g, "\\'")}')">${q}</button>`)
          .join("");

        container.classList.add("visible");
        
        if (body) {
          setTimeout(() => {
            body.scrollTop = body.scrollHeight;
          }, 100);
        }
        return;
      }

      // Otherwise use custom suggestions
      const suggestions: Record<string, string[]> = {
        "agentic": [
          "Bagaimana cara implementasi Agentic AI?",
          "Berapa harga Agentic AI Assistant?",
          "Bisa integrasi dengan CRM kami?"
        ],
        "solusi": [
          "Apa perbedaan Agentic AI vs Copilot?",
          "Bagaimana cara memilih solusi yang tepat?",
          "Bisa request demo?"
        ],
        "partner": [
          "Mengapa memilih cloud partners ini?",
          "Apa keuntungan partnership ini?",
          "Bagaimana dengan security?"
        ],
        "sales": [
          "Dimana office EasternStack?",
          "Berapa lama response time?",
          "Apa saja yang perlu disiapkan?"
        ],
        "implementasi": [
          "Apa saja tahap implementasi?",
          "Apakah ada training untuk tim kami?",
          "Bagaimana dengan maintenance setelah go-live?"
        ],
        "demo": [
          "Demo dilakukan online atau onsite?",
          "Berapa lama durasi demo?",
          "Bisa custom use case saat demo?"
        ],
        "harga": [
          "Apakah ada paket subscription?",
          "Apa saja yang termasuk dalam harga?",
          "Bisa payment term?"
        ],
        "dokumen": [
          "Jenis dokumen apa yang bisa diproses?",
          "Berapa akurasi OCR?",
          "Bisa handle tulisan tangan?"
        ],
        "copilot": [
          "Copilot untuk departemen apa saja?",
          "Bagaimana training copilot untuk tim kami?",
          "Apa perbedaan dengan AI Assistant?"
        ],
        "default": [
          "Bisa jelaskan lebih detail?",
          "Bagaimana cara memulai?",
          "Ada pertanyaan lain yang sering ditanyakan?"
        ]
      };

      let selectedSuggestions = suggestions[topic] || suggestions["default"];
      
      // Shuffle and pick 2 (instead of 3)
      selectedSuggestions = selectedSuggestions.sort(() => 0.5 - Math.random()).slice(0, 2);

      container.innerHTML = selectedSuggestions
        .map(q => `<button class="suggestion-chip" onclick="useSuggestion('${q.replace(/'/g, "\\'")}')">${q}</button>`)
        .join("");

      container.classList.add("visible");
      
      // Auto scroll to bottom
      if (body) {
        setTimeout(() => {
          body.scrollTop = body.scrollHeight;
        }, 100);
      }
    };

    (window as any).send = async function() {
      const input = document.getElementById("msg") as HTMLInputElement;
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;

      // Hide suggestions after first user message
      (window as any).hideSuggestions();

      (window as any).addBubble(text, "user");
      input.value = "";

      // Check for multiple topics in one question
      const lowerText = text.toLowerCase();
      const hasAgentic = lowerText.includes("apa itu agentic") || lowerText.includes("apa itu ai") || 
          lowerText.includes("agentic ai") || lowerText.includes("definisi ai") ||
          lowerText.includes("pengertian agentic") || lowerText.includes("apa itu agentic ai") ||
          lowerText.includes("solusi untuk agentic") || lowerText.includes("ada solusi agentic") ||
          lowerText.includes("solusi agentic ai") || lowerText.includes("butuh solusi agentic");
      
      const hasHarga = lowerText.includes("harga") || lowerText.includes("pricing") ||
          lowerText.includes("biaya") || lowerText.includes("cost") ||
          lowerText.includes("berapa harga") || lowerText.includes("harga implementasi") ||
          lowerText.includes("biaya implementasi") || lowerText.includes("harga solusi") ||
          lowerText.includes("biaya solusi") || lowerText.includes("paket harga") ||
          lowerText.includes("berapa biaya");
      
      const hasImplementasi = lowerText.includes("berapa lama implementasi") || lowerText.includes("durasi implementasi") || 
          lowerText.includes("waktu implementasi") || lowerText.includes("lama deploy") ||
          lowerText.includes("berapa lama pembuatan") || lowerText.includes("lama pembuatan") ||
          lowerText.includes("berapa lama pengerjaan") || lowerText.includes("durasi pengerjaan") ||
          lowerText.includes("berapa lama membuat") || lowerText.includes("lama membuat") ||
          lowerText.includes("timeline implementasi") || lowerText.includes("berapa lama");

      // If multiple topics detected, send to backend instead
      const topicCount = [hasAgentic, hasHarga, hasImplementasi].filter(Boolean).length;
      if (topicCount > 1) {
        // Multiple topics - let backend handle it
        (window as any).sendToBackend(text);
        return;
      }
      
      // Single topic - use custom responses
      
      // Custom responses for common sales/contact questions
      if (lowerText.includes("hubungi sales") || lowerText.includes("tim sales") ||
          lowerText.includes("contact sales") || lowerText.includes("kontak sales") ||
          lowerText.includes("berbicara dengan sales") || lowerText.includes("bicara sales")) {

        const content = "<strong>Hubungi Tim Sales EasternStack</strong><br><br>" +
          "Untuk terhubung dengan tim Sales, Anda dapat:<br><br>" +
          "📧 <strong>Email:</strong> sales&#64;easternstack.com<br>" +
          "📱 <strong>WhatsApp:</strong> Hubungi kami melalui tombol chat ini<br>" +
          "🌐 <strong>Website:</strong> easternstack.com<br><br>" +
          "Atau kunjungi halaman <a href='/contact' style='color: var(--es-red); font-weight: 600;'>Kontak</a> untuk mengirim pesan langsung.";
        
        (window as any).streamResponse(content, "sales");
        return;
      }

      // Custom response for pricing questions
      if (lowerText.includes("harga") || lowerText.includes("pricing") ||
          lowerText.includes("biaya") || lowerText.includes("cost") ||
          lowerText.includes("berapa harga") || lowerText.includes("harga implementasi") ||
          lowerText.includes("biaya implementasi") || lowerText.includes("harga solusi") ||
          lowerText.includes("biaya solusi") || lowerText.includes("paket harga") ||
          lowerText.includes("berapa biaya")) {

        const content = "<strong>Informasi Pricing</strong><br><br>" +
          "Solusi EasternStack disesuaikan dengan kebutuhan bisnis Anda. Untuk informasi pricing yang akurat, tim Sales kami akan membantu Anda berdasarkan:<br><br>" +
          "• Skala implementasi<br>" +
          "• Fitur yang dibutuhkan<br>" +
          "• Integrasi sistem<br><br>" +
          "Silakan hubungi tim Sales kami untuk konsultasi gratis!";
        
        (window as any).streamResponse(content, "harga");
        return;
      }

      // Custom response for demo questions
      if (lowerText.includes("demo") || lowerText.includes("demonstrasi")) {
        const content = "<strong>Request Demo</strong><br><br>" +
          "Kami dengan senang hati akan mendemonstrasikan solusi EasternStack untuk bisnis Anda!<br><br>" +
          "📅 <strong>Jadwalkan Demo:</strong> Kunjungi halaman <a href='/contact' style='color: var(--es-red); font-weight: 600;'>Kontak</a> dan pilih opsi 'Request Demo'<br><br>" +
          "Tim kami akan menghubungi Anda untuk mengatur sesi demo sesuai jadwal Anda.";
        
        (window as any).streamResponse(content, "demo");
        return;
      }

      // Custom response for partner questions
      if (lowerText.includes("partner") || lowerText.includes("mitra") || lowerText.includes("kerjasama") ||
          lowerText.includes("teknologi partner") || lowerText.includes("bermitra")) {

        const content = "<strong>Technology Partners EasternStack</strong><br><br>" +
          "EasternStack bermitra dengan penyedia teknologi global terkemuka untuk menghadirkan solusi terbaik:<br><br>" +
          "☁️ <strong>Cloud Providers:</strong><br>" +
          "• Alibaba Cloud<br>" +
          "• Huawei Cloud<br>" +
          "• Tencent Cloud<br><br>" +
          "🔒 <strong>Security Partners:</strong><br>" +
          "• AhnLab - Enterprise Security Solutions<br>" +
          "• TrueWatch - Security Monitoring<br><br>" +
          "⚙️ <strong>Infrastructure:</strong><br>" +
          "• OnePro<br><br>" +
          "Ingin tahu lebih lanjut? <a href='/platform' style='color: var(--es-red); font-weight: 600;'>Lihat Platform</a> atau <a href='/contact' style='color: var(--es-red); font-weight: 600;'>Hubungi Kami</a>.";
        
        (window as any).streamResponse(content, "partner");
        return;
      }

      // Custom response for "Apa itu Agentic AI"
      if (lowerText.includes("apa itu agentic") || lowerText.includes("apa itu ai") || 
          lowerText.includes("agentic ai") || lowerText.includes("definisi ai") ||
          lowerText.includes("pengertian agentic") || lowerText.includes("apa itu agentic ai") ||
          lowerText.includes("solusi untuk agentic") || lowerText.includes("ada solusi agentic") ||
          lowerText.includes("solusi agentic ai") || lowerText.includes("butuh solusi agentic")) {
        
        const content = "<strong>Apa itu Agentic AI?</strong><br><br>" +
          "<strong>Agentic AI</strong> adalah sistem AI cerdas yang dapat:<br><br>" +
          "✅ <strong>Memahami konteks</strong> bisnis dan intent user<br>" +
          "✅ <strong>Membuat keputusan</strong> secara mandiri<br>" +
          "✅ <strong>Menjalankan tugas</strong> di berbagai sistem (CRM, ERP, dll)<br>" +
          "✅ <strong>Belajar dan beradaptasi</strong> dengan kondisi baru<br><br>" +
          "Berbeda dengan chatbot tradisional yang hanya merespon prompt, Agentic AI dapat <strong>bertindak secara otonom</strong> untuk menyelesaikan workflow bisnis yang kompleks.<br><br>" +
          "📚 <a href='/solutions/ai' style='color: var(--es-red); font-weight: 600;'>Pelajari lebih lanjut tentang Solusi AI</a>";
        
        (window as any).streamResponse(content, "agentic");
        return;
      }

      // Custom response for "Solusi AI apa saja"
      if (lowerText.includes("solusi ai") || lowerText.includes("produk ai") || 
          lowerText.includes("layanan ai") || lowerText.includes("apa saja solusi")) {
        
        const content = "<strong>Solusi AI EasternStack</strong><br><br>" +
          "EasternStack menawarkan 4 solusi AI utama:<br><br>" +
          "🤖 <strong>1. Agentic AI Assistant</strong><br>" +
          "AI asisten yang dapat berinteraksi, reasoning, dan menjalankan workflow bisnis.<br><br>" +
          "📄 <strong>2. Intelligent Document Processing</strong><br>" +
          "AI untuk ekstraksi dan analisis dokumen otomatis (kontrak, invoice, dll).<br><br>" +
          "🏗️ <strong>3. AI Agent Builder</strong><br>" +
          "Platform untuk mendesain dan mengorkestrasi multiple AI agents.<br><br>" +
          "👥 <strong>4. Enterprise Copilot Suite</strong><br>" +
          "AI copilots untuk HR, Legal, Operations, dan tim bisnis lainnya.<br><br>" +
          "🔗 <a href='/solutions/ai' style='color: var(--es-red); font-weight: 600;'>Lihat Semua Solusi AI</a>";
        
        (window as any).streamResponse(content, "solusi");
        return;
      }

      // Custom response for "Berapa lama implementasi"
      if (lowerText.includes("berapa lama implementasi") || lowerText.includes("durasi implementasi") || 
          lowerText.includes("waktu implementasi") || lowerText.includes("lama deploy") ||
          lowerText.includes("berapa lama pembuatan") || lowerText.includes("lama pembuatan") ||
          lowerText.includes("berapa lama pengerjaan") || lowerText.includes("durasi pengerjaan") ||
          lowerText.includes("berapa lama membuat") || lowerText.includes("lama membuat") ||
          lowerText.includes("timeline implementasi") || lowerText.includes("berapa lama")) {
        
        const content = "<strong>Durasi Implementasi AI</strong><br><br>" +
          "Implementasi AI di EasternStack sangat cepat berkat framework yang sudah proven:<br><br>" +
          "⚡ <strong>Quick Win:</strong> 3-7 hari untuk use case sederhana<br>" +
          "🚀 <strong>Standard Implementation:</strong> 2-4 minggu untuk integrasi medium<br>" +
          "🏢 <strong>Enterprise Scale:</strong> 1-3 bulan untuk deployment kompleks<br><br>" +
          "Faktor yang mempengaruhi:<br>" +
          "• Kompleksitas integrasi sistem<br>" +
          "• Ketersediaan data dan akses<br>" +
          "• Requirement compliance & security<br><br>" +
          "💬 <a href='/contact' style='color: var(--es-red); font-weight: 600;'>Konsultasi gratis</a> untuk estimasi lebih akurat.";
        
        (window as any).streamResponse(content, "implementasi");
        return;
      }

      // No custom response match - send to backend
      (window as any).sendToBackend(text);
    };

    // Backend API call function
    (window as any).sendToBackend = async function(query: string) {
      const typing = (window as any).addBubble("EasternStack sedang mengetik<span class='typing'></span>", "bot");

      try {
        const res = await fetch("https://easternstack.trahlabs.my.id/v1/chat-messages", {
          method: "POST",
          headers: {
            "Authorization": "Bearer app-iFQYhaXBySMNsYwL6svkxHba",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            inputs: {},
            query: query,
            response_mode: "streaming",
            conversation_id: "",
            user: "abc-123"
          })
        });

        const reader = res.body?.getReader();
        if (!reader) return;
        const decoder = new TextDecoder();

        let botBubble: HTMLElement | null = null;
        let buffer = "";
        let suggestedQuestions: string[] = [];

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          decoder.decode(value).split("\n").forEach(line => {
            if (!line.startsWith("data:")) return;
            if (line.includes("[DONE]")) return;

            try {
              const j = JSON.parse(line.replace("data:", "").trim());
              
              // Parse answer
              if (j.answer) {
                if (!botBubble) {
                  typing.remove();
                  botBubble = (window as any).addBubble("", "bot");
                }
                buffer += j.answer;
                if (botBubble) botBubble.innerHTML = (window as any).formatText(buffer);
              }
              
              // Parse suggested questions from Dify (if available)
              if (j.suggested_questions && Array.isArray(j.suggested_questions)) {
                suggestedQuestions = j.suggested_questions.map((q: any) => 
                  typeof q === 'string' ? q : q.text || q.question || ''
                ).filter((q: string) => q.length > 0);
              }
              
              // Also check metadata.suggested_questions
              if (j.metadata?.suggested_questions && Array.isArray(j.metadata.suggested_questions)) {
                suggestedQuestions = j.metadata.suggested_questions.map((q: any) => 
                  typeof q === 'string' ? q : q.text || q.question || ''
                ).filter((q: string) => q.length > 0);
              }
            } catch {}
          });
        }

        // Show follow-up suggestions after response complete
        if (suggestedQuestions.length > 0) {
          // Use Dify suggestions
          (window as any).showFollowUpSuggestions("default", suggestedQuestions);
        } else {
          // Detect topic and use custom suggestions
          const lowerQuery = query.toLowerCase();
          let topic = "default";
          
          if (lowerQuery.includes("agentic") || lowerQuery.includes("ai")) topic = "agentic";
          else if (lowerQuery.includes("solusi") || lowerQuery.includes("produk")) topic = "solusi";
          else if (lowerQuery.includes("partner") || lowerQuery.includes("mitra")) topic = "partner";
          else if (lowerQuery.includes("sales") || lowerQuery.includes("kontak") || lowerQuery.includes("hubungi")) topic = "sales";
          else if (lowerQuery.includes("implementasi") || lowerQuery.includes("berapa lama")) topic = "implementasi";
          else if (lowerQuery.includes("demo") || lowerQuery.includes("demo")) topic = "demo";
          else if (lowerQuery.includes("harga") || lowerQuery.includes("biaya") || lowerQuery.includes("pricing")) topic = "harga";
          else if (lowerQuery.includes("dokumen") || lowerQuery.includes("document") || lowerQuery.includes("ocr")) topic = "dokumen";
          else if (lowerQuery.includes("copilot")) topic = "copilot";
          
          (window as any).showFollowUpSuggestions(topic);
        }
        
      } catch (err) {
        typing.remove();
        (window as any).addBubble("Terjadi kesalahan koneksi.", "bot");
      }
    };

    return () => {
      document.head.removeChild(style);
      document.body.removeChild(container);
    };
  }, []);

  return null;
}
