type Props = {
  size?: number;
  className?: string;
};

export function LoneStar({ size = 20, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-ltm-black ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width={size * 0.7}
        height={size * 0.7}
        fill="white"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    </span>
  );
}
