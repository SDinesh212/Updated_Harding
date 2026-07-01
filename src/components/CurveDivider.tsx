type CurveDividerProps = {
  className?: string;
  fill: string;
};

export const PRENUVO_CURVE_PATH =
  "M0 150 C240 118 472 96 720 94 C968 96 1200 121 1440 156 L1440 180 L0 180 Z";

export default function CurveDivider({ className = "", fill }: CurveDividerProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
    >
      <path fill={fill} d={PRENUVO_CURVE_PATH} />
    </svg>
  );
}
