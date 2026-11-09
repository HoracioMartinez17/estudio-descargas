// Lee version.json (mismo origen, lo escribe el workflow en cada publicación) y actualiza la página.
// Sin él, el HTML ya trae la última versión conocida, así que la descarga funciona aunque falle.
(function () {
  var $ = function (id) { return document.getElementById(id); };

  fetch("version.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (v) {
      if (!/^\d+(\.\d+)*$/.test(v.version) || !/^[0-9a-f]{64}$/.test(v.sha256) || !/^https:\/\//.test(v.url)) return;
      $("boton").href = v.url;
      $("v-etiqueta").textContent = v.version;
      $("v-pie").textContent = v.version;
      $("sha").textContent = v.sha256;
      if (v.tamano) $("v-tamano").textContent = Math.round(v.tamano / 1048576) + " MB";
      $("comando").textContent = "Get-FileHash .\\" + v.archivo + " -Algorithm SHA256";
    })
    .catch(function () {});

  $("copiar").addEventListener("click", function () {
    var boton = this, texto = $("sha").textContent.trim();
    var listo = function () { boton.textContent = "Huella copiada"; setTimeout(function () { boton.textContent = "Copiar huella"; }, 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(texto).then(listo);
    else { var r = document.createRange(); r.selectNodeContents($("sha")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  });
})();
