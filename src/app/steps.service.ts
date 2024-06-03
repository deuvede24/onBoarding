/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  getSteps(): import("./iStep").iStep[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}*/


import { Injectable } from '@angular/core';
import { iStep } from './iStep';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private steps: iStep[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: 'assets/mediation.svg',
      bgcolor: '#6EC1E4'
    },
    {
      title: 'Programa projectes propis',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      img: 'assets/programming.svg',
      bgcolor: '#C0C0C0'
    },
    {
      title: 'Procura descansar',
      description: 'Descansar bé i desconnectar són vitals. D’aquesta manera reduiràs l’estrès i l’ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
      img: 'assets/time_management.svg',
      bgcolor: '#F9D56E'
    }
  ];

  constructor() { }

  getSteps(): iStep[] {
    return this.steps;
  }
}
