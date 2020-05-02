import { Question } from "./game/models/question.model";

declare module "*.json" {
    const value: Question[];
    export default value;
    }