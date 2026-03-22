const experiences = [
  {
    period: "08/2024 — Present",
    role: "Software Engineer",
    company: "Wells Fargo",
    description: [
      "Engineering Spring Boot services for real-time transaction monitoring platform detecting suspicious payment behaviors, implementing REST APIs and MongoDB models supporting risk evaluation across 9 internal fraud-analysis teams.",
      "Developing Angular dashboard using RxJS and Reactive Forms to support fraud investigation workflows, enabling analysts to review flagged transactions and case histories across 3 regional payment processing systems.",
      "Implementing CI/CD pipelines with Jenkins automating build validation, testing, and Docker image publishing for Spring Boot services, reducing deployment cycle duration by 34%.",
      "Containerized Spring Boot applications with Docker and deployed services on AWS infrastructure, supporting scalable event-processing pipelines handling 21k payment authorization events daily.",
      "Built Kafka streaming pipelines capturing transaction authorization events, enabling near real-time fraud detection workflows and reducing investigation data lag by about 26%.",
      "Designed MongoDB indexing and document modeling strategies for high-volume transaction records, improving investigation query performance for fraud-analysis APIs.",
      "Integrated secure microservice communication using OAuth2, JWT authentication, and AWS IAM roles through controlled API access policies.",
    ],
    technologies: ["Spring Boot", "Angular", "MongoDB", "AWS", "Kafka", "Docker"],
    current: true,
  },
  {
    period: "04/2022 — 12/2023",
    role: "Software Engineer",
    company: "HCL Tech",
    description: [
      "Architected and developed Spring Boot microservices for an enterprise digital operations platform, designing RESTful APIs and PostgreSQL data models enabling scalable workflow automation across distributed business applications.",
      "Built Angular-based analytics dashboard using JavaScript to visualize operational metrics, service workflows, and platform usage insights, enabling internal teams to monitor enterprise application performance and process efficiency.",
      "Engineered CI/CD pipelines using Azure DevOps to automate build validation, automated testing, and container artifact publishing for Java microservices, reducing deployment turnaround time by approximately 32%.",
      "Containerized Spring Boot applications using Docker and orchestrated deployments through Kubernetes on Microsoft Azure, enabling highly available service-processing pipelines supporting enterprise-scale workflow transactions.",
      "Implemented Apache Kafka event-driven architecture enabling asynchronous communication across microservices, improving system responsiveness and reducing cross-service processing latency across distributed enterprise applications.",
      "Optimized PostgreSQL database performance through advanced indexing, partitioning, and query tuning strategies, significantly improving reporting and data retrieval performance across large-scale operational datasets.",
      "Strengthened platform security by integrating token-based authentication and API gateway policies for secure inter-service communication, ensuring controlled access to enterprise application services and sensitive operational data.",
    ],
    technologies: ["Spring Boot", "Angular", "PostgreSQL", "Azure", "Kafka", "Docker", "Kubernetes"],
    current: false,
  },
  {
    period: "01/2021 — 03/2022",
    role: "Software Development Engineer - Research",
    company: "SRM University",
    description: [
      "Designed Spring Boot microservices for a campus research collaboration portal, implementing REST APIs and MySQL schema supporting researcher profiles, projects, and publications across 6 academic departments.",
      "Built React dashboard using JavaScript and Redux Toolkit to visualize experiment datasets and collaboration metrics, improving internal data accessibility for 40+ research students managing shared datasets.",
      "Implemented CI/CD pipelines using Jenkins and GitHub Actions, automating build, testing, and container deployment workflows, reducing manual release effort by 35% across development and staging environments.",
      "Containerized Spring Boot services with Docker and deployed on Kubernetes within Google Cloud Platform, supporting scalable experiment-data pipelines handling 15k+ dataset requests monthly.",
      "Developed asynchronous Kafka workflows to process research dataset updates and notification events, reducing cross-service data synchronization delays by about 28% across distributed microservices.",
      "Optimized MySQL queries and integrated Redis caching for dataset retrieval APIs, improving response latency for large experiment metadata queries across microservice-based research data platforms.",
    ],
    technologies: ["Spring Boot", "React", "MySQL", "Redis", "Kafka", "Docker", "Kubernetes", "GCP"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            a Full stack Engineer leading teams and building products at scale.
          </p>
        </div>
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <ul className="mt-4 space-y-2 text-left">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};