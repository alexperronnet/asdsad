// Get DOM elements
const header = document.querySelector(".header")
const toggleNav = document.querySelector(".header__toggle-nav")
const nav = document.querySelector(".header__nav")
const navLinks = document.getElementsByClassName("header__nav-link")

// Prevent tabindex when nav link is active
for (const navLink of navLinks) {
  if (navLink.hasAttribute("data-active")) {
    navLink.tabIndex = -1
  }
}

// Manage toggling navbar
const togglingNav = () => {
  nav.toggleAttribute("data-visible")
  header.toggleAttribute("data-overlay")
}

// Manage closing navbar
const closingNav = () => {
  nav.removeAttribute("data-visible")
  header.removeAttribute("data-overlay")
  toggleNav.setAttribute("aria-expanded", false)
}

// Open navbar
toggleNav.addEventListener("click", () => {
  togglingNav()

  // Indicate if the control is expanded or collapsed
  if (nav.hasAttribute("data-visible")) {
    toggleNav.ariaExpanded = true
  } else {
    toggleNav.ariaExpanded = false
  }
})

// Close navbar when user press ESC key
document.addEventListener("keydown", event => {
  if (nav.hasAttribute("data-visible") && event.keyCode === 27) {
    closingNav()
  }
})

// Close navbar when user click outside the nav or on link
document.addEventListener("click", event => {
  const isOutsideNav =
    event.target.closest(".header__nav-link") ||
    (!event.target.closest(".header__nav") &&
      !event.target.closest(".header__toggle-nav"))

  if (nav.hasAttribute("data-visible") && isOutsideNav) {
    closingNav()
  }
})

// Close navbar when user resize window
new ResizeObserver(entries => {
  if (entries[0].contentRect.width >= 768) {
    closingNav()
  }
}).observe(document.body)
