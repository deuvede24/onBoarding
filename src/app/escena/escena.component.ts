
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../iStep';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('450ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('450ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
    ])
  ]
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









