



type Role = "admin" | "teacher" | "student";

export interface LoginT {
    username: string;
    password: string;
    role: Role;
}



export interface LoginResponce {
    data: {
        token: string;
        user: {
            createAt: string;
            fullName: string;
            id: string;
            role: string;
            updatedAt: string;
            username: string;
        };
    };
    message: {
        en: string;
        ru: string;
        uz: string;
    }
}