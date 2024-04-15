type StatisticCardProps = {
  number: string;
  label: string;
  description: string;
  bgColor: string;
  textColor: string;
  height: string;
};

export const StatisticCard = ({
  number,
  label,
  description,
  bgColor,
  textColor,
  height,
}: StatisticCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-6 ${bgColor} ${textColor}`}
      style={{ height }}
    >
      <div className="text-3xl font-semibold">{number}</div>
      <div>
        <div className="text-xl">{label}</div>
        <p className={`mt-2 ${textColor} text-opacity-80 text-sm`}>
          {description}
        </p>
      </div>
    </div>
  );
};
