
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../iStep';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

  @Input() steps: iStep[] = [];
  currentStep: number = 0;
  

  //animate: any;

  setCurrentStepTo(index: number): void {
    this.currentStep = index;
  }
  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}

//


/*constructor() { }


  ngOnInit(): void { }

  setCurrentStepTo(index: number): void {
    this.currentStep = index;
  }*/









