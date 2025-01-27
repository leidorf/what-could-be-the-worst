import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorstCaseService {
  private scenariosUrl = 'assets/scenarios.json';

  constructor(private http: HttpClient) {}

  getScenarios(): Observable<any> {
    return this.http.get(this.scenariosUrl);
  }
}
