interface GoogleMapProps {
  src: string;
  title: string;
}

export function GoogleMap({ src, title }: GoogleMapProps) {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
