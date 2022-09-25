module.exports = ({ env }) => ({
  url: '/dashboard',
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b64cc0a9a08b453ff483832956ddaa17'),
  },
});
