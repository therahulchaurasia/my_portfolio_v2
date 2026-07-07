import type { CSSProperties } from "react"

type ProgressiveBlurProps = {
  /** Edge the content blurs toward. */
  direction?: "bottom" | "top"
  layers?: number
  /** Blur radius (px) of the strongest layer. */
  blur?: number
  /** Transparent → background gradient over the blur for legibility. */
  tint?: boolean
  /**
   * Caller controls size + position and MUST include a positioning class
   * (fixed/absolute/sticky/relative) — the blur layers are absolutely
   * positioned against it. E.g. "fixed inset-x-0 bottom-0 z-50 h-32".
   */
  className?: string
}

export default function ProgressiveBlur({
  direction = "bottom",
  layers = 8,
  blur = 10,
  tint = true,
  className,
}: ProgressiveBlurProps) {
  const to = direction === "bottom" ? "to bottom" : "to top"
  const segment = 100 / layers

  const layerStyles: CSSProperties[] = Array.from(
    { length: layers },
    (_, i) => {
      // Geometric ramp ending at `blur`: each layer doubles the previous one.
      // Backdrop filters compound across stacked siblings, so the visible blur
      // ramps smoothly even though each layer only covers a thin band.
      const radius = blur / 2 ** (layers - 1 - i)

      // Band fades in over one segment, holds one, fades out one; stops past
      // 100% are dropped so the strongest layer only peaks at the very edge.
      const stops = [
        `rgba(0,0,0,0) ${i * segment}%`,
        `rgba(0,0,0,1) ${(i + 1) * segment}%`,
        (i + 2) * segment <= 100 && `rgba(0,0,0,1) ${(i + 2) * segment}%`,
        (i + 3) * segment <= 100 && `rgba(0,0,0,0) ${(i + 3) * segment}%`,
      ]
        .filter(Boolean)
        .join(", ")
      const mask = `linear-gradient(${to}, ${stops})`

      return {
        position: "absolute",
        inset: 0,
        zIndex: i + 1,
        backdropFilter: `blur(${radius}px)`,
        WebkitBackdropFilter: `blur(${radius}px)`,
        maskImage: mask,
        WebkitMaskImage: mask,
      }
    },
  )

  return (
    <div
      aria-hidden
      className={`pointer-events-none overflow-hidden ${className ?? ""}`}
    >
      {layerStyles.map((style, i) => (
        <div key={i} style={style} />
      ))}
      {tint && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: layers + 1,
            background: `linear-gradient(${to}, transparent, color-mix(in oklab, var(--background) 65%, transparent))`,
          }}
        />
      )}
    </div>
  )
}

// Copy pasting the styles directly from their
// DIV1: opacity:1;position:absolute;inset:0;z-index:1;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);border-radius:0px;pointer-events:none;backdrop-filter:blur(0.078125px)
// DIV2: opacity:1;position:absolute;inset:0;z-index:2;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);border-radius:0px;pointer-events:none;backdrop-filter:blur(0.15625px)
// DIV3: opacity:1;position:absolute;inset:0;z-index:3;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);border-radius:0px;pointer-events:none;backdrop-filter:blur(0.3125px)
// DIV4: opacity:1;position:absolute;inset:0;z-index:4;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);border-radius:0px;pointer-events:none;backdrop-filter:blur(0.625px)
// DIV5: opacity:1;position:absolute;inset:0;z-index:5;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);border-radius:0px;pointer-events:none;backdrop-filter:blur(1.25px)
// DIV6: opacity:1;position:absolute;inset:0;z-index:6;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);border-radius:0px;pointer-events:none;backdrop-filter:blur(2.5px)
// DIV7: opacity:1;position:absolute;inset:0;z-index:7;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);border-radius:0px;pointer-events:none;backdrop-filter:blur(5px)

// DIV8: opacity:1;position:absolute;inset:0;z-index:8;mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);border-radius:0px;pointer-events:none;backdrop-filter:blur(10px)
