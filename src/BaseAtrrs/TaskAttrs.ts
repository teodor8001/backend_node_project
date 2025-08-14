import { Status } from "./UserStatus";

export interface TaskAttr {
    id: number;
    title: string;
    description: string;
    status: Status;
    userId: number;
    dueDate: Date;
    createdAt: Date;
}

export type TaskAttrCreation = Omit<TaskAttr, "id" | "dueDate" | "createdAt">;
