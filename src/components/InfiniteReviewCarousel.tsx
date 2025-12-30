import { useEffect, useRef } from 'react';
import { MessageSquareQuote } from 'lucide-react';

const reviews = [
  {
    text: "The team was incredibly efficient and delivered exactly what we needed. Highly recommended!",
    author: "@ClientName",
  },
  {
    text: "Outstanding attention to detail. Our game has never performed better.",
    author: "@GameDev_Pro",
  },
  {
    text: "Professional, fast, and the quality exceeded our expectations. Will work with them again!",
    author: "@StudioLead",
  },
  {
    text: "They transformed our vision into reality. The UI work is absolutely stunning.",
    author: "@CreativeDir",
  },
  {
    text: "Best Roblox development team we've worked with. Period.",
    author: "@RobloxPartner",
  },
];

const InfiniteReviewCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ width: '100%' }}
      >
        {/* Double the reviews for seamless loop */}
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="stealth-card flex-shrink-0 w-[350px] p-6"
          >
            <MessageSquareQuote className="w-8 h-8 text-primary mb-4 opacity-60" />
            <p className="text-foreground text-sm leading-relaxed mb-4 italic">
              "{review.text}"
            </p>
            <cite className="text-primary text-sm font-medium not-italic">
              — {review.author}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteReviewCarousel;
