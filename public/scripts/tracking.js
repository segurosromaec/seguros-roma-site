// Rastreo de clics clave (GA4) por delegación: un solo listener clasifica el clic según
// a dónde apunta el link. No hace nada si GA4 no está configurado.
document.addEventListener("click", (event) => {
	var gtag = window.gtag;
	if (typeof gtag !== "function") return;

	var link = event.target && event.target.closest && event.target.closest("a");
	if (!link) return;

	var href = link.getAttribute("href") || "";

	if (href.indexOf("wa.me") !== -1) {
		// En las cards de seguros, el título del seguro identifica el interés.
		var card = link.closest("article");
		var titulo = card && card.querySelector("h3");
		gtag("event", "click_whatsapp", { link_url: href, producto: titulo ? titulo.textContent.trim() : undefined });
	} else if (href.indexOf("tel:") === 0) {
		gtag("event", "click_telefono", { link_url: href });
	} else if (href.indexOf("instagram.com") !== -1) {
		gtag("event", "click_instagram", { link_url: href });
	} else if (href.indexOf("facebook.com") !== -1) {
		gtag("event", "click_facebook", { link_url: href });
	} else if (href.indexOf("maps.app.goo.gl") !== -1 || href.indexOf("google.com/maps") !== -1) {
		gtag("event", "click_maps", { link_url: href });
	} else if (href === "#seguros") {
		gtag("event", "click_ver_seguros", { from_path: location.pathname });
	} else if (href === "#contacto") {
		gtag("event", "click_contacto", { from_path: location.pathname });
	}
});
