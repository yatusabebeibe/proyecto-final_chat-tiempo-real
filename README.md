# Proyecto final DAW - Chat en tiempo real


**Autor:** Jesús Temprano Gallego

- [Proyecto final DAW - Chat en tiempo real](#proyecto-final-daw---chat-en-tiempo-real)
  - [Descripcion](#descripcion)
  - [Objetivo](#objetivo)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Estructura del proyecto](#estructura-del-proyecto)

## Descripcion

Proyecto final para el ciclo de grado superior FP de DAW (**Desarrollo de Aplicaciones Web**).

Es una aplicación de chat en tiempo real, inspirada en otras tipo WhatsApp, Discord o Teams, pero con funcionalidades más simples.

La aplicación está desarrollada con **Node.js**, siguiendo la arquitectura **MVC** y utilizando el patrón de diseño de **inyección de dependencias**.

## Objetivo

Poner en práctica los conocimientos aprendidos durante el curso, como diseñar, configurar y desplegar aplicaciones web, gestión de usuarios y bases de datos; y aprender nuevas habilidades, como el desarrollo de la parte del servidor con Node.js y la comunicación en tiempo real mediante **WebSockets**.

## Funcionalidades

Funcionalidades mínimas:
- [ ] Enviar y recibir mensajes en tiempo real.
- [ ] Ver la lista de usuarios conectados.
- [ ] Guardar los mensajes en la base de datos.

Funcionalidades adicionales (*si da tiempo*):
- [ ] Crear y unirse a salas o chats grupales.
- [ ] Mensajes privados entre usuarios.
- [ ] Mandar imagenes, videos, documentos y otros archivos.
- [ ] Responder a mensajes en especifico.
- [ ] Alertas de nuevos mensajes.

## Tecnologias utilizadas

- **Node.js** - Servidor y lógica de la aplicación.
- **Express** - Framework para manejar rutas y peticiones HTTP.
- **CORS** - Gestión de políticas de origen cruzado.
- **ws** - Comunicación en tiempo real mediante WebSockets.
- **Zod** - Validación de datos.
- **MariaDB / MySQL** - Base de datos para usuarios y mensajes.
- **EJS** - Plantillas para la interfaz con HTML, CSS y JS

## Estructura del proyecto

```
proyecto/
╷
├─ index.js            # Punto de entrada de la app, levanta el servidor y carga app.js y WebSocket
├─ app.js              # Configuración de Express: middlewares, rutas, EJS, archivos estáticos
├─ package.json        # Dependencias, scripts y metadata del proyecto
│
├─ controllers/        # Controladores: lógica de negocio para responder a las rutas
│   └─ *.js            # Archivos de controladores específicos por entidad o función
│
├─ models/             # Modelos: lógica de acceso a datos según la base de datos
│   ├─ mysql/          # Modelos para MySQL
│   │   ├─ index.js    # Archivo global para exportar modelos MySQL
│   │   └─ *.js        # Modelos específicos (usuarios, facturas, etc.)
│   └─ (otraDB)/       # Modelos para la otra DB
│       ├─ index.js    # Archivo global para exportar modelos MongoDB
│       └─ *.js        # Modelos específicos
│
├─ routes/             # Rutas: definen endpoints y a qué controlador llaman
│   ├─ index.js        # Archivo global que importa todas las rutas
│   └─ *.js            # Rutas específicas por entidad o sección de la app
│
├─ views/              # Vistas EJS
│   └─ *.ejs           # Plantillas para renderizar HTML dinámico
│
├─ public/             # Archivos estáticos accesibles públicamente
│   ├─ css/            # Estilos
│   ├─ js/             # Scripts del frontend
│   └─ images/         # Imágenes y recursos
│
├─ schemas/            # Esquemas de validación (ej: Zod) para los modelos
│   └─ *.js            # Cada archivo corresponde a la validación de un modelo
│
├─ socket/             # Lógica para WebSocket / Socket.io
│   ├─ index.js        # Configuración principal de sockets
│   └─ *.js            # Eventos o namespaces específicos
│
└─ config/             # Archivos de configuración del proyecto
    └─ *.js            # Base de datos, middlewares, variables de entorno, etc.
```
