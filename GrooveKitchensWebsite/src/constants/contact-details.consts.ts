import { TContactDetails } from "../contactus/contact-details.type";

export const contactDetails : TContactDetails = {
    email: 'groovekitchens@gmail.com',
    mobileNumber: '+64 27 283 1088',
} as const satisfies TContactDetails;

export const mobileOneWord = contactDetails.mobileNumber.replace(" ", "");
