import mariadb from "mariadb";
import mybatisMapper from "mybatis-mapper";
import mapper from "./sql/mapper";

// mapper 설정
mybatisMapper.createMapper(mapper);

// Pool
const pool = mariadb.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "necuser",
    password: "necuser001",
    database: "NECDB",
    connectionLimit: 5
});

/*
 * NAMESPACE, SQL_ID
 */
function getQueryInfo(queryString) {
    let idx = queryString.indexOf(".");

    let objQueryInfo = new Object();
    objQueryInfo.NAMESPACE = queryString.substring(0, idx);
    objQueryInfo.SQL_ID = queryString.substring(idx + 1, queryString.length);

    return objQueryInfo;
}

export async function selectList(queryInfo, queryParam) {
    let connection;
    try {
        connection = await pool.getConnection();

        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);
        const pStmt = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);

        const rows = await connection.query(pStmt);

        return rows;
    } catch (err) {
        throw err;
    }
}

export async function selectOne(queryInfo, queryParam) {
    let connection;
    try {
        connection = await pool.getConnection();

        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);
        const pStmt = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);

        const rows = await connection.query(pStmt);

        return rows[0];
    } catch (err) {
        throw err;
    }
}

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
