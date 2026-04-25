export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-3xl text-lightgray/90">{subtitle}</p>}
      <div className="mt-4 h-1 w-20 rounded bg-cyantech" />
    </div>
  );
}
