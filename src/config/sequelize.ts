import { Sequelize } from "sequelize";
import { env } from "./env";

export class Database {
    private static instance: Sequelize;

    private constructor() {}

    public static getInstance(): Sequelize {
        if (!this.instance) {
            this.instance = new Sequelize(
                env.db.name!,
                env.db.user!,
                env.db.pass,
                {
                    dialect: 'mysql',
                    logging: true,
                    define: {
                        timestamps: false,
                        underscored: true,
                        freezeTableName: true
                    }
                }
            )
        }

        return this.instance;
    }
}