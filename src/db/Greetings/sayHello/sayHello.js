import * as commonDao from "../../commonDao";

export async function getUsers() {
    const param = { userNm: "22" };
    const rows = await commonDao.selectList("sample.selectSampleList", param);

    console.log("rows", rows);

    return rows;
}

export async function getUser() {
    const param = { userId: "22" };
    const row = await commonDao.selectOne("sample.selectSample", param);

    console.log("row", row);

    return row;
}

export async function insertUser() {
    const param = { userId: "55", userNm: "LEESUNGMIN", email: "lsmin01@gmail.com" };
    const cnt = await commonDao.insert("sample.insertSample", param);

    console.log("cnt", cnt);

    return row;
}

export async function updateUser() {
    const param = { userId: "55", userNm: "LEESUNGMIN11111", email: "lsmin01@gmail.com" };
    const cnt = await commonDao.update("sample.updateSample", param);

    console.log("updateUser", cnt);

    return cnt;
}

export async function deleteUser() {
    const param = { userId: "55", userNm: "LEESUNGMIN", email: "lsmin01@gmail.com" };
    const cnt = await commonDao.delete1("sample.deleteSample", param);

    console.log("cnt", cnt);

    return cnt;
}
