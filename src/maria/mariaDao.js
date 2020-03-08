import "../../env";
import mariadb from "mariadb";
import mybatisMapper from "mybatis-mapper";
import mapper from "./sql/mapper";

// mapper 설정
mybatisMapper.createMapper(mapper);

// Pool
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NM,
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
    } finally {
        if (connection) connection.release();
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
    } finally {
        if (connection) connection.release();
    }
}

export async function insert(queryInfo, queryParam) {
    let connection;
    try {
        connection = await pool.getConnection();

        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);
        const pStmt = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);

        const { affectedRows } = await connection.query(pStmt);

        return affectedRows;
    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.release();
    }
}

export async function update(queryInfo, queryParam) {
    let connection;
    try {
        connection = await pool.getConnection();

        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);
        const pStmt = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);

        const { affectedRows } = await connection.query(pStmt);

        return affectedRows;
    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.release();
    }
}

export async function delete1(queryInfo, queryParam) {
    let connection;
    try {
        connection = await pool.getConnection();

        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);
        const pStmt = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);

        const { affectedRows } = await connection.query(pStmt);

        return affectedRows;
    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.release();
    }
}
