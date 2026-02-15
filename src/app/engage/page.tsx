"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Input from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function EngagePage() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [partnershipSubmitted, setPartnershipSubmitted] = useState(false);

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Engage" }]} />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Engage with Us
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        Stay connected through our newsletter, social media, and partnership inquiries.
      </p>
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12" aria-labelledby="newsletter-heading">
        <div>
          <h2 id="newsletter-heading" className="font-heading text-2xl font-semibold text-neutral-900">
            Join Our Mailing List
          </h2>
          <p className="mt-2 text-neutral-600">
            Sign up to receive updates on Susilo-related research, upcoming events, and more.
          </p>
          {newsletterSubmitted ? (
            <p className="mt-4 text-neutral-600">Thank you for signing up.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubmitted(true);
              }}
              className="mt-6 space-y-4"
            >
              <Input name="email" type="email" label="Email" required />
              <Button type="submit">Sign up</Button>
            </form>
          )}
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-neutral-900">
            Follow Us
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-primary hover:text-primary-dark font-medium" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:text-primary-dark font-medium" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-16 pt-12 border-t border-neutral-200" aria-labelledby="partnership-heading">
        <h2 id="partnership-heading" className="font-heading text-2xl font-semibold text-neutral-900">
          Partnership & Collaboration Inquiries
        </h2>
        <p className="mt-2 text-neutral-600">
          Interested in partnering with the Institute? Send us a message.
        </p>
        {partnershipSubmitted ? (
          <p className="mt-4 text-neutral-600">Thank you. We will be in touch.</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPartnershipSubmitted(true);
            }}
            className="mt-6 max-w-xl space-y-4"
          >
            <Input name="name" label="Name" required />
            <Input name="email" type="email" label="Email" required />
            <Input name="organization" label="Organization" />
            <Textarea name="message" label="Message" rows={5} required />
            <Button type="submit">Submit</Button>
          </form>
        )}
      </section>
    </div>
  );
}
