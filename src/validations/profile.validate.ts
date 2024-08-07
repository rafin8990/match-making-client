import * as yup from 'yup';

const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
    'image/bmp',
    'image/tiff',
    'image/webp',
    'image/svg+xml',
    'image/x-icon',
];

export const ProfileDataValidation = () =>
    yup.object().shape({
        name: yup.string().max(255).optional(),
        address: yup.object().shape({
            city: yup.string().optional(),
            state: yup.string().optional(),
            country: yup.string().optional(),
        }).optional(),
        phoneNumber: yup.string().optional(),
        age: yup.number().optional(),
        sex: yup.string().oneOf(['male', 'female', 'other']).optional(),
        height: yup.string().optional(),
        dateOfBirth: yup.string().optional(),
        birthPlace: yup.string().optional(),
        education: yup.string().oneOf(['college', 'high school', 'other']).optional(),
        educationDetails: yup.string().optional(),
        profession: yup.string().optional(),
        currentJob: yup.string().optional(),
        language: yup.string().optional(),
        jamatkhanaAttendence: yup.string().optional(),
        haveChildren: yup.boolean().optional(),
        personality: yup.string().optional(),
        sports: yup.string().optional(),
        hobbies: yup.string().optional(),
        comfortableLongDistance: yup.string().oneOf(['yes', 'no']).optional(),
        partnerGeneratingIncome: yup.string().optional(),
        socialHabits: yup.string().optional(),
        partnersFamilyBackground: yup.string().optional(),
        partnerAgeCompare: yup.string().optional(),
        relocate: yup.string().oneOf(['yes', 'no']).optional(),
        supportPartnerWithElderlyParents: yup.string().oneOf(['yes', 'no']).optional(),
        investLongTermRelationship: yup.string().oneOf(['yes', 'no']).required('This field is required'),
        countriesVisited: yup.number().optional(),
        immigratedYear: yup.string().optional(),
        image: yup
            .mixed()
            .optional()
            .test('format', 'Invalid image format.', (value: any) =>
                !value?.name && value?.includes('http')
                    ? true
                    : !value || (value && SUPPORTED_FORMATS.includes(value?.type))
            )
            .test('format', 'Image must be within 1 MB.', (value: any) =>
                !value?.name && value?.includes('http') ? true : !value || value?.size <= 1000000
            ),
    });
