import React from 'react';
import { Building2, AlertTriangle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Items Available",
  description = "There are currently no items matching your criteria. Check back soon as new opportunities are onboarded.",
  actionText,
  actionHref,
  onAction
}) => {
  return (
    <div className="bg-[#FAF8F5] border border-[#DDD6C9] rounded-sm p-8 sm:p-12 text-center max-w-lg mx-auto space-y-4">
      <div className="w-14 h-14 rounded-full bg-[#F4EFEA] border border-[#DDD6C9] text-[#8D8A82] flex items-center justify-center mx-auto">
        <Building2 className="w-6 h-6 text-[#B79A63]" />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif-display text-2xl font-bold text-[#11110F]">{title}</h3>
        <p className="text-xs text-[#4A4843] leading-relaxed max-w-sm mx-auto">{description}</p>
      </div>

      {actionText && (
        <div className="pt-2">
          {actionHref ? (
            <Link
              to={actionHref}
              className="inline-block px-5 py-2.5 bg-[#11110F] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#B79A63] hover:text-[#11110F] transition-all duration-200"
            >
              {actionText}
            </Link>
          ) : (
            <button
              onClick={onAction}
              className="px-5 py-2.5 bg-[#11110F] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#B79A63] hover:text-[#11110F] transition-all duration-200 cursor-pointer"
            >
              {actionText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Unable to Load Data",
  message = "A temporary issue occurred while communicating with the platform. Please verify your connection or try again.",
  onRetry
}) => {
  return (
    <div className="bg-[#FAF8F5] border border-[#9B3829]/30 rounded-sm p-8 text-center max-w-md mx-auto space-y-4">
      <div className="w-12 h-12 rounded-full bg-[#9B3829]/10 text-[#9B3829] flex items-center justify-center mx-auto">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif-display text-2xl font-bold text-[#11110F]">{title}</h3>
        <p className="text-xs text-[#4A4843] leading-relaxed">{message}</p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#11110F] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#9B3829] transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Retry Loading</span>
        </button>
      )}
    </div>
  );
};

export const LoadingSpinner: React.FC<{ label?: string }> = ({ label = "Loading data..." }) => {
  return (
    <div className="py-16 text-center space-y-3">
      <div className="w-8 h-8 border-2 border-[#DDD6C9] border-t-[#B79A63] rounded-full animate-spin mx-auto" />
      <p className="text-xs font-mono text-[#8D8A82]">{label}</p>
    </div>
  );
};

export const SkeletonLoader: React.FC<{ rows?: number }> = ({ rows = 3 }) => {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-16 bg-[#F4EFEA] border border-[#DDD6C9] rounded-sm" />
      ))}
    </div>
  );
};
