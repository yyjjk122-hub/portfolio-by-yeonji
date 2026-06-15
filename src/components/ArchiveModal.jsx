import { useEffect } from "react";

function ArchiveModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="archive-modal" data-lenis-prevent onClick={onClose}>
      <div
        className="archive-modal-box"
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose}>
          ×
        </button>

        <h3>{item.title}</h3>

        {item.type === "series" && (
          <div className="modal-series">
            {item.images.map((image, index) => (
              <img key={image} src={image} alt={`${item.title} ${index + 1}`} />
            ))}
          </div>
        )}

        {item.type === "image" && (
          <img className="modal-image" src={item.src} alt={item.title} />
        )}
      </div>
    </div>
  );
}

export default ArchiveModal;