export interface IUser {
    UserID: number,
    Role: string,
    BadgeNo: string,
    Position?: string,
    Name?: string,
    Email?: string,
    StartDate: Date,
    EndDate?: Date
}
