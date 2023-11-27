export default function Hero() {

  return (
    <section content="hero" className="h-128 sm:h-256">
      <div className="h-full flex flex-col items-center justify-center gap-8 xl:gap-16">
        <h1 className="xl:text-8xl sm:text-4xl text-xl  font-satoshiBlack xl:pr-12 sm:pr-4 text-text transform scale-0 animate-enter-1">
          Hello, I'm Roméo
        </h1>
        <h1 className="xl:text-8xl sm:text-4xl  text-xl font-satoshiBlack text-primary transform scale-0 animate-enter-2">
          Hello, I'm Roméo
        </h1>
        <h1 className="xl:text-8xl sm:text-4xl text-xl font-satoshiBlack xl:pl-12 sm:pl-4 text-text transform scale-0 animate-enter-3">
          Hello, I'm Roméo
        </h1>
      </div>
    </section>
  );
}
