
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
        className="z-50 absolute w-4 h-4 rounded-full bg-primary-300 pointer-events-none hidden xl:block"
      />
    );
}