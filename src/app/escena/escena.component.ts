/*import { Component } from '@angular/core';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {

}*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  standalone: true,
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() img: string = '';
}






