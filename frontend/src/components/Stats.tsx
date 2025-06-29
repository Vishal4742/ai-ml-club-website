
import { TrendingUp } from "lucide-react";

interface StatItemProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatItem = ({ number, label, icon }: StatItemProps) => (
  <div className="text-center">
    {icon && <div className="flex justify-center mb-2">{icon}</div>}
    <div className="text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

const Stats = () => {
  const stats = [
    { number: "150+", label: "Active Members" },
    { number: "25+", label: "Projects Completed" },
    { number: "50+", label: "Events Organized" },
    { number: "10+", label: "Industry Partners" }
  ];

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
      <div className="flex items-center justify-center mb-8">
        <TrendingUp className="text-green-400 mr-3" size={32} />
        <h2 className="text-2xl font-bold text-white">Our Impact</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
