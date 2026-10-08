import type { LucideIcon } from "lucide-react";

// Using regular img tag for static export compatibility.
// "cover" suits banner-style logos (EPFL, JPMorgan), "contain" suits crests that must not be cropped.
export default function LogoTile({
  src,
  alt,
  fit = "cover",
  fallbackIcon: FallbackIcon,
}: {
  src?: string;
  alt: string;
  fit?: "cover" | "contain";
  fallbackIcon?: LucideIcon;
}) {
  return (
    <div
      className={`shrink-0 w-20 h-12 md:w-24 md:h-14 rounded-xl overflow-hidden border border-epfl-red/20 shadow-sm flex items-center justify-center ${
        src && fit === "contain" ? "bg-white p-1" : "bg-epfl-pink/15"
      }`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
        />
      ) : (
        FallbackIcon && <FallbackIcon className="w-6 h-6 text-epfl-pink" />
      )}
    </div>
  );
}
