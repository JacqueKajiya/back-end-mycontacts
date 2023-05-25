import "dotenv/config";
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}');

    if(!process.env.DATABASE_URL){
        throw new Error("Env var DATABASE_URL does not exist")
    }

    const nodeEnv: string | undefined = process.env.NODE_ENV

    if(nodeEnv === 'test'){
        return{
            type:'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [entitiesPath]
        }
    }

    return {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    }
}

const AppDataSource: DataSource = new DataSource(dataSourceConfig())

export { AppDataSource }
