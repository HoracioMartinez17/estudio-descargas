# Estudio: descargas

Instaladores de **Estudio** para Windows 10 y 11 (64 bits). Este repositorio solo contiene binarios y la página de descarga; el código fuente es privado.

- **Descargar:** https://horaciomartinez17.github.io/estudio-descargas/
- **Versiones:** [Releases](../../releases). Cada una trae `Estudio-Setup-<versión>.exe`, `estudio-actualizacion.json` (lo que usa el programa para buscar actualizaciones) y `AVISOS-TERCEROS.txt`.
- **Comprobar la descarga:** `Get-FileHash .\Estudio-Setup-<versión>.exe -Algorithm SHA256` debe dar la huella que figura en la página y en las notas de la Release.

Estudio incluye software de terceros (entre ellos FFmpeg bajo GPLv3); los avisos están en `AVISOS-TERCEROS.txt`.

Los archivos de `docs/` y de la Release los genera automáticamente el workflow de publicación del repo privado: no se editan a mano.
