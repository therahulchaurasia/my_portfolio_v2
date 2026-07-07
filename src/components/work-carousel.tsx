import ProgressiveBlur from "./progressive-blur"

// Hero work wall — two columns of dummy project cards on an infinite vertical
// marquee (left drifts up, right drifts down), edges dissolved with progressive
// blur. Pure CSS: no JS, pauses on hover, respects reduced-motion.

type Project = {
  name: string
  ratio: string // aspect-ratio for card-height variety
  background: string
}

const columnA: Project[] = [
  { name: "Fugitive", ratio: "4 / 5", background: "linear-gradient(150deg, #1b3bd8, #0a1230)" },
  { name: "Off+Grid", ratio: "3 / 4", background: "radial-gradient(120% 90% at 50% 30%, #2a2a2e, #0c0c0e)" },
  { name: "Optimus", ratio: "1 / 1", background: "linear-gradient(160deg, #ffd9c2, #ff9d76)" },
  { name: "Halcyon", ratio: "4 / 5", background: "linear-gradient(200deg, #d7d7db, #9a9aa2)" },
]

const columnB: Project[] = [
  { name: "Nebula", ratio: "5 / 4", background: "radial-gradient(120% 100% at 70% 40%, #3a2b6b, #0b0b16)" },
  { name: "Lumibuild", ratio: "4 / 5", background: "linear-gradient(160deg, #2f6bff, #0656ba)" },
  { name: "Vantablack", ratio: "1 / 1", background: "linear-gradient(200deg, #14161c, #05060a)" },
  { name: "Aperture", ratio: "3 / 4", background: "linear-gradient(150deg, #4a5568, #1a1f2b)" },
]

export default function WorkCarousel({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="flex gap-4">
        <Column projects={columnA} animation="animate-marquee-up" />
        <Column projects={columnB} animation="animate-marquee-down" />
      </div>
      <ProgressiveBlur
        direction="top"
        className="absolute inset-x-0 top-0 z-10 h-24"
      />
      <ProgressiveBlur
        direction="bottom"
        className="absolute inset-x-0 bottom-0 z-10 h-24"
      />
    </div>
  )
}

function Column({
  projects,
  animation,
}: {
  projects: Project[]
  animation: string
}) {
  return (
    <div className="flex-1">
      <div
        className={`flex flex-col gap-4 ${animation} motion-reduce:animate-none`}
      >
        {[...projects, ...projects].map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>
    </div>
  )
}

function Card({ name, ratio, background }: Project) {
  return (
    <div
      className="group/card relative overflow-hidden rounded-2xl"
      style={{ aspectRatio: ratio, background }}
    >
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    </div>
  )
}
