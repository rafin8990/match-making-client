

export type registerFormDataTypes = {
    user_email: string
}


export type loginFormDataTypes = {
    user_email: string
    password: string
}

export type ForgetPasswordDataTypes = {
    new_password: string
    password: string
}


export type ProfileInfroDataTypes = {
    name?: string;
    address?: string
    phoneNumber?: string
    city?: string
    country?: string
    dateOfBirth?: string
    birth_city?: string
    birth_country?: string
    age?: number
    sex?: string
    height?: number
}


export type preferenceFormDataTypes = {
    looks?: number;
    joint_family_living?: number;
    religion?: number;
    education?: number;
    age_range?: number;
    want_children?: number;
}

export type ChangePasswordDataTypes = {
    old_password: string
    new_password: string
}

export type twoFactorDataTypes = {
    two_factor: string;
};






export type ProfileDataTypes = {
    name?: string;
    email?: string;
    address?: {
        city?: string;
        state?: string;
        country?: string;
    };
    phoneNumber?: string;
    age?: number;
    height?: string
    dateOfBirth?: string;
    birthPlace?: string;
    education?: 'college' | 'high school' | 'other';
    educationDetails?: string;
    profession?: string;
    currentJob?: string;
    sex?: 'male' | 'female' | 'other';
    language?: string;
    jamatkhanaAttendence?: string;
    haveChildren?: boolean;
    personality?: string;
    sports?: string;
    hobbies?: string;
    comfortableLongDistance?: 'yes' | 'no';
    partnerGeneratingIncome?: string;
    socialHabits?: string;
    partnersFamilyBackground?: string;
    partnerAgeCompare?: string;
    relocate?: 'yes' | 'no';
    supportPartnerWithElderlyParents?: 'yes' | 'no';
    investLongTermRelationship?: 'yes' | 'no';
    countriesVisited?: number;
    immigratedYear?: string;
    image?: string;
};

