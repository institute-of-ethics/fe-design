"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";

type NewsletterSignupProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function NewsletterSignup({
  title = "Join Our Mailing List",
  subtitle = "Sign up to receive updates on research, upcoming events, and more.",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className={`relative py-20 lg:py-24 overflow-hidden ${className}`}
      aria-labelledby="newsletter-heading"
    >
      <div
        className="absolute inset-0 bg-warm-ivory"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(27, 42, 74, 0.06) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="newsletter-heading" className="font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary">
            {title}
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">{subtitle}</p>
          {submitted ? (
            <p className="mt-8 text-neutral-600">Thank you for signing up.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 sm:max-w-md sm:mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <Button
                type="submit"
                size="md"
                className="bg-primary text-white hover:bg-primary-dark border-0 shrink-0 px-8"
              >
                Sign up
              </Button>
            </form>
          )}
          <div className="mt-10 flex items-center justify-center gap-6">
            <span className="text-sm text-neutral-500">Follow us</span>
            <Link
              href="#"
              className="text-neutral-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-neutral-600 hover:text-primary transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
