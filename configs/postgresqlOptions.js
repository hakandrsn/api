const sqlOptions ={
    HOST: "localhost",
    PORT: "1433",
    USER: "postgres",
    PASSWORD: "051212",
    DB: "askadro",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = sqlOptions