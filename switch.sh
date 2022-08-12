cd config
cat _database.js > /tmp/_database.js
cat database.js > /tmp/database.js
cat /tmp/_database.js > database.js
cat /tmp/database.js > _database.js

echo "CurDatabse: "
cat database.js
npm run develop