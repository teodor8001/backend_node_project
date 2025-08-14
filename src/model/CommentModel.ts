import { DataTypes, Model, Sequelize } from "sequelize";
import { CommentAttr, CommentCreationAttr } from "../BaseAtrrs/CommentAttrs";
export class CommentModel extends Model<CommentAttr, CommentCreationAttr> implements CommentAttr {
    declare id: number;
    declare content: string;
    declare userId: number;
    declare taskId: number;
    declare createdAt: Date;
    
    public static initModel(sequelize: Sequelize) {
        CommentModel.init({
            id: {
                type: DataTypes.NUMBER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userId: {
                type: DataTypes.NUMBER.UNSIGNED,
                allowNull: false,
            },
            taskId: {
                type: DataTypes.NUMBER.UNSIGNED,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: "comments",
        }
    )
    }
}