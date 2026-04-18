import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './TerminalCursor';

@customElement('hero-section')
export class HeroSection extends LitElement {
    // Disable Shadow DOM so Tailwind classes work
    protected createRenderRoot() {
        return this;
    }

    @state()
    private displayedText = '';

    private fullText = 'GREETINGS PROFESSOR FALKEN.';
    private typingTimer?: number;

    connectedCallback() {
        super.connectedCallback();
        this.startTypingAnimation();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.typingTimer) {
            clearInterval(this.typingTimer);
        }
    }

    private startTypingAnimation() {
        let index = 0;
        this.typingTimer = window.setInterval(() => {
            if (index <= this.fullText.length) {
                this.displayedText = this.fullText.slice(0, index);
                index++;
            } else {
                if (this.typingTimer) {
                    clearInterval(this.typingTimer);
                }
            }
        }, 100);
    }

    private scrollToSection(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        const isTypingComplete = this.displayedText.length === this.fullText.length;

        return html`
      <section class="min-h-screen flex items-center justify-center pt-16 px-4">
        <div class="max-w-4xl mx-auto">
          <div class="mb-12 terminal-prompt terminal-glow">
            <div class="text-2xl mb-2">
              ${this.displayedText}
              ${!isTypingComplete ? html`<terminal-cursor></terminal-cursor>` : ''}
            </div>
            ${isTypingComplete ? html`
              <div class="mt-8 animate-fade-in">
                <div class="mb-4">
                  <span class="text-muted-foreground">&gt; </span>
                  <span>SHALL WE PLAY A GAME?</span>
                  <terminal-cursor></terminal-cursor>
                </div>
              </div>
            ` : ''}
          </div>

          ${isTypingComplete ? html`
            <div class="space-y-6 animate-fade-in-delay">
              <div class="terminal-border p-8">
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="text-muted-foreground">&gt;</span>
                    <div>
                      <div class="mb-2">IDENTITY: SOFTWARE ARCHITECT & IT LEADER</div>
                      <div class="text-muted-foreground">
                        SPECIALIZATION: SCALABLE SYSTEMS, CLEAN CODE, TECHNICAL LEADERSHIP
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <span class="text-muted-foreground">&gt;</span>
                    <div class="text-muted-foreground">
                      MISSION: TRANSFORMING COMPLEX CHALLENGES INTO ELEGANT, MAINTAINABLE SOLUTIONS
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex gap-4">
                <button
                  @click=${() => this.scrollToSection('projects')}
                  class="px-6 py-3 bg-primary text-primary-foreground hover:bg-[#66ff66] transition-colors terminal-border"
                >
                  [ VIEW_PROJECTS ]
                </button>
                <button
                  @click=${() => this.scrollToSection('resume')}
                  class="px-6 py-3 border border-border hover:bg-secondary transition-colors"
                >
                  [ ACCESS_RESUME ]
                </button>
              </div>

              <button
                @click=${() => this.scrollToSection('about')}
                class="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 animate-bounce">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <span>[ SCROLL_DOWN ]</span>
              </button>
            </div>
          ` : ''}
        </div>
      </section>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'hero-section': HeroSection;
    }
}