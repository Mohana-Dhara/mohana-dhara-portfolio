import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Task Management System",
    description:
      "A comprehensive task management solution with real-time collaboration, deadline tracking, and productivity analytics.",
    image: "https://imgs.search.brave.com/yIO3XWL_H-Ur54GVEGt5mxo99IFxJ2kc2wfKV4AFHT4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZGkt/ZGV2LmNvbS91cGxv/YWRzL3Rhc2stbWFu/YWdlbWVudC1zb2Z0/d2FyZS11c2VyLmdp/Zg.jpeg",
    tags: ["React", "Typescript", "NodeJS", "Java", "Spring Boot", "REST API", "MySql", "Spring Security"],
  },
  {
    title: "Anti - Fraud System",
    description:
      "A full-featured transaction fraud detection system using Spring Boot with a multi-tier role model (Administrator, Merchant, Support), enforcing fine-grained access control via Spring Security",
    image: "https://imgs.search.brave.com/2X6RfIKFV8YMBt2XVk0gs3L91Dhf-zkoZXehi2Gedhs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L1NtVnVCcERZQ1hG/a0VPWFZPNk4xcVV0/ZFU2SS5wbmc",
    tags: ["Next.js", "Java", "Spring Boot", "Tailwind", "Heuristic Algorithms", "Role-Based Access Control"],
  },
  {
    title: "Code Sharing Platform",
    description:
      "A full-stack web application for storing, managing, and sharing code snippets, FreeMarker-based template rendering for a dynamic snippets feed, persistent database storage, and role-based access control for securing private snippets.",
    image: "https://imgs.search.brave.com/NAfUBTAPFb2a4PQhnZzE4MayfM9jTjyGrFVHRshY4uM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb2Rl/ZmlsZS5pby9fbmV4/dC9pbWFnZT91cmw9/L2lsbHVzdHJhdGlv/bi5wbmcmdz0xMjAw/JnE9NzU",
    tags: ["Java", "Spring Boot", "FreeMarker", "REST API","HTML", "Tailwind", "Javascript"],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A multi-user real-time chat application built with Spring Boot and WebSocket using the STOMP protocol, supporting public group messaging and private one-on-one conversations, user authentication, online presence tracking, unread message counters, and seamless switching between public and private chat rooms.",
    image: "https://imgs.search.brave.com/X_ctuWan1gFFDUVGD6qrrGt7iO-75yXGCKPMfKvdS4M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/NDE1LzM2Ny9zbWFs/bC9idXNpbmVzc21h/bi1jaGF0dGluZy1j/b252ZXJzYXRpb24t/b24tc21hcnRwaG9u/ZS1tZXNzYWdpbmct/YXBwbGljYXRpb24t/bW9iaWxlLWNoYXQt/YXBwLW1lc3Nlbmdl/ci1tb2JpbGUtc29m/dC1jb25jZXB0LXZp/b2xldC1pc29tZXRy/aWMtM2QtaWxsdXN0/cmF0aW9uLXZlY3Rv/ci5qcGc",
    tags: ["Java", "Spring Boot", "WebSocket", "STOMP", "JavaScript", "HTML", "CSS"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/Mohana-Dhara" target="_blank" rel="noopener noreferrer">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
            </a>
            </div>
      </div>
    </section>
  );
};