/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nzfpg7b9aams2gp",
    "created": "2024-11-14 14:13:41.379Z",
    "updated": "2024-11-14 14:13:41.379Z",
    "name": "userMedia",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bumr7r9x",
        "name": "media_id",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cvcxozyz",
        "name": "media_status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Borrowed",
            "Withdrawn",
            "Returned"
          ]
        }
      },
      {
        "system": false,
        "id": "ohc0dppd",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nzfpg7b9aams2gp");

  return dao.deleteCollection(collection);
})
