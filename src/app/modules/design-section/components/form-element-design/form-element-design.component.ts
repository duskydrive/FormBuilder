import { 
  ChangeDetectionStrategy, 
  ChangeDetectorRef, 
  Component, 
  ElementRef, 
  OnInit, 
} from '@angular/core';
import { Unsub } from 'src/app/shared/service/unsub.class';
import { map, takeUntil } from 'rxjs';
import { FormElement, OptionField, SelectOptionPair } from 'src/app/shared/service/interfaces';
import { AppState } from 'src/app/shared/state/app.state';
import { Store } from '@ngrx/store';
import { 
  addOption, 
  removeOption, 
  removeFormElement, 
  updateFormElement,
} from 'src/app/shared/state/formbuilder/formbuilder.actions';
import { selectFormElements } from 'src/app/shared/state/formbuilder/formBuilder.selectors';
import { SendElementIdService } from 'src/app/shared/service/send-element-id.service';

@Component({
  selector: 'app-form-element-design',
  templateUrl: './form-element-design.component.html',
  styleUrls: ['./form-element-design.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormElementDesignComponent extends Unsub implements OnInit {
  currentElement: FormElement | undefined = undefined;
  
  constructor(
    private store: Store<AppState>, 
    public receiveId: SendElementIdService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
  }

  changeCurrentElement(id: string) {
    this.store.select(selectFormElements)
      .pipe(
        map((arr) => {
          return arr.filter((item: FormElement) => item.id === id)[0]
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((item) => {
        this.currentElement = item;
      });
    this.changeDetectorRef.markForCheck()
  }
  
  ngOnInit() {
    this.receiveId.share
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((id) => {
        id ? this.changeCurrentElement(id) : false;
      })
  }
  
  changeField(obj: OptionField) {
    this.store.dispatch(updateFormElement(obj))
  }

  launchAddOption(obj: SelectOptionPair) {
    this.store.dispatch(
      addOption(
        {
          selectId: obj.selectId, 
          content: {
            id: Date.now().toString(), 
            content: obj.value,
          }
        }
      )
    );
  }
      
  clearInput(ref: ElementRef) {
    ref.nativeElement.value = '';
  }
      
  launchRemoveOption(obj: SelectOptionPair) {
    this.store.dispatch(
      removeOption(
        {
          selectId: obj.selectId, 
          optionId: obj.value,
        }
      )
    );
  }

  removeElement(id: string) {
    this.store.dispatch(removeFormElement({ id }));
  }
 }
