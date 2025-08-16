import { Database } from "../config/sequelize";
import { UserModel } from "./UserModel";
import { CommentModel } from "./CommentModel";
import { TaskModel } from "./TaskModel";

const sequelize = Database.getInstance();

UserModel.initModel(sequelize);
TaskModel.initModel(sequelize);
CommentModel.initModel(sequelize);

UserModel.hasMany(TaskModel, {
    foreignKey: {name: "userId", field: "user_id", allowNull: false},
    as: "tasks",
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
});

TaskModel.belongsTo(UserModel, {
    foreignKey: {name: "userId", field: "user_id", allowNull: false},
    as: "user",
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
});

UserModel.hasMany(CommentModel, {
    foreignKey: {name: "userId", field: "user_id", allowNull: false},
    as: "comments",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

CommentModel.belongsTo(UserModel, {
    foreignKey: {name: "userId", field: "user_id", allowNull: false},
    as: "user",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

TaskModel.hasMany(CommentModel, {
    foreignKey: {name: "taskId", field: "task_id", allowNull: false},
    as: "comments",
    onUpdate: "CASCADE",
    onDelete: "CASCADE",    
});

CommentModel.belongsTo(TaskModel, {
    foreignKey: {name: "taskId", field: "task_id", allowNull: false},
    as: "task",
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
}); 