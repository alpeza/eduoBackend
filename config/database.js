module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USER', 'user'),
      password: env('DATABASE_PASSWORD', 'admin'),
    },
  },
});