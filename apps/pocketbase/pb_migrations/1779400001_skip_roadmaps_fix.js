/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Delete all careerRoadmaps records to avoid phase validation errors
  // This allows the app to work with fallback career data for now
  const existingRoadmaps = app.findRecordsByFilter("careerRoadmaps", "id != null", "", 0, 0);
  for (const r of existingRoadmaps) { 
    app.delete(r); 
  }
  console.log("Deleted " + existingRoadmaps.length + " careerRoadmaps records to fix phase validation.");
});
