import Hero from "@/components/sections/Hero";
import MissionStatement from "@/components/sections/MissionStatement";
import HighlightsSection from "@/components/sections/HighlightsSection";
import NewsSection from "@/components/sections/NewsSection";
import EventsSection from "@/components/sections/EventsSection";
import PublicationsGrid from "@/components/sections/PublicationsGrid";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import {
  placeholderResearchAreas,
  placeholderEvents,
  placeholderPublications,
  placeholderNews,
} from "@/lib/data";

const HERO_IMAGE = "/images/home/vietnams-green-economy-expected-to-reach-us300-billion-by-2050.jpg";
const MISSION_IMAGE = "/images/home/organic_farm_field.jpg";
const NEWS_FEATURED_IMAGE = "/images/home/desk_faq-green-economy.jpg";
const EVENTS_FEATURED_IMAGE = "/images/home/house_farming.jpg";

const MISSION_TEXT =
  "The Institute of Ethics aims to be a recognized thought leader and act as a platform for ethical business actions and responsible leadership with a global perspective. We produce original research, educational offerings, and innovative real-world applications through our ecosystem of students, faculty, partner organizations, and the public at large.";

export default function Home() {
  return (
    <>
      <Hero
        title="Institute of Ethics"
        subtitle="A recognized thought leader in ethics. We produce original research, educational offerings, and innovative applications through our ecosystem of students, faculty, partners, and the public—with a global perspective on ethical business and responsible leadership."
        ctaLabel="Engage with Us"
        ctaHref="/engage"
        backgroundImage={HERO_IMAGE}
      />
      <MissionStatement
        missionText={MISSION_TEXT}
        imageSrc={MISSION_IMAGE}
        imageAlt="Mission"
        learnMoreHref="/about/vision"
      />
      <HighlightsSection areas={placeholderResearchAreas} />
      <NewsSection
        articles={placeholderNews}
        maxItems={4}
        featuredImage={NEWS_FEATURED_IMAGE}
      />
      <EventsSection
        events={placeholderEvents}
        maxItems={3}
        featuredEventImage={EVENTS_FEATURED_IMAGE}
      />
      <PublicationsGrid publications={placeholderPublications} maxItems={3} />
      <NewsletterSignup />
    </>
  );
}
