const sqlOptions ={
    HOST: "localhost",
    PORT: "1433",
    USER: "sa",
    PASSWORD: "051212",
    DB: "askadro",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = sqlOptions