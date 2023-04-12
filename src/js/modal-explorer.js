(() => {
  const refs = {
    openModalBtn: document.querySelector("[explorer-modal-open]"),
    closeModalBtn: document.querySelector("[explorer-modal-close]"),
    modal: document.querySelector("[explorer-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();