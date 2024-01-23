import sql from 'mssql';

const config = {
    user: 'db_a8fc99_newflentiswebsite_admin',
    password: 'Aseem@1234',
    server: 'sql8002.site4now.net',
    database: 'db_a8fc99_newflentiswebsite',
};

export async function connect() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('Error connecting to MSSQL:', error);
        throw error;
    }
}

export async function spQuery(pool, procedureName, parameters) {
    try {
        const request = pool.request();

        if (parameters) {
            Object.keys(parameters).forEach((key) => {
                request.input(key, parameters[key]);
            });
        }

        const result = await request.execute(procedureName);
        return result.recordset;

    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}
export async function query(pool, queryString) {
    try {
        const result = await pool.request().query(queryString);
        return result.recordset;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}

export async function disconnect(pool) {
    try {
        await pool.close();
        await sql.close();
    } catch (error) {
        console.error('Error disconnecting from MSSQL:', error);
        throw error;
    }
}
