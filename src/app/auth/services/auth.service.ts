import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { environment } from "src/environments/environment";
import { LoginRequestInterface } from "../types/loginRequestInterface";

@Injectable({
    providedIn: 'root',
})
// POST /api/users

// RequestBody 
// {
//   "user":{
//     "username": "Jacob",
//     "email": "jake@jake.jake",
//     "password": "jakejake"
//   }
// }

// Response Body
// {
//     "user": {
//       "email": "jake@jake.jake",
//       "token": "jwt.token.here",
//       "username": "jake",
//       "bio": "I work at statefarm",
//       "image": null
//     }
//   }
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = `https://api.realworld.io/api/users`
        // We will have to transform the data in the stream that is why using pipe and map
        return this.http.post<AuthResponseInterface>(url,data).pipe(map(response => response.user))
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = `https://api.realworld.io/api/users/login`

        return this.http.post<AuthResponseInterface>(url, data).pipe(map(response => response.user))
    }
}