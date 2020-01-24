exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_number: 1,
          description: "Sign up for Lambda School",
          notes: "Do it! Its worth it!!",
          completed: false,
          project_id: 1,
        },
        {
          task_number: 2,
          description: "Start Coding!!",
          notes: "Enjoy it!! Ask questions!! Get a Job!!",
          completed: false,
          project_id: 1,
        },
        {
          task_number: 1,
          description: "Get camping gear out of storage unit.",
          notes: "make a list of what you need.",
          completed: false,
          project_id: 2,
        },
        {
          task_number: 2,
          description: "Hit the grocery store for food and drinks.",
          notes: "make another list for this also.",
          completed: false,
          project_id: 2,
        },
        {
          task_number: 3,
          description: "Hit the gas station and fill up.",
          notes: "Fill the truck! Fill the chainsaw gas can!",
          completed: false,
          project_id: 2,
        },
        {
          task_number: 4,
          description: "HIT THE ROAD!!",
          notes: "DONT LOOK BACK!! GO AND ENJOY YOURSELF!!",
          completed: false,
          project_id: 2,
        },
      ]);
    });
};
