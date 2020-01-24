
exports.up = function ( knex ) {
    return knex.schema
        .createTable( 'projects', tbl => {
            tbl.increments();
            tbl.string( 'project_name', 128 )
                .unique()
                .notNullable();
            tbl.string( 'description', 500 );
            tbl.boolean( 'completed' )
                .defaultTo( false );
        } )
        .createTable( 'resources', tbl => {
            tbl.increments();
            tbl.string( 'resource_name', 128 )
                .notNullable();
            tbl.string( 'description', 500 );
        } )
        .createTable( 'tasks', tbl => {
            tbl.increments();
            tbl.integer( 'task_number' )
                .unsigned()
                .notNullable();
            tbl.string( 'description', 500 )
                .notNullable();
            tbl.string( 'notes', 500 );
            tbl.boolean( 'completed' )
                .defaultTo( false );
            tbl.integer( 'project_id' )
                .unsigned()
                .notNullable()
                .references( 'id' )
                .inTable( 'projects' )
                .onUpdate( 'CASCADE' )
                .onDelete( 'CASCADE' );
        } )
        .createTable( 'project_resources', tbl => {
            tbl.integer( 'project_id' )
                .unsigned()
                .notNullable()
                .references( 'id' )
                .inTable( 'projects' )
                .onUpdate( 'CASCADE' )
                .onDelete( 'CASCADE' );
            tbl.integer( 'resource_id' )
                .unsigned()
                .notNullable()
                .references( 'id' )
                .inTable( 'resources' )
                .onUpdate( 'CASCADE' )
                .onDelete( 'CASCADE' );
        } )
};

exports.down = function ( knex ) {
    return knex.schema
        .dropTableIfExists( 'project_resources' )
        .dropTableIfExists( 'tasks' )
        .dropTableIfExists( 'resources' )
        .dropTableIfExists( 'projects' );
};
