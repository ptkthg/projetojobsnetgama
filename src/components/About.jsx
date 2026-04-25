import ProfileAvatar from './ProfileAvatar';
import SectionTitle from './SectionTitle';

export default function About({ aboutText, person }) {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Sobre mim" />
      <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1fr_auto] md:p-8">
        <div className="space-y-5 text-lightgray/95">
          {aboutText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="hidden md:block">
          <ProfileAvatar src={person.profileImagePath} alt={person.fullName} sizeClass="h-40 w-40" textClass="text-4xl" />
        </div>
      </div>
    </section>
  );
}
