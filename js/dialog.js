class Dialog {
  dialog;
  closeButton;

  constructor(content, title, options) {
    this.dialog = document.createElement("div");
    this.dialog.className = "dialog";
    this.dialog.style = "display: none";
    this.dialog.innerHTML = `
            <div class="container">
                <div class="content">
                    <div class='asdd'>
                    <h2>${title}</h2>
                    <p>${content}</p>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(this.dialog);
    document.getElementById("Antwort").blur();
    // Check if options and background color are provided
    if (options) {
      var dsa = document.querySelector(".asdd");
      if (options.bg) {
        dsa.style.backgroundColor = options.bg;
      }
      if (options.color) {
        dsa.style.color = options.color;
      }
    }
  }

  addCloseButton(textContent) {
    this.closeButton = document.createElement("button");
    this.closeButton.className =
      "close mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
    this.closeButton.textContent = textContent;
    this.closeButton.addEventListener("click", this.close.bind(this));
    document.querySelector(".content").appendChild(this.closeButton);
    this.closeButton.focus();
  }

  close() {
    document.body.removeChild(this.dialog);
    FrageStellen();
  }

  open() {
    this.dialog.style.display = "block";
    this.closeButton.focus();
  }
}

export default Dialog;