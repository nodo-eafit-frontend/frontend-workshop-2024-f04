# Nueva Rama de trabajo

Los cambios de un proyecto solo pueden ser fusionados con la aprobación del equipo. Por ello, usted debe **crear una rama** donde agregará el desarrollo de su reto.

1. Desde su terminal, entre al directorio raíz de su proyecto. La rama principal, donde debe estar, debe llamarse `main`.

```
> git branch

* main
(END)
```

2. Cree una rama nueva, la rama debe nombrarse de la siguiente forma, `[nombre_usuario]/[nombre-reto]`.
   _Ejemplo:_

```
> git checkout -b "johnwick/1-workshop-html"
```

3. una vez creada tu rama, esta está creada localmente en tu máquina, es por eso que tienes que subirla al repo.

```
> git push
fatal: The current branch johnwick/1-workshop-html has no upstream branch.
To push the current branch and set the remote as upstream, use

   git push --set-upstream johnwick/1-workshop-html

> git push --set-upstream johnwick/1-workshop-html
```

4. Ahora puedes realizar los [📝 Preparativos para el taller](/docs/2-BEFORE-CHALLENGE.md)

---

- [⬅️ Atrás](/docs/0-CLONE-REPO.md)
  [🏠 Inicio](/README.md)
