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
		this.innerHTML += `<div>${message}</div>`;
		this.#removeAlert();
	}
}

customElements.define("use-alert", Alert);

const alert = document.querySelector("#alert");

document.addEventListener("click", () => alert.default("This is my Alert"));
