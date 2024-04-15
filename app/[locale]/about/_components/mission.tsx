import { Container } from "@/components/shared/container";

// TODO: Improve this to be prettier
export const Mission = () => {
  return (
    <Container>
      <div className="my-32 max-w-6xl mx-auto flex flex-col md:flex-row gap-24">
        <div className="w-full md:w-1/2">
          <h2
            className="text-4xl md:text-6xl mb-8"
            style={{ fontFamily: "Times New Roman" }}
          >
            Our Mission
          </h2>
          <p className="text-sm text-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque
            tempore doloremque quasi maiores blanditiis aut, mollitia modi
            aspernatur nobis minima laboriosam ut.
          </p>
          <br />
          <p className="text-sm text-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque
            tempore doloremque quasi maiores blanditiis aut, molliti.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-between gap-4 text-center md:text-start">
          <div>
            <h3 className="font-bold text-lg md:text-2xl">44 million</h3>
            <p className="text-sm text-foreground/80">
              Transactions every 24 hours
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-2xl">€119 trillion</h3>
            <p className="text-sm text-foreground/80">Assets under holding</p>
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-2xl">46,000</h3>
            <p className="text-sm text-foreground/80">New users annually</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
