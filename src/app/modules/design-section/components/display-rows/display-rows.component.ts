import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormStyles, GeneralFormStyles } from 'src/app/shared/ts/interfaces';
import { SelectOptionsService } from '../services/select-options.service';

@Component({
  selector: 'app-display-rows',
  templateUrl: './display-rows.component.html',
  styleUrls: ['./display-rows.component.sass']
})
export class DisplayRowsComponent {
  @Input() id!: string;
  @Input() currentStyles!: FormStyles | GeneralFormStyles | null;
  @Output() triggerChange = new EventEmitter();

  public bindFunc(e: MouseEvent): void {
    this.triggerChange.emit(e);
  }

  borderStylesOptions$: Observable<{ id: string; content: string; }[]> = of(this.localOptionsService.getBorderStyles());
  fontWeightOptions$: Observable<{ id: string; content: number; }[]> = of(this.localOptionsService.getFontWeights());

  constructor(
    public localOptionsService: SelectOptionsService,
  ) {
  }

  trackByFn(index: any) {
    return index; // or item.id
  }
}
