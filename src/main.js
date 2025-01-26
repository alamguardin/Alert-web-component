import "./style.css";
import Icons from "./icons";

class Alert extends HTMLElement {
	#icons = new Icons();

	constructor() {
		super();
		this.setAttribute("class", "alert-container");
		this.richColor = false;
	}

	#removeAlert() {
		setTimeout(() => {
			this.lastChild.remove();
		}, 2000);
	}

	default(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-default");
		alertElement.textContent = message;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	info(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-info");
		alertElement.innerHTML = `${this.#icons.INFO} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	error(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-error");
		alertElement.innerHTML = `${this.#icons.ERROR} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	warning(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-warning");
		alertElement.innerHTML = `${this.#icons.WARNING} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	success(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-success");
		alertElement.innerHTML = `${this.#icons.SUCCESS} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}
}

customElements.define("use-alert", Alert);
