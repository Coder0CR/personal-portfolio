import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
    stars: number;
    language: string;
}

@customElement('projects-section')
export class ProjectsSection extends LitElement {
    private projects: Project[] = [
        {
            title: 'Serverless API Framework',
            description: 'A lightweight, type-safe framework for building serverless REST APIs with AWS Lambda and API Gateway. Features automatic validation, middleware support, and built-in observability.',
            tags: ['TypeScript', 'AWS Lambda', 'API Gateway', 'Serverless'],
            githubUrl: 'https://github.com/yourusername/serverless-api-framework',
            demoUrl: 'https://example.com/demo',
            stars: 342,
            language: 'TypeScript'
        }
    ];

    private starIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  `;

    private githubIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  `;

    private externalLinkIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
      <path d="M15 3h6v6"></path>
      <path d="M10 14 21 3"></path>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    </svg>
  `;

    render() {
        return html`
      <section id="projects" class="py-20 px-4 bg-muted/20">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-primary terminal-glow text-xl">&gt;</span>
              <h2 class="terminal-prompt terminal-glow">SYSTEM.PROJECT_DATABASE</h2>
            </div>
            <p class="text-muted-foreground ml-8">
              QUERY: DISPLAY ALL ARCHIVED DEVELOPMENT PROTOCOLS
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${this.projects.map(project => html`
              <div class="terminal-border p-6 bg-card hover:bg-card/80 transition-all group">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-1 border border-primary/50 text-xs terminal-prompt">
                      ${project.language}
                    </span>
                    <div class="flex items-center gap-1 text-muted-foreground">
                      ${this.starIcon}
                      <span class="text-xs">${project.stars}</span>
                    </div>
                  </div>
                </div>

                <h3 class="mb-3 terminal-glow group-hover:text-primary transition-colors">
                  ${project.title}
                </h3>

                <p class="text-sm text-muted-foreground mb-4 leading-relaxed">
                  ${project.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                  ${project.tags.map(tag => html`
                    <span class="px-2 py-1 text-xs border border-border">
                      ${tag}
                    </span>
                  `)}
                </div>

                <div class="flex gap-3 pt-4 border-t border-border">
                  <a
                    href="${project.githubUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    ${this.githubIcon}
                    <span>[ CODE ]</span>
                  </a>
                  ${project.demoUrl ? html`
                    <a
                      href="${project.demoUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      ${this.externalLinkIcon}
                      <span>[ DEMO ]</span>
                    </a>
                  ` : ''}
                </div>
              </div>
            `)}
          </div>

          <div class="mt-8 text-center">
            <p class="text-muted-foreground terminal-prompt">
              <span class="text-primary">&gt;</span> END OF DATABASE QUERY
            </p>
          </div>
        </div>
      </section>
    `;
    }
}
