import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('resume-section')
export class ResumeSection extends LitElement {
    // Disable Shadow DOM so Tailwind classes work
    protected createRenderRoot() {
        return this;
    }

    private experiences = [
        {
            title: 'Senior Software Architect',
            company: 'Tech Innovations Inc.',
            period: '2022 - Present',
            description: [
                'Led architecture redesign of core platform, improving scalability by 300%',
                'Established engineering best practices and DevOps workflows across 5 teams',
                'Mentored 15+ developers in system design and cloud architecture'
            ]
        },
        {
            title: 'Lead Software Engineer',
            company: 'Digital Solutions Corp',
            period: '2019 - 2022',
            description: [
                'Architected and delivered microservices platform serving 2M+ users',
                'Led migration from monolith to event-driven architecture',
                'Implemented CI/CD pipelines reducing deployment time by 80%'
            ]
        },
        {
            title: 'Senior Developer',
            company: 'StartupXYZ',
            period: '2016 - 2019',
            description: [
                'Built RESTful APIs and serverless functions handling 10M+ requests/day',
                'Optimized database performance and implemented caching strategies',
                'Developed real-time data processing pipelines'
            ]
        }
    ];

    private education = [
        {
            degree: 'Master of Science in Computer Science',
            school: 'University of Technology',
            year: '2015'
        },
        {
            degree: 'Bachelor of Science in Software Engineering',
            school: 'State University',
            year: '2013'
        }
    ];

    private certifications = [
        'AWS Certified Solutions Architect - Professional',
        'Google Cloud Professional Architect',
        'Kubernetes Administrator (CKA)',
        'TOGAF 9 Certified'
    ];

    private technicalSkills = {
        'Languages': ['TypeScript', 'Python', 'Go', 'Java', 'Rust'],
        'Cloud & Infrastructure': ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Terraform'],
        'Frameworks': ['React', 'Node.js', 'FastAPI', 'Spring Boot', 'Next.js'],
        'Architecture': ['Microservices', 'Event-Driven', 'Serverless', 'Domain-Driven Design'],
        'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch'],
        'Tools': ['Docker', 'GitHub Actions', 'Jenkins', 'Grafana', 'Datadog']
    };

    private briefcaseIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
    </svg>
  `;

    private graduationCapIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
      <path d="M22 10v6"></path>
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
    </svg>
  `;

    private awardIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
      <circle cx="12" cy="8" r="6"></circle>
    </svg>
  `;

    private code2Icon = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  `;

    render() {
        return html`
      <section id="resume" class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="mb-16">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-primary terminal-glow text-xl">&gt;</span>
              <h2 class="terminal-prompt terminal-glow">PERSONNEL.FILE_ACCESS</h2>
            </div>
            <p class="text-muted-foreground ml-8">
              QUERY: RETRIEVE EMPLOYMENT_HISTORY AND CREDENTIALS
            </p>
          </div>

          <div class="space-y-12">
            <!-- Experience -->
            <div>
              <div class="flex items-center gap-3 mb-6 terminal-border p-4 bg-muted/20">
                ${this.briefcaseIcon}
                <h3 class="terminal-prompt terminal-glow">EXPERIENCE.LOG</h3>
              </div>

              <div class="space-y-6 ml-4">
                ${this.experiences.map(exp => html`
                  <div class="terminal-border p-6 bg-card hover:bg-card/80 transition-all">
                    <div class="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h4 class="terminal-glow mb-1">${exp.title}</h4>
                        <p class="text-muted-foreground">${exp.company}</p>
                      </div>
                      <span class="px-3 py-1 border border-primary/50 text-sm terminal-prompt">
                        ${exp.period}
                      </span>
                    </div>
                    <ul class="space-y-2">
                      ${exp.description.map(item => html`
                        <li class="flex gap-3 text-sm text-muted-foreground">
                          <span class="text-primary">&gt;</span>
                          <span>${item}</span>
                        </li>
                      `)}
                    </ul>
                  </div>
                `)}
              </div>
            </div>

            <!-- Education -->
            <div>
              <div class="flex items-center gap-3 mb-6 terminal-border p-4 bg-muted/20">
                ${this.graduationCapIcon}
                <h3 class="terminal-prompt terminal-glow">EDUCATION.DATA</h3>
              </div>

              <div class="grid md:grid-cols-2 gap-4 ml-4">
                ${this.education.map(edu => html`
                  <div class="terminal-border p-6 bg-card">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-primary">[ ${edu.year} ]</span>
                    </div>
                    <h4 class="mb-1">${edu.degree}</h4>
                    <p class="text-sm text-muted-foreground">${edu.school}</p>
                  </div>
                `)}
              </div>
            </div>

            <!-- Certifications -->
            <div>
              <div class="flex items-center gap-3 mb-6 terminal-border p-4 bg-muted/20">
                ${this.awardIcon}
                <h3 class="terminal-prompt terminal-glow">CERTIFICATIONS.LIST</h3>
              </div>

              <div class="grid md:grid-cols-2 gap-3 ml-4">
                ${this.certifications.map(cert => html`
                  <div class="terminal-border p-4 bg-card flex items-center gap-3">
                    <span class="text-primary">&gt;</span>
                    <span class="text-sm">${cert}</span>
                  </div>
                `)}
              </div>
            </div>

            <!-- Technical Skills -->
            <div>
              <div class="flex items-center gap-3 mb-6 terminal-border p-4 bg-muted/20">
                ${this.code2Icon}
                <h3 class="terminal-prompt terminal-glow">TECHNICAL.SKILLS</h3>
              </div>

              <div class="grid md:grid-cols-2 gap-6 ml-4">
                ${Object.entries(this.technicalSkills).map(([category, skills]) => html`
                  <div class="terminal-border p-6 bg-card">
                    <h4 class="mb-4 terminal-glow">${category.toUpperCase()}</h4>
                    <div class="flex flex-wrap gap-2">
                      ${skills.map(skill => html`
                        <span class="px-3 py-1 border border-primary/30 text-xs hover:bg-primary/10 transition-colors">
                          ${skill}
                        </span>
                      `)}
                    </div>
                  </div>
                `)}
              </div>
            </div>

            <div class="text-center mt-8">
              <p class="text-muted-foreground terminal-prompt">
                <span class="text-primary">&gt;</span> END OF FILE
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
    }
}

