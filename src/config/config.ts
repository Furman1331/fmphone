import { config } from "./phones/iphone";

export interface PhoneConfig {
    frameImage: string;
    backgroundImage: string
}
// TODO: add selecting phone config depends on which phone we are using.

export const phoneConfig = config;
