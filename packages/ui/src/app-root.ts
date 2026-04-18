import "./styles/index.css";
import {customElement} from "lit/decorators.js";
import {LitElement, html} from "lit";
import "./components/Header";
import "./components/Footer";
import "./components/Hero";
import "./components/About";
import "./components/Resume";
import "./components/Projects";

@customElement('app-root')
export class AppRoot extends LitElement {
    // Disable Shadow DOM so Tailwind classes work
    protected createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="min-h-screen">
                <app-header></app-header>
                <main>
                    <hero-section></hero-section>
                    <about-section></about-section>
                    <resume-section></resume-section>
                    <projects-section></projects-section>
                </main>
                <app-footer></app-footer>
            </div>
        `;
    }
}