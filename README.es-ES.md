

# Herramienta de Restablecimiento de ID de Dispositivo para Cursor (Versión Web en Node.js)

Una herramienta utilitaria basada en la web que ayuda a gestionar el sistema de identificación de dispositivos del editor Cursor, restableciendo los IDs de dispositivo almacenados para resolver problemas de restricción de cuenta.

## Características

- 🌐 Interfaz web sencilla para restablecer el ID de dispositivo
- 🔄 Generación automática de IDs de dispositivo aleatorios
- 📦 Copia de seguridad automática de la configuración original
- 🖥️ Soporte multiplataforma (Windows, macOS, Linux)

## Requisitos previos

- Node.js (v14 o superior)
- npm (Node Package Manager)

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/zhitrend/cursor-reset.git
cd cursor-reset
```

2. Instalar dependencias
```bash
npm install
```

## Uso

1. Iniciar el servidor
```bash
npm start
```

2. Abrir tu navegador web y navegar a `http://localhost:port`

3. Hacer clic en el botón "Restablecer ID de dispositivo"

## Notas importantes

- Asegúrese de que Cursor esté completamente cerrado antes de restablecer el ID de dispositivo
- La herramienta crea una copia de seguridad del archivo de configuración existente antes de realizar cambios

## Ubicación de la configuración

La herramienta detecta automáticamente el archivo de configuración según su sistema operativo:

- **Windows**: `%APPDATA%\Cursor\User\globalStorage\storage.json`
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/storage.json`
- **Linux**: `~/.config/Cursor/User/globalStorage/storage.json`

## Descargo de responsabilidad

Esta herramienta ha sido desarrollada únicamente con fines de investigación y educativos. Úsela de forma responsable.

## Licencia

[Especifique su licencia aquí]

## Soporte multilingüe

- [Documento en chino](README.zh-CN.md)
