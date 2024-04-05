import { Container } from "@/components/shared/container";
import { ContactsForm } from "./contacts-form";
import { Header } from "@/components/shared/header";

export const Contacts = () => {
  return (
    <Container>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full flex flex-col gap-4">
          <Header translationKeyword="contacts" />
          <ContactsForm />
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8068060.7352983765!2d35.20446787221346!3d9.110790949289074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2sEthiopia!5e0!3m2!1sen!2spt!4v1712344064997!5m2!1sen!2spt"
            style={{
              border: 0,
              borderRadius: "8px",
              height: "100%",
              minHeight: "400px",
              width: "100%",
            }}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};
