// Get DOM elements
const modal = document.querySelector(".modal")
const openModalButton = document.querySelector(".hero__button")
const closeModalButton = document.querySelector(".modal__close-button")
const body = document.querySelector("body")

// Manage closing modal
const closingModal = () => {
  modal.setAttribute("isClosing", "")

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("isClosing")
      modal.close()
      // Restore body scrolling
      body.removeAttribute("no-scroll")
    },
    { once: true }
  )
}

// Open modal
openModalButton.addEventListener("click", () => {
  modal.showModal()
  // Prevent body scrolling when modal is open
  body.setAttribute("no-scroll", "")
})

// Close modal
closeModalButton.addEventListener("click", () => {
  closingModal()
})

// Prevent default behaviour for ESC key for dialog
modal.addEventListener("cancel", event => {
  event.preventDefault()
})

// Close modal when user presse ESC key
document.addEventListener("keydown", event => {
  if (modal.hasAttribute("open") && event.keyCode === 27) {
    closingModal()
  }
})

// Close modal when user click outside or on link
document.addEventListener("click", event => {
  if (
    modal.hasAttribute("open") &&
    !event.target.closest(".modal__content") &&
    !event.target.closest(".hero__button")
  ) {
    closingModal()
  }
})
