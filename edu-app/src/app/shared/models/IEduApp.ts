import {IUser} from "./IUser";
import {ICategory} from "./ICategory";
import {EduAppType} from "./EduAppType";

export interface IEduApp {
  id: number;
  name: string;
  description?: string;
  creator: IUser;
  url: string;
  category?: ICategory;
  type: EduAppType;
  status: boolean;
}
