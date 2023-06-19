export function stick(containerRef: any) {
  var htmlElement = document.documentElement;
  var bodyElement = document.body;

  var height = Math.max(
    htmlElement.clientHeight,
    htmlElement.scrollHeight,
    htmlElement.offsetHeight,
    bodyElement.scrollHeight,
    bodyElement.offsetHeight
  );
  if (
    window.scrollY + window.innerHeight > height - window.innerHeight / 2 &&
    window.innerWidth >= 768
  ) {
    containerRef.current?.classList.add("relative");
    containerRef.current?.classList.add("right-3");
    containerRef.current?.classList.add("self-end");
  } else {
    containerRef.current?.classList.remove("relative");
    containerRef.current?.classList.remove("right-3");
    containerRef.current?.classList.remove("self-end");
  }
}
