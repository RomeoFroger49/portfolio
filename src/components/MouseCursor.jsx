
export default function MouseCursor() {

    const onMouseMove = (e) => {
        const cursor = document.querySelector("#cursor");
        cursor.style.left = e.pageX - 75 + "px";
        cursor.style.top = e.pageY - 100 + "px";
    }

    document.addEventListener("mousemove", onMouseMove);
    return (
      <div
        id="cursor"
        className="absolute w-6 h-6 rounded-full bg-accent pointer-events-none"
      />
    );
}