import React from "react";

interface GoogleMapProps {
  src: string;
  title?: string;
  className?: string;
}

export function GoogleMap({ src, title = "Office Location", className = "" }: GoogleMapProps) {
  return (
    <div className={`${className}`}>
      <iframe
        src={src}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="w-full h-full min-h-[300px] rounded-[12px] overflow-hidden"
      ></iframe>
    </div>
  );
}