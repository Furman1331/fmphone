import { IPHONE_CONFIG } from "./phones/iphone";
// import { config } from "./phones/samsung";

export type PhoneTypes = "IPHONE" | "SAMSUNG";
export type PhoneTypesLower = "iphone" | "samsung";

export interface PhoneConfig {
    type: PhoneTypes;
    frameImage: string;
    backgroundImage: string
}

export const config = IPHONE_CONFIG;
