# Traer mi repo

Antes de clonar este repo tienes que realizar unas configuraciones con tu cuenta de Github.

## Configurar mi git y Github

1. Asegurarse de tener tener el comando [git](https://git-scm.com/downloads) en la terminal.

```
> git --version
```

ó

```
> git -v
```

2. Sigue los pasos de [git | Your Identity](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

3. Conecta tu cuenta Github con tu máquina a travez del protocolo SSH.
   - [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
   - [Youtube | 🔑 Cómo Configurar Claves SSH para Git y GitHub](https://www.youtube.com/watch?v=akuG7eRtaXc) 🎥

¿Genial! Ya puedes clonar un repositorio sin ningún problema.

## Clonar mi repo

1. Clonando el repo traerás una copia que quedará conectada desde el Repositorio Remoto a tu Repositorio Local.

```
> git clone git@github.com:nodo-eafit-frontend/frontend-workshop-2024-f04.git
```

Si no usas SSH puedes utilizar el protocolo HTTPS, _posible tengas que estarte ingresando tus credenciales a cada rato_ 😥.

```
> git clone https://github.com/nodo-eafit-frontend/frontend-workshop-2024-f04.git
```

2. Ya puedes comenzar a aprender con los talleres, [🌿 Crear Rama de Trabajo](/docs/1-NEW-BRANCH.md)

---

[🏠 Inicio](/README.md)
