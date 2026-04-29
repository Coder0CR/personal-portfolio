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
            title: 'Senior Software Delivery Manager and Architect',
            company: 'Blue Cross Blue Shield of North Carolina',
            period: 'Apr 2023 - Present',
            summary: 'Leads architecture strategy and multiple software delivery teams, designing and governing cloud-native solutions that align IT capabilities to business outcomes in the healthcare payer domain.',
            description: [
                'Enterprise Architecture & Strategy: Developed and executed a multi-year architecture modernization strategy for legacy application stacks, authoring reference architectures and roadmaps for microservice cloud adoption and web component technologies (modern JS frameworks) starting in 2024; assessed total cost of ownership and scalability tradeoffs to optimize portfolio decisions and reduce technical debt.',
                'Architecture Governance & Standards: Established architecture patterns, standards, and decision frameworks adopted across multiple delivery teams; evaluated solution alternatives and governed architecture alignment across business and IT domains to ensure traceability to enterprise objectives.',
                'Cloud Architecture (AWS): Led migration of legacy Java services to cloud microservices in AWS; defined target-state architectures and reference models; coordinated staff training and adoption of AWS technologies with internal and external partners; migrated ~25% of legacy services to AWS in 2024 to improve scalability and operability.',
                'Solution Assessment & Vendor Guidance: Represented architecture in the evaluation of solution alternatives and technology platforms; assessed build vs. buy decisions, led vendor integration planning, and ensured proposed solutions aligned with enterprise blueprints and standards.',
                'Architecture Consulting & Mentoring: Led a team of 25 engineers across ~10-15 enterprise projects per year; coached managers and principal developers on architecture decisions, design patterns, and delivery practices; mentored Computer Science students on AWS Serverless architecture patterns and senior project execution.',
                'Digital Experience & Business Outcomes: Architected and coordinated a scalable cloud solution that decreased paper submissions by 60% and doubled digital submissions through improved UX, integrations, and operational automation; partnered with product and business stakeholders to align solutions to customer-facing goals.',
                'Delivery & DevOps Practices: Championed CI/CD, DevOps, and Blue/Green deployment strategies to increase deployment frequency and reduce rollback incidents; applied Agile (Scrum) and Kanban practices to tailor delivery cadence to team and product needs.',
                'Cross-functional Collaboration & Stakeholder Influence: Established a strategic partnership with Salesforce, product management, QA, infrastructure, security, and business operations to resolve roadblocks, influence priorities, ensure compliance (including healthcare regulatory considerations with NCDOI and CMS), and verify production readiness for member-facing systems.',
            ]
        },
        {
            title: 'Software Development Manager & Solutions Architecture',
            company: 'Blue Cross Blue Shield of North Carolina',
            period: 'Apr 2017 - Apr 2023',
            summary: 'Led a team of 14-16 developers and analysts in migrating core systems, managing mission-critical applications, and\n' +
                'driving architecture alignment across multiple business divisions and technical platforms.',
            description: [
                'Architecture Alignment & Roadmap Planning: Assessed architecture impacts during planning to ensure alignment with IT strategy and enterprise roadmaps for customer-facing systems; collaborated with product owners, business analysts, UX, and infrastructure to refine scope and prioritize features against architectural constraints.',
                'Team Leadership & People Development: Directed a 16-person team of leads and developers, fostering professional growth and consistent delivery through coaching, 1:1s, and career development.',
                'Agile/Scrum Management: Championed transition to Agile across multiple delivery teams, instituting sprint planning, backlog refinement, and retrospective-driven continuous improvement; supported >100 deployments per year using Blue/Green mechanisms.',
                'Delivery Operations & Quality: Managed multiple concurrent work streams, balancing business expectations with budget and schedule constraints; implemented code review standards and testing pipelines to improve release quality and reduce production incidents.'
            ]
        },
        {
            title: 'Principal Developer & Architect',
            company: 'Blue Cross Blue Shield of North Carolina',
            period: 'Jun 2014 - Apr 2017',
            summary: 'Drove architectural decisions for a suite of applications, developed technical roadmaps, and mentored developers by establishing design patterns and sound development practices.',
            description: [
                'Technology & Architecture Leadership: Guided a team of 16 developers on Java and full-stack best practices and industry trends; acted as liaison between technical teams and business units to align architecture with organizational objectives and business initiatives.',
                'Technical Strategy & Roadmaps: Led strategic planning for critical applications and developed technical roadmaps and reference architectures to support cloud transformation and modernization efforts; guided selection and implementation of AWS infrastructure, web frameworks, and web component stacks.',
                'Code Reviews & Quality Management: Established rigorous code review processes and quality metrics, improving maintainability and reducing defects across teams.',
                'Full-Stack Development & DevOps: Architected and operated three customer facing e-commerce portals and a dozen microservices running in AWS and Kubernetes; oversaw CI/CD pipeline enhancements to accelerate delivery.'
            ]
        },
        {
            title: 'Senior Software Developer',
            company: 'Blue Cross Blue Shield of North Carolina',
            period: 'Mar 2008 - May 2014',
            summary: 'Developed enterprise solutions for Individual Sales and Enrollment.',
            description: [
                'Identity & Integrations: Architected and implemented a SAML-based SSO system interfacing with the Federal Health Insurance Marketplace, enabling applicants to make binder payments via bank draft and credit cards; integrated Tivoli Federated Identity Manager and CyberSource payment vendor with Java Spring services.',
                'Full-Stack Development & Call Center Integration: Developed and maintained a pay-by-phone IVR solution for the individual insurance market (Medicare and Commercial); migrated a custom IVR to a vendor VUI system and integrated SOAP/REST services to maintain continuity of call-center payment flows.',
                'Migration & Quality Assurance: Led migration of WebSphere Application Server solutions to the Facets enrollment system, ensuring performance and code quality during cutovers and maintaining continuity for enrollment operations; ensured integrations met healthcare regulatory expectations.'
            ]
        },
        {
            title: 'Senior Software Developer',
            company: 'NTT Data (Formerly Keane)',
            period: 'Aug 2007 - Mar 2008',
            summary: 'Developed enterprise solutions for NC Department of Transportation.',
            description: [
                'Identity & Integrations: Implemented an integration between Java front-end and mainframe backend'
            ]
        },
        {
            title: 'Staff Application Engineer',
            company: 'IBM',
            period: 'Oct 2000 - Aug 2007',
            summary: 'Developed enterprise solutions for chip manufacturing automation.',
            description: [
                ''
            ]
        },
        {
            title: 'System Analyst',
            company: 'Analytic Services (ANSER)',
            period: 'Mar 1998 - Oct 2000',
            summary: 'Developed internal websites for the Secretary of the Air Force Acquisition and System Engineering (SAF/AQRE)',
            description: [
                ''
            ]
        },
    ];

    private education = [
        {
            degree: 'Master of Science in Computer Science',
            school: 'Marist College',
            year: '2006'
        },
        {
            degree: 'Master of Science in Project Management',
            school: 'Western Carolina University',
            year: '2009'
        },
        {
            degree: 'Certificate in UNIX/C/C++ Programming',
            school: 'George Washington University',
            year: '1999'
        },
        {
            degree: 'Bachelor of Science in Bioengineering',
            school: 'Western New England College',
            year: '1997'
        }
    ];

    private certifications = [
        'AWS Certified AI Practitioner',
        'AWS Certified Cloud Practitioner',
        'CompTIA Network+'
    ];

    private technicalSkills = {
        'Languages': ['TypeScript', 'Java', 'JavaScript', 'Bash'],
        'Cloud & Infrastructure': ['AWS', 'AWS Cloud Development Kit (CDK)', 'Lambda', 'Step Functions', 'API Gateway', 'EventBridge', 'SQS', 'SNS'],
        'Frameworks': ['React', 'Node.js', 'Spring Boot', 'Next.js', 'Lit'],
        'Architecture': ['Microservices', 'Event-Driven', 'Serverless', 'Domain-Driven Design'],
        'Databases': ['PostgreSQL', 'DynamoDB', 'Oracle', 'MySQL', 'DB2'],
        'Tools': ['JIRA', 'Confluence', 'Docker', 'GitHub Actions', 'Jenkins', 'Grafana', 'Datadog']
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

    private formatDescriptionItem(item: string) {
        const colonIndex = item.indexOf(':');
        if (colonIndex === -1) {
            return html`<span>${item}</span>`;
        }
        const label = item.slice(0, colonIndex + 1)
            .replace(/\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
        const rest = item.slice(colonIndex + 1);
        return html`<span class="font-bold terminal-glow text-primary">${label}</span><span>${rest}</span>`;
    }

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
                      ${exp.summary ? html`<p class="text-muted-foreground mb-4">${exp.summary}</p>` : ''}
                    <ul class="space-y-2">
                      ${exp.description.map(item => html`
                        <li class="flex gap-3 text-sm text-muted-foreground">
                          <span class="text-primary">&gt; </span>
                          <span>${this.formatDescriptionItem(item)}</span>
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

