export default function CustomTooltip({ active, payload, label, accent = '#4a7fb5' }) {
  if (!active || !payload?.length) return null
  const labelText =
    label != null
      ? typeof label === 'number' && label > 1900
        ? `Year ${label}`
        : String(label)
      : null
  return (
    <div
      className="rounded-md border px-3 py-2 text-xs shadow-lg"
      style={{
        backgroundColor: '#1a1a14',
        borderColor: 'rgba(240, 237, 232, 0.15)',
        color: '#f0ede8',
        fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
      }}
    >
      {labelText && <p className="mb-1 font-medium opacity-90">{labelText}</p>}
      {payload.map((entry) => (
        <p key={entry.dataKey || entry.name} style={{ color: entry.color || accent }}>
          <span className="opacity-75">{entry.name}: </span>
          <span className="font-medium">{typeof entry.value === 'number' ? entry.value : entry.value}</span>
        </p>
      ))}
    </div>
  )
}
