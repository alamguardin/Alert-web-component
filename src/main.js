import './style.css'

class Alert extends HTMLElement {
	constructor() {
		super();
		this.richColor = false;
	}

	#removeAlert() {
		setTimeout(() => {
			this.lastChild.remove();
		}, 2000);
	}

	default(message) {
        const alertElement = document.createElement('div')
        alertElement.setAttribute('class', 'alert-default')
        alertElement.textContent = message
        this.insertBefore(alertElement, this.firstChild)
		this.#removeAlert();
	}

    info(message) {
		const alertElement = document.createElement('div')
        alertElement.setAttribute('class', 'alert-info')
        alertElement.textContent = message
        this.insertBefore(alertElement, this.firstChild)
		this.#removeAlert();
	}

    error(message) {
		const alertElement = document.createElement('div')
        alertElement.setAttribute('class', 'alert-error')
        alertElement.textContent = message
        this.insertBefore(alertElement, this.firstChild)
		this.#removeAlert();
	}

    warning(message) {
		const alertElement = document.createElement('div')
        alertElement.setAttribute('class', 'alert-warning')
        alertElement.textContent = message
        this.insertBefore(alertElement, this.firstChild)
		this.#removeAlert();
	}

    success(message) {
		const alertElement = document.createElement('div')
        alertElement.setAttribute('class', 'alert-success')
        alertElement.textContent = message
        this.insertBefore(alertElement, this.firstChild)
		this.#removeAlert();
	}
}

customElements.define("use-alert", Alert);