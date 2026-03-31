import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          {"Built with Next.js & TypeScript"}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@yourdomain.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Send email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
