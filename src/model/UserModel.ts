import { UserAttr, UserCreationAttr } from "../BaseAtrrs/UserAttrs";
import { DataTypes, Model, Sequelize } from "sequelize";
export class UserModel
    extends Model<UserAttr, UserCreationAttr>
    implements UserAttr
{
    declare id: number;
    declare username: string;
    declare passwordHash: string;
    declare email: string;
    declare createdAt: Date;

    static initModel(sequelize: Sequelize) {
        UserModel.init(
            {
                id: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                passwordHash: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    field: "password_hash",
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW,
                    field: "created_at",
                },
            },
            {
                sequelize,
                tableName: "users",
                timestamps: false,
                underscored: true,
                freezeTableName: true,
            }
        );
    }
}
