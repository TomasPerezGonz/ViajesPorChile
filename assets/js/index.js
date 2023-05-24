/* Implementación Tooltips */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/*Alert envio mensaje*/
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', event => {
    event.preventDefault()
    alert('Tu mensaje ha sido enviado correctamente')
})

