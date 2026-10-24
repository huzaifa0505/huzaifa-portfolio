// Small section label (e.g. "01 — About") shown above each section heading.
export default function NodeMarker({ index }) {
  return (
    <div className="mb-6" aria-hidden="true">
      <span className="font-mono text-xs tracking-widest text-muted uppercase">
        {index}
      </span>
    </div>
  )
}
