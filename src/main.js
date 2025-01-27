import "./style.css";
import Icons from "./icons";

class Alert extends HTMLElement {
	#icons = new Icons();

	constructor() {
		super();
		this.setAttribute("class", "alert-container");
		this.position = this.getAttribute("position");
		console.log(this.position);
	}

	#removeAlert() {
		setTimeout(() => {
			this.lastChild.removeAttribute("show");
		}, 2000);

		setTimeout(() => {
			this.lastChild.remove();
		}, 2500);
	}

	#addAlert(element) {
		if (
			this.position === "top-left" ||
			this.position === "top-center" ||
			this.position === "top-right"
		) {
			this.insertBefore(element, this.firstChild);
		} else {
			this.appendChild(element);
		}

		this.#removeAlert();
	}

	default(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-default");
		alertElement.setAttribute("show", "");
		alertElement.textContent = message;
		this.#addAlert(alertElement);
	}

	info(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-info");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.INFO} ${message}`;
		this.#addAlert(alertElement);
	}

	error(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-error");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.ERROR} ${message}`;
		this.#addAlert(alertElement);
	}

	warning(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-warning");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.WARNING} ${message}`;
		this.#addAlert(alertElement);
	}

	success(message) {
		const alertElement = document.createElement("div");
		alertElement.setAttribute("class", "alert-success");
		alertElement.setAttribute("show", "");
		alertElement.innerHTML = `${this.#icons.SUCCESS} ${message}`;
		this.#addAlert(alertElement);
	}
}

customElements.define("use-alert", Alert);
