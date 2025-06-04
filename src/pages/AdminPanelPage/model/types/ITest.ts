import { IQuestion } from "./IQuestion";

export interface ITest {
    title: string;
    id: string;
    questions: IQuestion[];
}
