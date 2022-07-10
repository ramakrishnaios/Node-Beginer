const { Sequelize } = require('sequelize');
const dbConfig = require('./config/dbConfig')
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
})
async function start() {
    try {
        await sequelize.authenticate();
        //console.log('Connection has been established successfully.');
    } catch (error) {
        //console.error('Unable to connect to the database:', error);
    }
}
start();
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
(async () => {
    await sequelize.sync({ force: false , alter : true });
    // Code here
})();
module.exports = db;