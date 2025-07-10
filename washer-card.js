class MyCustomCard extends HTMLElement {
  setConfig(config) {
    this.config = config;
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Dein CSS hier */
        .my-card {
          padding: 16px;
          background-color: var(--primary-background-color);
        }
      </style>
      <div class="my-card">
        <h1>Meine benutzerdefinierte Karte</h1>
        <p>Willkommen in meiner Home Assistant benutzerdefinierten Karte!</p>
      </div>
    `;
  }

  getCardSize() {
    return 1; // Größe der Karte, optional
  }
}

customElements.define('my-custom-card', MyCustomCard);
