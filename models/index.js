const dbConfig = require("../configs/sqlOptions");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
})
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.account = require("./Account.model")(sequelize,Sequelize);
db.personel = require("./Personel.model")(sequelize,Sequelize);
db.address =require("./Address.model")(sequelize,Sequelize);
db.work = require("./Work.model")(sequelize,Sequelize);

db.account.hasOne(db.personel)
db.personel.belongsTo(db.account)

db.account.hasOne(db.address)
db.address.belongsTo(db.account)

db.personel.hasMany(db.work);
db.work.belongsTo(db.personel)


module.exports = db;