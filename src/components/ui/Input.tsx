type InputProps = {
  type?: "text" | "email" | "tel" | "number" | "search" | "password";
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  ariaLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = "text",
  name,
  id,
  label,
  placeholder,
  value,
  required,
  disabled,
  className = "",
  error,
  ariaLabel,
  onChange,
}: InputProps) {
  const inputId = id || name;
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        aria-label={ariaLabel || label}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`block w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-neutral-300 hover:border-neutral-400"
        }`}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type TextareaProps = {
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Textarea({
  name,
  id,
  label,
  placeholder,
  value,
  required,
  disabled,
  rows = 4,
  className = "",
  error,
  onChange,
}: TextareaProps) {
  const inputId = id || name;
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        rows={rows}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`block w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-neutral-300 hover:border-neutral-400"
        }`}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type SelectProps = {
  name: string;
  id?: string;
  label?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({
  name,
  id,
  label,
  value,
  required,
  disabled,
  options,
  className = "",
  onChange,
}: SelectProps) {
  const inputId = id || name;
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      <select
        id={inputId}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
