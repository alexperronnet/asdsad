// Get DOM elements
const modal = document.querySelector(".modal")
const openModalButton = document.querySelector(".hero__button")
const closeModalButton = document.querySelector(".modal__close-button")

// Manage closing modal
const closeModal = () => {
  modal.setAttribute("isClosing", "")

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("isClosing")
      modal.close()
    },
    { once: true }
  )
}

// Open modal
openModalButton.addEventListener("click", () => {
  modal.showModal()
})

// Close modal
closeModalButton.addEventListener("click", () => {
  closeModal()
})

// Prevent default behaviour for ESC key on dialog
modal.addEventListener("cancel", event => {
  event.preventDefault()
})

// Close modal when user presse ESC key
document.addEventListener("keydown", event => {
  modal.hasAttribute("open") && event.keyCode === 27 ? closeModal() : null
})

// Close modal when user click outside or on link
document.addEventListener("click", event => {
  event.target === modal && closeModal()
})
