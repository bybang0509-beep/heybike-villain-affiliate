interface RatingProps {
  score: number;
  maxScore?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function Rating({
  score,
  maxScore = 10,
  size = "md",
  showLabel = false,
}: RatingProps) {
  const percentage = (score / maxScore) * 100;
  const sizeStyles = {
    sm: "w-24 h-2",
    md: "w-32 h-2.5",
    lg: "w-40 h-3",
  };
  const textSize = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-3xl",
  };

  return (
    <div className="inline-flex items-center gap-2">
      <span className={`font-bold text-yellow-400 ${textSize[size]}`}>
        {score}
      </span>
      <span className={`text-gray-400 ${size === "lg" ? "text-lg" : "text-xs"}`}>
        /{maxScore}
      </span>
      <div className={`${sizeStyles[size]} bg-gray-200 rounded-full overflow-hidden`}>
        <div
          className="h-full bg-yellow-400 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-gray-500">
          {score >= 9 ? "Excellent" : score >= 8 ? "Very Good" : score >= 7 ? "Good" : "Average"}
        </span>
      )}
    </div>
  );
}
