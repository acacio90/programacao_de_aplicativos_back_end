require('dotenv').config()
module.exports = {
   database: process.env.DB_NAME,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   dialect: process.env.DB_DIALECT,
   host: process.env.DB_HOST,
   define: {
     timestamps: true,
     underscored: true,
   },
 };