/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("savedCareers");
  collection.fields.removeByName("careerPath");
  return app.save(collection);
}, (app) => {
  try {

  const collection = app.findCollectionByNameOrId("savedCareers");
  collection.fields.add(new SelectField({
    name: "careerPath",
    required: true,
    values: ["data-analyst", "software-engineer", "devops-engineer"],
    maxSelect: 1
  }));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
