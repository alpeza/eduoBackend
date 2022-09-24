# eduoBackend

API Rest

```
heroku pg:credentials:rotate -a eduokit-admin --confirm eduokit-admin
```

## Backup

<https://devcenter.heroku.com/articles/heroku-postgres-backups>

1.- Realizamos el backup

```bash
heroku pg:backups:capture --app eduokit-admin
```

2.- Descargamos el backup

```bash
heroku pg:backups:url b004 --app eduokit-admin
```

3.- Dump a base de datos

psql -h localhost -p 5432 -U postgres postgres

```bash
su - postgres
pg_restore --verbose --clean --no-acl --no-owner -h localhost -U postgres -d mydb b4d9d1a0-8be9-4ef9-81f0-705656e5c4c3
```
