


# Workshop: Deploy a Heroku

![](https://api-cabled.app.faable.com/screenshot?url=https://core-brand-cards.app.faable.com/?title=Heroku%20Deploy&subtitle=Despliega%20en%20Heroku%20una%20app%20en%20express)


## 1. Compilar y subir la imagen de docker a Heroku

- `heroku container:push web --app <nombre_app>`

## 2. Desplegar la imagen en producción

- `heroku container:release web --app <nombre_app>`


### Refs:

- https://devcenter.heroku.com/articles/container-registry-and-runtime