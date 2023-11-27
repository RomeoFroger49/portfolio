export default function NavLinks(name, key) {
  return (
    <div className="relative group">
      <a className=" group-hover:text-primary mx-1 pl-2 text-text" href="#" key={key}>
        {name.name}
      </a>
      <span className="absolute w-full border-2 border-primary top-9 left-0  mx-2 transform scale-0 translate-x-full transition-transform duration-300 group-hover:scale-100 group-hover:translate-x-0"></span>
    </div>
  );
}
