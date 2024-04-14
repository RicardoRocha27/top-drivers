"use client";

import { Container } from "./container";
import WhatsappButton from "./whatsapp-button";
import { GoUpButton } from "./go-up-button";

export const ActionButtonsContainer = () => {
  return (
    <div className="fixed w-full bottom-4 z-20">
      <Container>
        <div className="flex justify-between">
          <WhatsappButton />
          <GoUpButton />
        </div>
      </Container>
    </div>
  );
};
