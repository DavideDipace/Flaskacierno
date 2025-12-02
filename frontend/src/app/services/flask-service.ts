import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlaskService {

  constructor(private http: HttpClient) {}

  getProfilo() {
    // 👉 Sostituisci questo con il tuo URL Flask reale
    // Esempio: http://localhost:5000/profilo
    return this.http.get('http://localhost:5000/profilo');
  }
}
