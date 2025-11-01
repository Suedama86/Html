import ProgressBarComponent from '../ProgressBar';

export default function ProgressBarExample() {
  return (
    <div className="p-8 max-w-md space-y-6">
      <ProgressBarComponent current={3} total={12} />
      <ProgressBarComponent current={8} total={10} />
      <ProgressBarComponent current={12} total={12} />
    </div>
  );
}
