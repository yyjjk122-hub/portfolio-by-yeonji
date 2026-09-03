import { useEffect } from "react";
import { createPortal } from "react-dom";

function ArchiveModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return createPortal(
    <div
      className="archive-modal"
      data-lenis-prevent
      onClick={onClose}
    >
      <div
        className={`archive-modal-box ${item.longPage ? "long-page-modal" : ""
          }`}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>

        <h3>{item.title}</h3>

        {item.type === "series" ? (
          <div className="modal-series">
            {item.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${item.title} ${index + 1}`}
              />
            ))}
          </div>
        ) : item.longPage ? (
          <div className="long-page-image-wrap">
            <img
              className="long-page-image"
              src={item.src}
              alt={item.title}
            />
          </div>
        ) : (
          <img
            className="modal-image"
            src={item.src}
            alt={item.title}
          />
        )}
      </div>
    </div>,
    document.body
  );
}

export default ArchiveModal;