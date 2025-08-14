export interface CommentAttr {
    id: number;
    taskId: number;
    userId: number;
    content: string;
    createdAt: Date;
}

export type CommentCreationAttr = Omit<CommentAttr, "id" | "createdAt">;
