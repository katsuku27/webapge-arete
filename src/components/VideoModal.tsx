import { X } from "lucide-react";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 transition-opacity"
    >
      {/* Konten Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl p-2 bg-white rounded-lg shadow-lg"
      >
        {/* Tombol Close (X) */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1 text-gray-700 hover:text-black shadow-md"
        >
          <X size={24} />
        </button>
        
        {/* Wrapper Video (untuk rasio 16:9) */}
        <div className="aspect-video overflow-hidden rounded">
          <iframe
            src={videoUrl}
            width="100%"
            height="100%"
            title="Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;