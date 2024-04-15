import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { MissionItem } from "./mission-item";
import {
  GraduationCap,
  Hand,
  Rocket,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

// TODO: Improve this to be prettier
export const Mission = () => {
  return (
    <Container>
      <div className="my-32 mx-auto max-w-6xl space-y-12">
        <Header translationKeyword="about.mission" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <MissionItem
            title="Be world-class."
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna."
            icon={<Rocket size={19.5} />}
          />
          <MissionItem
            title="Be supportive."
            description="Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus."
            icon={<Users size={19.5} />}
          />
          <MissionItem
            title="Take responsibility."
            description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
            icon={<Hand size={19.5} />}
          />
          <MissionItem
            title="Always learning."
            description="Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor."
            icon={<GraduationCap size={19.5} />}
          />
          <MissionItem
            title="Enjoy downtime."
            description="Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat."
            icon={<Sun size={19.5} />}
          />
          <MissionItem
            title="Share everything you know."
            description="Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus."
            icon={<Sparkles size={19.5} />}
          />
        </div>
      </div>
    </Container>
  );
};
