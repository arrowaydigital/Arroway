import React from "react";

interface GoogleMapProps {
  src: string;
  title?: string;
  className?: string;
}

export function GoogleMap({ src, title = "Office Location", className = "" }: GoogleMapProps) {
  return (
    <div className={`${className} rounded-xl`}>
      <iframe
        src={src}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="w-full h-full min-h-[300px] rounded-xl overflow-hidden border-0"
      ></iframe>
    </div>
  );
}
