export interface MyMentorsModel {
    username: string,
    email: string,
    phoneNumber: string,
    passwordHash: string,
    createdAt: Date,
    isActive: boolean,
    isDeleted: boolean,
    bio: string,
    educationalInstitution: string
}
