//var asyncTest = require("../../../db/db");
import asyncTest from "../../../db/db";
import { getUser } from "../../../db/Greetings/sayHello/sayHello";

export default {
    Query: {
        //sayHello: () => "Hello..."
        //sayHello: () => asyncTest()
        sayHello: async () => {
            const user = await getUser();
            console.log("user", user);

            return user.USER_ID;
        }
    }
};
