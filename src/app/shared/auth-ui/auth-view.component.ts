import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface UserData {
  email: string | null | undefined,
  password: string | null | undefined,
  username?: string | null | undefined,
}

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.sass']
})
export class AuthViewComponent {
  @Input() formName!: FormGroup;
  @Input() btnText!: string;
  @Input() urlTitle!: string;
  @Input() routeUrl!: string;
  @Input() requestError!: string;
  @Output() submitFunc: EventEmitter<any> = new EventEmitter();

  public raiseSubmit(): void {
    this.submitFunc.emit();
  }
  
  // constructor() {
  // }


}
