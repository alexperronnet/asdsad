// Import function for closing modal
import { closingModal } from "/src/scripts/modules/modal"

// Get DOM elements
const form = document.querySelector(".form")
const successMessage = document.querySelector(".success-message")
const firstNameInput = document.querySelectorAll("#firstName")
const lastNameInput = document.querySelectorAll("#lastName")
const emailInput = document.querySelectorAll("#email")
const dateOfBirthInput = document.querySelectorAll("#dateOfBirth")
const participationCountInput = document.querySelectorAll("#participationCount")
const locationTournamentInput = document.querySelectorAll(
  "input[name=locationTournament]"
)
const termInput = document.querySelectorAll("#term")

// Manage first name validity
const firstNameCheckValidity = () => {
  // Throw an error if input is empty
  if (firstNameInput[0].validity.valueMissing) {
    firstNameInput[0].closest(".form__label").dataset.error =
      "Ce champs ne doit pas être vide"
  }
  // Throw an error if input doesn't match with pattern
  else if (firstNameInput[0].validity.patternMismatch) {
    firstNameInput[0].closest(".form__label").dataset.error =
      "Vous devez saisir au moins 2 caractères alphatétiques"
  }
  // Else remove error
  else {
    firstNameInput[0].closest(".form__label").removeAttribute("data-error")

    return true
  }
}

// Manage last name validity
const lastNameCheckValidity = () => {
  // Throw an error if input is empty
  if (lastNameInput[0].validity.valueMissing) {
    lastNameInput[0].closest(".form__label").dataset.error =
      "Ce champs ne doit pas être vide"
  }
  // Throw an error if input doesn't match with pattern
  else if (lastNameInput[0].validity.patternMismatch) {
    lastNameInput[0].closest(".form__label").dataset.error =
      "Vous devez saisir au moins 2 caractères alphatétiques"
  }
  // Else remove error
  else {
    lastNameInput[0].closest(".form__label").removeAttribute("data-error")

    return true
  }
}

// Manage email validity
const emailCheckValidity = () => {
  // Throw an error if input is empty
  if (emailInput[0].validity.valueMissing) {
    emailInput[0].closest(".form__label").dataset.error =
      "Ce champs ne doit pas être vide"
  }
  // Throw an error if input doesn't match with pattern
  else if (emailInput[0].validity.patternMismatch) {
    emailInput[0].closest(".form__label").dataset.error =
      "Vous devez saisir une adresse éléctronique valide"
  }
  // Else remove error
  else {
    emailInput[0].closest(".form__label").removeAttribute("data-error")

    return true
  }
}

// Manage date of birth validity
const dateOfBirthCheckValidity = () => {
  // Get user exact current age
  const userAge = () => {
    const yearInMs = 31556926000
    const DateOfBirth = new Date(dateOfBirthInput[0].value)
    const DateOfBirthInMs = DateOfBirth.getTime()
    const currentDate = new Date()
    const currentDateInMs = currentDate.getTime()
    const age = (currentDateInMs - DateOfBirthInMs) / yearInMs

    return age
  }

  // Throw an error if input is empty
  if (dateOfBirthInput[0].validity.valueMissing) {
    dateOfBirthInput[0].closest(".form__label").dataset.error =
      "Ce champs ne doit pas être vide"
  }
  // Throw an error if user age is under 0
  else if (userAge() < 0) {
    dateOfBirthInput[0].closest(".form__label").dataset.error =
      "Le voyage temporel n'existe pas encore"
  }
  // Throw an error if user is to young
  else if (userAge() < 18) {
    dateOfBirthInput[0].closest(".form__label").dataset.error =
      "Vous devez être majeur pour participer"
  }
  // Throw an error if user is to old
  else if (userAge() > 100) {
    dateOfBirthInput[0].closest(".form__label").dataset.error = `${Math.floor(
      userAge()
    )} ans vraiment ? Il faut vous préserver`
  }
  // Else remove error
  else {
    dateOfBirthInput[0].closest(".form__label").removeAttribute("data-error")

    return true
  }
}

