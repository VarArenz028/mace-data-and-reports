import { Person} from './person';
import { Injectable } from "@angular/core";

@Injectable()
export class User extends Person {
    IsAuthenticated: boolean;
    Username: string;
    Password: string;
}
