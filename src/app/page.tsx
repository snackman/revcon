"use client";

import { useState } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Topics from "@/components/topics";
import Speakers from "@/components/speakers";
import Signup from "@/components/signup";
import Divider from "@/components/divider";
import Sponsors from "@/components/sponsors";
import Venue from "@/components/venue";
import Footer from "@/components/footer";
import NewsletterModal from "@/components/newsletter-modal";
import SpeakerModal from "@/components/speaker-modal";

export default function Home() {
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [speakerOpen, setSpeakerOpen] = useState(false);

  return (
    <>
      <Nav onGetNotified={() => setNewsletterOpen(true)} />
      <Hero onGetNotified={() => setNewsletterOpen(true)} />
      <About />
      <Topics />
      <Signup onGetNotified={() => setNewsletterOpen(true)} />
      <Speakers onApply={() => setSpeakerOpen(true)} />
      <Divider />
      <Sponsors />
      <Venue />
      <Footer />
      <NewsletterModal open={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
      <SpeakerModal open={speakerOpen} onClose={() => setSpeakerOpen(false)} />
    </>
  );
}
