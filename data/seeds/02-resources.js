exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "Computer",
          description: "Go to Lambda, thats where you will learn all of it!!",
        },
        {
          resource_name: "Mountains",
          description:
            "Hit the storage unit, grab the gear and get out there!!",
        },
      ]);
    });
};
