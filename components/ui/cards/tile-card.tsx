import Image from "next/image";
interface TileDetails {
  logo?: string;
  title: string;
  value: string;
}
export const TileCard = ({
  val,
  className,
}: {
  val: TileDetails;
  className?: string;
}) => {
  return (
    <>
      <div
        data-aos="fade-left"
        className="gradient-shadow-2 w-full rounded-[20px] bg-[#1D203580] p-4"
      >
        <div className="flex items-center justify-start gap-4">
          {val?.logo && (
            <Image
              src={val.logo}
              alt={val.title}
              width={54}
              height={54}
              className="rounded-full object-cover md:size-[18%]"
            />
          )}
          <div className="flex flex-col gap-2">
            <h3 className="w-full text-start text-xl max-md:text-sm">
              {val.title}
            </h3>
            <p
              className={`text-blue-gradient w-full text-[30px] font-bold leading-10 max-md:text-xl ${className}`}
            >
              {val.value}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
