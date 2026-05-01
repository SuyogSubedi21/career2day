/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
    let collection = new Collection({
        type: "auth",
        name: "admin_users",
        viewRule: "@request.auth.collectionName = \"admin_users\"",
        createRule: null,
        updateRule: "id = @request.auth.id",
        fields: [
        {
                "hidden": false,
                "id": "select4155624105",
                "name": "status",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "select",
                "maxSelect": 1,
                "values": [
                        "active",
                        "inactive"
                ]
        },
        {
                "hidden": false,
                "id": "date6193402335",
                "name": "last_login",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "date",
                "max": "",
                "min": ""
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
        let collection = app.findCollectionByNameOrId("admin_users")
        app.delete(collection)
    } catch (e) {
        if (e.message.includes("no rows in result set")) {
            console.log("Collection not found, skipping revert");
            return;
        }
        throw e;
    }
})
