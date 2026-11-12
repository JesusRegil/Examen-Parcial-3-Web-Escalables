# Notas Rápidas

Mini app para guardar y mostrar notas rápidas.
**Frontend:** Angular 22 · **Backend:** Node.js + Express · **Base de datos:** MongoDB (Mongoose)

## Requisitos

- [Node.js](https://nodejs.org/) 22.18 o superior (el backend ejecuta TypeScript directamente con Node)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) instalado y en ejecución en `localhost:27017`

## Estructura

```
notas-api/   → Backend (Express + Mongoose)
notas-app/   → Frontend (Angular)
```

## 1. Backend (`notas-api`)

```bash
cd notas-api
npm install
```

Crea un archivo `.env` dentro de `notas-api` con este contenido:

```
PORT=8080
DB_URI=mongodb://127.0.0.1:27017
DB_NAME=notasDB
```

Inicia el servidor:

```bash
npm run dev
```

Si todo va bien verás:

```
Servidor en http://localhost:8080
Base de datos conectada
```

### Endpoints

| Método | Ruta         | Descripción             |
|--------|--------------|-------------------------|
| GET    | `/api/notas` | Obtiene todas las notas |
| POST   | `/api/notas` | Crea una nota nueva     |

Ejemplo de body para el POST (Postman → Body → raw → JSON):

```json
{
  "titulo": "Mi primera nota",
  "contenido": "Hola desde Postman"
}
```

Los dos campos son obligatorios; si falta alguno, la API responde con `400`.

## 2. Frontend (`notas-app`)

En otra terminal:

```bash
cd notas-app
npm install
npm start
```

Abre **http://localhost:4200** en el navegador.

## Uso

1. Escribe un título y un contenido, y haz clic en **Guardar**.
2. La nota aparece en la lista sin recargar la página.
3. Haz clic en una tarjeta para verla completa en un pop-up. Para cerrarlo, usa ✕, haz clic fuera o presiona Escape.

> El backend debe estar corriendo antes de abrir el frontend; si no, verás un mensaje de error al cargar las notas.
