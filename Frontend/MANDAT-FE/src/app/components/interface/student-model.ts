export interface StudentModel {
    username: string,
    email: string,
    phoneNumber: string,
    passwordHash: string,
    createdAt: Date,
    isActive: boolean,
    isDeleted: boolean,
    bio: string,
    educationalInstitution: string,
    studentGrade: number,
    studentSchoolQualification: string,
    subject: string,
    message: string,
    city: string,
    county: string,
    addressInfo: string,
    numberOfStars?: number
}
