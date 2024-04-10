export default function ProjectComponent({ project }) {
  const { title, description, image, link, technologies } = project;
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black w-[80%] bg-primary p-1 relative md:group/img rounded">
        <a href={link} target="_blank" rel="noreferrer" id="img-projects">
          <img className="" src={image} alt={title} />
        </a>
        <a
          href={link}
          className="absolute top-0 left-0 w-[95%] h-[95%] bg-background opacity-90 hidden md:group-hover/img:flex justify-center items-center m-2"
        >
          <p className="text-white text-center font-satoshiBlack">
            {description}
          </p>
        </a>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="font-satoshiBold text-primary text-md md:xl">{title}</h3>
      </div>
    </div>
  );
}
