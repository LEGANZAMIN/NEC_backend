import * as mariaDao from "../../maria/mariaDao";

export default {
    Query: {
        selectUser: async (_, args) => {
            const { userId } = args;

            const param = { userId };
            const user = await mariaDao.selectOne("users.selectUser", param);

            return user;
        },
        selectUserList: async (_, args) => {
            const { userNm } = args;

            const param = { userNm };
            const users = await mariaDao.selectList("users.selectUserList", param);

            return users;
        }
    }
};
