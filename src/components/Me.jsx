export default function Me() {
  return (
    <section id="me" content="about" className="h-screen ">
      <div className="flex  items-center">
        <span className="hidden lg:block w-1/3 border-1 border-text bg-text h-2 mx-auto"></span>
        <h1 className="xl:text-4xl lg:text-4xl sm:text-2xl text-xl px-1">
          About Me
        </h1>
        <span className="lg:w-1/3 w-[40%] border-1 border-text bg-text h-2  mx-auto"></span>
      </div>
    </section>
  );
}
