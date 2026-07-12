"use client";

import { useState } from "react";
import EnvelopeOpening from "@/components/EnvelopeOpening";
import InvitationLayout from "@/components/InvitationLayout";
import BackgroundEffects from "@/components/BackgroundEffects";
import AudioPlayer from "@/components/AudioPlayer";
import Hero from "@/sections/Hero";
import Countdown from "@/sections/Countdown";
import Timeline from "@/sections/Timeline";
import Venue from "@/sections/Venue";
import RSVP from "@/sections/RSVP";

export default function Home() {
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <main className="w-full min-h-screen bg-[#1a1a1a]">
      {!hasOpened ? (
        <EnvelopeOpening onOpen={() => setHasOpened(true)} />
      ) : (
        <InvitationLayout>
          <BackgroundEffects />
          <Hero />
          <Countdown />
          <Timeline />
          <Venue />
          <RSVP />
          <AudioPlayer />
        </InvitationLayout>
      )}
    </main>
  );
}
