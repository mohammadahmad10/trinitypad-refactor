import Accordion from "@/components/Accordion";
import ButtonGroup from "@/components/ButtonGroup";
import Card from "@/components/Card";
import CountDown from "@/components/Countdown";
import Model from "@/components/Model";

export default function Home() {
  return (
    <div className="">
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
      <div className="mx-auto max-w-4xl w-full ">
        <Accordion />
        <ButtonGroup />
        <CountDown />
        <Model />
      </div>
      <div className="w-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}
