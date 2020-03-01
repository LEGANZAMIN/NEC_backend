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
