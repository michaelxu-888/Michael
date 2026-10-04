(() => {
      const menuButton = document.getElementById("menuButton");
      const menuSheet = document.getElementById("menuSheet");
      const menuCloseButton = document.getElementById("menuCloseButton");
      const saveContactButton = document.getElementById("saveContactButton");

      const setMenuState = (open) => {
        menuSheet.classList.toggle("is-open", open);
        menuSheet.setAttribute("aria-hidden", String(!open));
        menuButton.setAttribute("aria-expanded", String(open));
      };

      menuButton.addEventListener("click", () => setMenuState(true));
      menuCloseButton.addEventListener("click", () => setMenuState(false));

      menuSheet.addEventListener("click", (event) => {
        if (event.target === menuSheet) setMenuState(false);
      });

      menuSheet.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenuState(false);
      });

      saveContactButton.addEventListener("click", () => {
        const vCard = [
          "BEGIN:VCARD",
          "VERSION:3.0",
          "N:Xu;Botian;;;",
          "FN:Xu Botian",
          "NICKNAME:Michael",
          "ORG:Nanyang Technological University",
          "TITLE:Bachelor of Mechanical Engineering Student",
          "EMAIL:Michael828xu@gmail.com",
          "TEL;TYPE=CELL:+6586089767",
          "URL:https://www.linkedin.com/in/botian-xu-4337b9231/",
          "NOTE:NFC contact card",
          "END:VCARD"
        ].join("\n");

        const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "Xu_Botian_Michael.vcf";
        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => URL.revokeObjectURL(url), 1000);
      });
    })();

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "image-placeholder";
    fallback.textContent = "Project image";
    img.replaceWith(fallback);
  }, { once: true });
});
