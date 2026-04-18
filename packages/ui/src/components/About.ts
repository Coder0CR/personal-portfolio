import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-section')
export class AboutSection extends LitElement {
    // Disable Shadow DOM so Tailwind classes work
    protected createRenderRoot() {
        return this;
    }

    private skills = [
        {
            title: 'Full-Stack Development',
            description: 'Expert in modern web technologies, cloud-native applications, and serverless architectures.'
        },
        {
            title: 'System Architecture',
            description: 'Designing scalable, resilient systems with microservices, event-driven patterns, and distributed computing.'
        },
        {
            title: 'Technical Leadership',
            description: 'Leading engineering teams, establishing best practices, and driving technical excellence.'
        }
    ];

    private renderIcon(index: number) {
        const icons = [
            // Code2 icon
            html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary group-hover:terminal-glow transition-all">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>`,
            // Boxes icon
            html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary group-hover:terminal-glow transition-all">
        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
        <path d="m7 16.5-4.74-2.85"></path>
        <path d="m7 16.5 5-3"></path>
        <path d="M7 16.5v5.17"></path>
        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
        <path d="m17 16.5-5-3"></path>
        <path d="m17 16.5 4.74-2.85"></path>
        <path d="M17 16.5v5.17"></path>
        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
        <path d="M12 8 7.26 5.15"></path>
        <path d="m12 8 4.74-2.85"></path>
        <path d="M12 13.5V8"></path>
      </svg>`,
            // Users icon
            html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary group-hover:terminal-glow transition-all">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>`
        ];
        return icons[index];
    }

    render() {
        return html`
      <section id="about" class="py-20 px-4 bg-muted/20">
        <div class="max-w-6xl mx-auto">
          <div class="mb-16">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-primary terminal-glow text-xl">&gt;</span>
              <h2 class="terminal-prompt terminal-glow">SYSTEM.CAPABILITIES</h2>
            </div>
            <p class="text-muted-foreground ml-8">
              QUERY: LIST PRIMARY OPERATIONAL FUNCTIONS
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            ${this.skills.map((skill, index) => html`
              <div class="terminal-border p-6 bg-card hover:bg-card/80 transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  ${this.renderIcon(index)}
                  <span class="text-primary">[ ${index + 1} ]</span>
                </div>
                <h3 class="mb-3 terminal-glow">${skill.title.toUpperCase()}</h3>
                <p class="text-muted-foreground text-sm leading-relaxed">${skill.description}</p>
              </div>
            `)}
          </div>
        </div>
      </section>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'about-section': AboutSection;
    }
}