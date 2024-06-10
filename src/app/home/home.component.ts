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
  //currentStep: number = 0;

  constructor(public stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }

 /* nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }*/
}








