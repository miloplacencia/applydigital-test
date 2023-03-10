import { useEffect, useRef } from "react";

export default function InfinityScroll({ fetch }: { fetch: () => void }) {
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (div.current) {
      const interceptConfig = {
        rootMargin: "0px",
        threshold: 0.1,
      };

      observer = new IntersectionObserver((entries) => {
        const isvisible = entries.every((entry) => entry.isIntersecting);
        if (isvisible) {
          fetch();
        }
      }, interceptConfig);

      observer.observe(div.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="infinity-scroll" ref={div} style={{ height: 50 }}></div>
  );
}
