import { TContactDetails } from "../contactus/contact-details.type";

export const contactDetails : TContactDetails = {
    email: 'groovekitchens@gmail.com',
    mobileNumber: '021 397 863',
} as const satisfies TContactDetails;

export const mobileOneWord = contactDetails.mobileNumber.replace(/\s/g, "");
