import mariadb from "mariadb";

const pool = mariadb.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "necuser",
    password: "necuser001",
    database: "NECDB",
    connectionLimit: 5
});

async function asyncTest() {
    let connection;

    try {
        connection = await pool.getConnection();
        const rows = await connection.query("SELECT * FROM TB_USER WHERE USER_ID  = '11'");
        console.log("rows", rows);
        console.log("rows", rows[0]);
        console.log("rows", rows[0].USER_ID);

        //return "Sungmin...";
        return rows[0].USER_ID;
    } catch (err) {
        throw err;
    } finally {
        if (conn) connection.release();
    }
}

export default asyncTest;
