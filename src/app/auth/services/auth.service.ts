import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Tokens } from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USER_ID = 'USER_ID';

  constructor(private http: HttpClient) { }

  create_user(data: any): Observable<boolean> {
    console.log("creating ...");
    return this.http.post<boolean>(`${environment.serverurl}/pizza/signup/`,
      data).pipe(
        map(r => {
          console.log(r);
          return true;
        })
      );
  }

  login(data: any): Observable<boolean> {
    return this.http.post<boolean>(`${environment.serverurl}/auth/token/`,
      data).pipe(
        map(r => {
          this.storeTokens({access: r['access'], refresh:r['refresh']});
          return true;
        })
      );
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
 }

  logout() {
    this.removeTokens();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.USER_ID);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  // refreshes token, else logs in again, else logs out
  refreshToken(): Observable<boolean> {
    return this.http.post<any>(`${environment.serverurl}/auth/token/refresh/`, {
      'refresh': this.getRefreshToken()
    }).pipe(
      tap((tokens: Tokens) => { this.storeJwtToken(tokens.access); }),
      mapTo(true),
      catchError(e => {
        this.logout();
        return of(false);
      })
    );
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

}
