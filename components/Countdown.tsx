export default function CountDown() {
  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span>15</span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span>10</span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span>24</span>
          </span>
          min
        </div>
        {/* <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":${counter}}}></span>
    </span>
    sec
  </div> */}
      </div>
    </>
  );
}
