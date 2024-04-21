import "../Progress.css"; // Import external CSS file

export default function ProgressBar({ value, max }) {
  return (
    <div
      className="progress-bar" // Apply Tailwind CSS class for styling
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
      style={{
        "--targetWidth": `${value}%`,
        animation: "fillEffect 1.5s ease-out forwards",
      }} // Set width through CSS variable and animate
    >
      {value}%
    </div>
  );
}
