export default function ButtonGroup() {
  return (
    <>
      <div>
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
      <div>
        <button className="btn btn-active">Default</button>
        <button className="btn btn-active btn-neutral">Neutral</button>
        <button className="btn btn-active btn-primary">Primary</button>
        <button className="btn btn-active btn-secondary">Secondary</button>
        <button className="btn btn-active btn-accent">Accent</button>
        <button className="btn btn-active btn-ghost">Ghost</button>
        <button className="btn btn-active btn-link">Link</button>
      </div>
    </>
  );
}
