import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDeleteRequest }) {
  if (!card) return null;
  console.log("previewing card:", card);

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-preview"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <button
            className="modal__delete-button"
            onClick={() => onDeleteRequest(card)}
          >
            Delete Item
          </button>
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather:{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
