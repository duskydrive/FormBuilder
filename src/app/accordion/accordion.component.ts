import { Component, AfterViewInit } from '@angular/core';
import { AccordionManipulatorService } from '../service/accordion-manipulator.service';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements AfterViewInit {
  fieldsTab: HTMLElement | null = null;
  fieldsTabClickable: HTMLElement | null = null;

  constructor( public changeAccordion: AccordionManipulatorService ) { 
    this.changeAccordion.callToggle.subscribe(( ) => {
      this.openFieldStyling();
    } )
  } 

  ngAfterViewInit(): void {
    this.fieldsTab = document.querySelector('#accordion-header-2');
    this.fieldsTabClickable = document.querySelector('#accordion-header-2 .mui-accordion-item-header');
  }
  
  openFieldStyling() {
    const bool = this.fieldsTab?.getAttribute('aria-expanded');
    if (bool === 'false') {
      this.fieldsTabClickable?.click();
    }
  }
}
