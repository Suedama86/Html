import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
}

export default function ProgressBar({ current, total, showLabel = true }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full" data-testid="component-progress">
      <Progress value={percentage} className="h-2 mb-2" />
      {showLabel && (
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span data-testid="text-progress-label">
            {current} of {total} lessons completed
          </span>
          <span data-testid="text-progress-percentage">{percentage}%</span>
        </div>
      )}
    </div>
  );
}
