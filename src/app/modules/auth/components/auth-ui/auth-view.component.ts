import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ChangeDetectionStrategy 
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserData } from 'src/app/shared/ts/interfaces';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AuthViewComponent {
  @Input() formGroup!: FormGroup;
  @Input() btnText!: string;
  @Input() urlTitle!: string;
  @Input() routeUrl!: string;
  @Input() requestError!: string;
  @Output() submitFunc: EventEmitter<UserData> = new EventEmitter();

  public raiseSubmit(): void {
    this.submitFunc.emit();
  }
}
