import "./style.css";
import Icons from "./icons";

class Alert extends HTMLElement {
	#icons = new Icons();

	constructor() {
		super();
		this.setAttribute("class", "alert-container");
	}

	#removeAlert() {
		setTimeout(() => {
			this.lastChild.removeAttribute("show");
		}, 2000);

		setTimeout(() => {
			this.lastChild.remove();
		}, 2500);
	}

	default(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-default");
		alertElement.setAttribute("show", "");
		alertElement.textContent = message;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	info(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-info");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.INFO} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	error(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-error");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.ERROR} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	warning(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-warning");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.WARNING} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}

	success(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-success");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.SUCCESS} ${message}`;
		this.insertBefore(alertElement, this.firstChild);
		this.#removeAlert();
	}
}

customElements.define("use-alert", Alert);
