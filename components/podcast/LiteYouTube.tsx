"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "@/components/ui/icons";
import "./lite-youtube.css";

/**
 * A YouTube video as its cover until pressed, then YouTube's privacy-enhanced embed, playing:
 * nothing loads from YouTube before someone asks to watch. `eager` when it is the page's first view.
 */
export function LiteYouTube({
  id,
  title,
  cover,
  sizes,
  eager,
}: {
  id: string;
  title: string;
  cover: string;
  sizes: string;
  eager?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="lite-youtube">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
          <Image
            src={cover}
            alt=""
            fill
            sizes={sizes}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
          />
          <span className="btn btn-solid lite-youtube__play">
            <Play width={16} height={16} />
            Play episode
          </span>
        </button>
      )}
    </div>
  );
}
