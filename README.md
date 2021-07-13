


# Workshop: Deploy a Heroku

![](https://api-cabled.app.faable.com/screenshot?url=https://core-brand-cards.app.faable.com/?title=Deploy%20a%20Heroku)


## 1. Compilar y subir la imagen de docker a Heroku

- `heroku container:push web --app <nombre_app>`

## 2. Desplegar la imagen en producción

- `heroku container:release web --app <nombre_app>`


### Refs:

- https://devcenter.heroku.com/articles/container-registry-and-runtime