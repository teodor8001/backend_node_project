export interface UserAttr {
    id: number;
    username: string;
    passwordHash: string;
    email: string;
    createdAt: Date;
}

export type UserCreationAttr = Omit<UserAttr, "createdAt" | "id">;
