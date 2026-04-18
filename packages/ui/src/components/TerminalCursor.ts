import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('terminal-cursor')
export class TerminalCursor extends LitElement {
    // Disable Shadow DOM so Tailwind classes work
    protected createRenderRoot() {
        return this;
    }

    render() {
        return html`<span class="inline-block w-[0.6em] h-[1em] bg-[#33ff33] ml-1 animate-blink"></span>`;
    }
}