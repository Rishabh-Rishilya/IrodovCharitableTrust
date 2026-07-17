import Link from "next/link";

type AccentButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const baseClass =
  "inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 !font-semibold text-white! transition-colors hover:bg-[#e55a30] focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function AccentButton({ href, children, className = "", onClick }: AccentButtonProps) {
  const combined = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
