/*import { Component } from '@angular/core';
import { EscenaComponent } from "../escena/escena.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [EscenaComponent]
})
export class HomeComponent {

}*/

import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { iStep } from '../iStep';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [EscenaComponent]
})
export class HomeComponent implements OnInit {
  steps: iStep[] = [];
  //currentStepIndex: number = 0;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }

  /*nextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  prevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }*/
}







