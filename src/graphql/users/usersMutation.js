import * as mariaDao from "../../maria/mariaDao";

export default {
    Mutation: {
        insertUser: async (_, args) => {
            const { userId, userNm, email } = args;

            try {
                const param = { userId: userId, userNm: userNm, email: email };
                const iCnt = await mariaDao.insert("users.insertUser", param);
                console.log(iCnt);

                return true;
            } catch (Error) {
                return false;
            }
        },
        updateUser: async (_, args) => {
            const { userId, userNm, email } = args;

            try {
                const param = { userId: userId, userNm: userNm, email: email };
                const iCnt = await mariaDao.update("users.updateUser", param);
                console.log(iCnt);

                return true;
            } catch (Error) {
                return false;
            }
        },
        deleteUser: async (_, args) => {
            const { userId } = args;

            try {
                const param = { userId };
                await mariaDao.delete1("users.deleteUser", param);

                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }
};
