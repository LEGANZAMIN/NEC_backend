//var asyncTest = require("../../../db/db");
import asyncTest from "../../../db/db";
import * as sayHello from "../../../db/Greetings/sayHello/sayHello";

export default {
    Query: {
        //sayHello: () => "Hello..."
        //sayHello: () => asyncTest()
        sayHello: async () => {
            const user = await sayHello.getUser();
            console.log("user", user);

            //console.log("insert....");
            //const resultInsert = await sayHello.insertUser();

            //const resultupdate = await sayHello.updateUser();

            //const resultInsert = await sayHello.insertUser();
            return "ddd";
        }
    }
};
