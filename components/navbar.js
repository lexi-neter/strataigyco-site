class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 1px;
          color: #2563EB;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo span {
          color: #7C3AED;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: #6B7280;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #4F46E5;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <div class="navbar-container">
        <a href="index.html" class="logo">
          <img src="https://huggingface.co/spaces/LexiNeter/strataigy-visionary-ai-consulting/resolve/main/images/996fe815-dd7f-4da1-943b-29d257dbcd15.png" alt="StratAIgy Logo" style="height: 32px; margin-right: 8px;">
          Strat<span>AI</span>gy
        </a>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="solutions.html" class="nav-link">Solutions</a>
          <a href="industries.html" class="nav-link">Industries</a>
          <a href="billing.html" class="nav-link">Billing</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </div>
        <button class="mobile-menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
