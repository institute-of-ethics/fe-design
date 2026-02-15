"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Input from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Contact
      </h1>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Get in Touch</h2>
          <p className="mt-2 text-neutral-600">
            Use the form to send a message. We will respond as soon as possible.
          </p>
          {submitted ? (
            <p className="mt-6 text-neutral-600">Thank you. Your message has been sent.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-6 space-y-4"
            >
              <Input name="name" label="Name" required />
              <Input name="email" type="email" label="Email" required />
              <Select
                name="subject"
                label="Subject"
                options={[
                  { value: "general", label: "General inquiry" },
                  { value: "research", label: "Research" },
                  { value: "education", label: "Education" },
                  { value: "events", label: "Events" },
                ]}
              />
              <Textarea name="message" label="Message" rows={5} required />
              <Button type="submit">Send message</Button>
            </form>
          )}
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Institute of Ethics</h2>
          <address className="mt-4 not-italic text-neutral-600 space-y-2">
            <p>123 Academic Way</p>
            <p>City, State 12345</p>
            <p>
              <a href="mailto:info@instituteofethics.org" className="text-primary hover:text-primary-dark">
                info@instituteofethics.org
              </a>
            </p>
            <p>
              <a href="tel:+15551234567" className="text-primary hover:text-primary-dark">
                +1 (555) 123-4567
              </a>
            </p>
          </address>
          <div className="mt-8 h-48 bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-500 text-sm">
            Map placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
