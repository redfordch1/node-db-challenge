exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Learning Databases",
          description:
            "It is very difficult to understand the syntax of Databases!!",
          completed: false,
        },
        {
          project_name: "Go winter camping this weekend",
          description:
            "Get out and get some fresh air. Reset for the new week ahead",
          completed: false,
        },
      ]);
    });
};
