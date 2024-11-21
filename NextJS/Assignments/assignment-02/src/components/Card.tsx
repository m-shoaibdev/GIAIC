interface ICard {
  cardBgColor?: string;
  title: string;
  line?: string;
  description: string;
  boxBgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export default function Card({
  cardBgColor = "bg-white",
  title,
  line = "bg-red-500",
  description,
  boxBgColor = "bg-white",
  titleColor = "text-[#252B42]",
  descriptionColor = "text-[#737373]",
}: ICard) {
  return (
    <div className={`${cardBgColor} py-9 px-10`}>
      <div className={`${boxBgColor} rounded-xl w-[70px] h-[76px] mb-5`}></div>
      <h3 className={`${titleColor} text-[16px] font-bold  tracking-wide`}>
        {title}
      </h3>
      <div className={`${line} h-0.5 w-[50px] my-5`}></div>
      <p
        className={`${descriptionColor} font-medium tracking-wide md:pr-6 text-base`}
      >
        {description}
      </p>
    </div>
  );
}
