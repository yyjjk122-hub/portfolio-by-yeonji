function ArchiveModal({ item, onClose }) {
  if (!item) return null;

  const images = item.images || [item.src];

  return (
    <div className="archive-modal" onClick={onClose}>
      <div className="archive-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="archive-close" type="button" onClick={onClose}>
          ×
        </button>

        <h3>{item.title}</h3>

        <div className={`archive-image-wrap ${images.length > 1 ? "series-mode" : ""}`}>
          {images.map((img, idx) => (
            <img key={img} src={img} alt={`${item.title} ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArchiveModal;
