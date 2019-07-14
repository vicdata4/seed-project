import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';

class VaadinView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
          background-image: url('assets/backgrounds/mac.jpg');
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>Vaadin</h1>
        <hr>
        <h3>A small, powerful and framework-agnostic client-side router for Web Components</h3>
        <p>Vaadin router is a small (< 7kb) yet powerful client-side router JS library. It uses a widely adopted express.js syntax for routers (users/:id) to map URLs to views based on Web Component. It has all the features you expect from a modern router: async route resolution, animated transition, child routes, navigation guards, redirects, and more. Vaadin router works with Web Components regardless of how they are created.</p>
        <a href="https://vaadin.com/router" class="custom-link blue" target="_blank" rel="noopener">Learn more about Vaadin</a>
      </section>
    `;
  }
}

window.customElements.define('vaadin-view', VaadinView);
