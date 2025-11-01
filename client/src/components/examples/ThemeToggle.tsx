import ThemeToggleComponent from '../ThemeToggle';
import { ThemeProvider } from '@/hooks/use-theme';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-8 flex items-center justify-center gap-4">
        <span className="text-sm font-medium">Toggle theme:</span>
        <ThemeToggleComponent />
      </div>
    </ThemeProvider>
  );
}
