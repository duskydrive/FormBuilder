import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../state/app.state';
import * as selectors from '../state/formbuilder/formBuilder.selectors';
// import { selectCurrentElement } from '../state/formbuilder/formBuilder.selectors';
import { updateFormElement } from '../state/formbuilder/formbuilder.actions';
import { updateCurrentElement } from '../state/formbuilder/formbuilder.actions';
import { 
  addOption, 
  addOptionToCurrentElement, 
  removeOption, 
  removeOptionFromCurrentElement,
  removeFormElement,
  removeCurrentElement,
} from '../state/formbuilder/formbuilder.actions';
import { AccordionManipulatorService } from '../service/accordion-manipulator.service';
import { FormElement } from '../service/interfaces';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';
interface Field {
  elementId: string, 
  key: string, 
  val: string
}

interface Option {
  selectId: string, 
  content: string
}
@Component({
  selector: 'app-element-fields',
  templateUrl: './element-fields.component.html',
  styleUrls: ['./element-fields.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementFieldsComponent implements OnInit {
  @ViewChild('option') optionInput!: ElementRef;

  // element$ = this.store.select(selectCurrentElement);
  // element$: FormElement | undefined;
  // element$!: Observable<FormElement | undefined>;
  currentElement: any = undefined;
  
  constructor(
    private router:Router,
    private store: Store<AppState>, 
    public changeAccordion: AccordionManipulatorService,
    private changeDetectorRef: ChangeDetectorRef) {
      
    // this.element$.subscribe((res) => {
      // console.log(res)
    // })
    // setTimeout(() => {
      // this was last ok
      // this.element$ = this.changeAccordion.getDataObject()
    // })
    // this.changeDetectorRef.markForCheck()
    // this.changeAccordion.getDataObject().subscribe(( el ) => {
    //   console.log('el')
    //   console.log(el)
    //   // alert(1)
    //   this.element$ = el;
    //   this.changeDetectorRef.detectChanges();
    //   console.log('check')
    //   console.log(this.element$)
    // } )
    // this.element = this.changeAccordion.getDataObject()
  }

  // ngDoCheck(){
    // console.log("DO CHECK")
  // }
  test(id: string) {
    this.store.select(selectors.getItemById(id!))
    .subscribe((item) => {
      console.log('ok bitch')
      console.log(item)
      this.currentElement = item;
      console.log('check me')
      console.log(this.currentElement)
    });
    this.changeDetectorRef.markForCheck()
  }
  
  ngOnInit() {
    this.changeAccordion.share.subscribe((res) => {
      console.log(22222)
      console.log(res)
      this.test(res!)
    })
    
    // this.element$ = this.changeAccordion.getDataObject()
    return 1
  }
  
  changeField(obj: Field) {
    this.store.dispatch(updateFormElement(obj))
    // this.store.dispatch(updateCurrentElement(obj))
  }

  addOption(selectId: string, value: string) {
    // при рефакторинге перекинь создание айди опции в редюсер addOption 
    // options: item.options?.concat({id: Date.now().toString(), content}),
    const id = Date.now().toString();

    this.store.dispatch(addOption({selectId, content: {id: id, content: value}}));
    // this.store.dispatch(addOptionToCurrentElement({ data: {id: id, content: value} }));
    this.optionInput.nativeElement.value = '';
  }

  removeOption(selectId: string, optionId: string) {
    this.store.dispatch(removeOption({selectId, optionId }));
    // this.store.dispatch(removeOptionFromCurrentElement({ optionId }));
  }

  removeElement(id: string) {
    this.store.dispatch(removeFormElement({ id }));
    // this.store.dispatch(removeCurrentElement());
  }
 

}
