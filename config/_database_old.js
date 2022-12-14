module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 54320),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'user'),
      password: env('DATABASE_PASSWORD', 'admin'),
      ssl: {
        rejectUnauthorized : false,
      }
    },
  },
});
