export default function MarqueeSection() {
  const words = [
    "Health Support",
    "Volunteer Impact",
    "Future Ready",
    "Community Support",
  ];

  const content = (
    <div className="flex items-center whitespace-nowrap px-4">
      {words.map((word, i) => (
        <div key={i} className="flex items-center group cursor-default">
          <span className="text-brand-dark font-headline font-extrabold text-3xl uppercase tracking-wide group-hover:text-white transition-colors">
            {word}
          </span>
          <svg className="size-8 text-brand-dark mx-8 group-hover:rotate-90 transition-transform duration-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6-6.2-4.5h7.6z"/>
          </svg>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-primary py-8 overflow-hidden relative border-y-4 border-brand-dark/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
      <div className="flex w-max animate-marquee">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
