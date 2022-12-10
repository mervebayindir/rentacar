import { ResponseModel } from "./responseModel";

export interface ListReponseModel<T> extends ResponseModel{
    dat:T[];
}