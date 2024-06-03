import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../iStep';

@Component({
  selector: 'app-escena',
  standalone: true,
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  imports: [CommonModule]
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];
}





