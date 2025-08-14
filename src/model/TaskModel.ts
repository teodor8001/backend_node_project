import { DataTypes, Model, Sequelize } from "sequelize";
import { TaskAttr, TaskAttrCreation } from "../BaseAtrrs/TaskAttrs";
import { Status } from "../BaseAtrrs/UserStatus";

export class TaskModel
    extends Model<TaskAttr, TaskAttrCreation>
    implements TaskAttr
{
    declare id: number;
    declare title: string;
    declare description: string;
    declare status: Status;
    declare userId: number;
    declare dueDate: Date;
    declare createdAt: Date;

    static initModel(sequelize: Sequelize) {
        TaskModel.init(
            {
                id: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                },
                status: {
                    type: DataTypes.ENUM,
                    allowNull: false,
                    defaultValue: Status.PENDING,
                },
                userId: {
                    type: DataTypes.NUMBER.UNSIGNED,
                    allowNull: false,
                },
                dueDate: {
                    type: DataTypes.DATE,
                },
                createdAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "tasks",
            }
        );
    }
}