// Manage participation count validity
const participationCountCheckValidity = () => {
  // Throw an error if input is empty
  if (participationCountInput[0].validity.valueMissing) {
    participationCountInput[0].closest(".form__label").dataset.error =
      "Ce champs ne doit pas être vide"
  }
  // Throw am error if participation count is not between 0 & 99
  else if (
    participationCountInput[0].validity.rangeUnderflow ||
    participationCountInput[0].validity.rangeOverflow ||
    participationCountInput[0].validity.stepMismatch
  ) {
    participationCountInput[0].closest(".form__label").dataset.error =
      "Vous devez saisir un nombre entier compris entre 0 et 99"
  }
  // Else remove error
  else {
    participationCountInput[0]
      .closest(".form__label")
      .removeAttribute("data-error")

    return true
  }
}

// Manage location tournament validity
const locationTournamentCheckValidity = () => {
  // Create a loop for each location
  for (let i = 0; i < locationTournamentInput.length; i++) {
    // Throw an error if no location was selected
    if (!locationTournamentInput[i].checked) {
      locationTournamentInput[0].closest(".form__fieldset").dataset.error =
        "Vous devez séléctionner une ville"
    }
    // Else remove error
    else {
      locationTournamentInput[0]
        .closest(".form__fieldset")
        .removeAttribute("data-error")

      return true
    }
  }
}

// Manage term validity
const termCheckValidity = () => {
  // Throw an error term was not accepted
  if (!termInput[0].checked) {
    termInput[0].closest(".form__checkbox-group").dataset.error =
      "Vous devez accepter les conditions d'utilisation"
  }
  // Else remove error
  else {
    termInput[0].closest(".form__checkbox-group").removeAttribute("data-error")

    return true
  }
}

// Check validity for first name on blur
firstNameInput[0].addEventListener("blur", () => {
  firstNameCheckValidity()
})

// Check validity for last name on blur
lastNameInput[0].addEventListener("blur", () => {
  lastNameCheckValidity()
})

// Check validity for email on blur
emailInput[0].addEventListener("blur", () => {
  emailCheckValidity()
})

// Check validity for date of birth on blur
dateOfBirthInput[0].addEventListener("blur", () => {
  dateOfBirthCheckValidity()
})

// Check validity for participation count on blur
participationCountInput[0].addEventListener("blur", () => {
  participationCountCheckValidity()
})

// Check validity for location tournament on blur
locationTournamentInput[0].addEventListener("blur", () => {
  locationTournamentCheckValidity()
})

// Check validity for term on blur
termInput[0].addEventListener("blur", () => {
  termCheckValidity()
})

// Manage Success message
const toggleSuccess = () => {
  form.setAttribute("valid", "")
  successMessage.innerHTML = "Merci pour votre inscription"

  // Close modal after 1 second
  setTimeout(() => {
    // Remove success message after 0.5 seconde after the modal is close
    setTimeout(() => {
      successMessage.innerHTML = ``

      form.removeAttribute("valid")
    }, 500)

    closingModal()

    form.reset()
  }, 1000)
}

// Submit form
form.addEventListener("submit", event => {
  // Wait explicitly handled
  event.preventDefault()

  toggleSuccess()

  // Check validity for all inputs before submitting
  if (
    firstNameCheckValidity(firstNameInput[0].value) &&
    lastNameCheckValidity(lastNameInput[0].value) &&
    emailCheckValidity(emailInput[0].value) &&
    dateOfBirthCheckValidity(dateOfBirthInput[0].value) &&
    participationCountCheckValidity(participationCountInput[0].value) &&
    locationTournamentCheckValidity(locationTournamentInput[0].value) &&
    termCheckValidity(termInput[0].value)
  ) {
    toggleSuccess()
  }
})
