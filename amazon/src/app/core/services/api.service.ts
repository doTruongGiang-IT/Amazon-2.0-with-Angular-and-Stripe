import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    console.log("error", error, error.error);
    return  throwError(error.error);
  }

  get(path: string = ""): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
