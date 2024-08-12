"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-transparent  p-20">
      <TextRevealCard
  text="Master of the craft"
  revealText="Driven by passion"
>
  <TextRevealCardTitle>
    Skills that Shape Your Journey
  </TextRevealCardTitle>
  <TextRevealCardDescription>
    In the world of code, passion fuels innovation, and skill turns dreams into reality.
  </TextRevealCardDescription>
</TextRevealCard>

    </div>
  );
}
