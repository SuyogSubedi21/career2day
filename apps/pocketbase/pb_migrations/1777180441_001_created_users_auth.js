/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
    let collection = new Collection({
        type: "auth",
        name: "users",
        listRule: "@request.auth.id != ''",
        viewRule: "@request.auth.id = id",
        createRule: "",
        updateRule: "@request.auth.id = id",
        deleteRule: "@request.auth.id = id",
        authRule: "",
        fields: [
        {
                "hidden": false,
                "id": "text8221250349",
                "name": "name",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
        },
        {
                "hidden": false,
                "id": "bool1235689854",
                "name": "verified",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "bool"
        },
        {
                "hidden": false,
                "id": "bool7424458177",
                "name": "premium",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "bool"
        },
        {
                "hidden": false,
                "id": "bool8472147379",
                "name": "payment_done",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "bool"
        }
],
        authAlert: { enabled: false },
    })

    try {
        app.save(collection)
    } catch (e) {
        if (e.message.includes("Collection name must be unique")) {
            console.log("Collection already exists, skipping")
            return
        }
        throw e
    }
}, (app) => {
    try {
        let collection = app.findCollectionByNameOrId("users")
        app.delete(collection)
    } catch (e) {
        if (e.message.includes("no rows in result set")) {
            console.log("Collection not found, skipping revert");
            return;
        }
        throw e;
    }
})
