"use client";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { Container } from "./container";
import { Button } from "../ui/button";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-4 z-20">
      <Container>
        <div className="w-fit flex">
          <Button
            variant="whatsapp"
            size="icon"
            className="shadow-md"
            // TODO: CHANGE MOBILE NUMBER
            onClick={() => window.open(`https://wa.me/999999999`)}
          >
            <AiOutlineWhatsApp size={20} className="text-foreground" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default WhatsappButton;
