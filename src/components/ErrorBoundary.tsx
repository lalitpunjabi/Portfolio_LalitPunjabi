import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6 bg-[#0b0f19] text-white rounded-2xl border border-rose-500/20 my-8">
          <div className="max-w-md text-center space-y-6">
            <div className="inline-flex p-4 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/30">
              <AlertTriangle size={36} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight">Something went wrong</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                An unhandled UI error occurred. Please try refreshing the section or page.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-rose-300 text-left overflow-auto max-h-28">
                {this.state.error.message}
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-primary text-black font-semibold text-sm hover:bg-opacity-90 transition-all cursor-pointer"
            >
              <RefreshCw size={16} />
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
