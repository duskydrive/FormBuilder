import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DragdropService } from 'src/app/shared/service/dragdrop.service';
import { FormElement } from 'src/app/shared/service/interfaces';
import { AppState } from 'src/app/shared/state/app.state';
import { selectFormElements } from 'src/app/shared/state/formbuilder/formBuilder.selectors';

@Component({
  selector: 'app-drop-section-form-view',
  templateUrl: './drop-section-form-view.component.html',
  styleUrls: ['./drop-section-form-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DropSectionFormViewComponent {
  @Input() backgroundColor!: string;
  @Input() borderWidth!: string;
  @Input() borderColor!: string;
  @Input() borderStyle!: string;
  @Input() fontSize!: number;
  @Input() fontWeight!: number;
  @Input() color!: string;
  @Input() heading!: string;

  public get borderWidthPx(): string {
    return `${this.borderWidth}px`;
  }

  public get fontSizePx(): string {
    return `${this.fontSize}px`;
  }

  elements$ = this.store.select(selectFormElements)
  
  constructor(
    private store: Store<AppState>,
    public dragService: DragdropService,
  ) {}

  onDrop(event: CdkDragDrop<Observable<FormElement[]>>) {
    this.dragService.drop(event);
  }
}
