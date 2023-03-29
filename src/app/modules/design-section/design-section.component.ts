import { 
  Component, 
  AfterViewInit, 
  ChangeDetectionStrategy 
} from '@angular/core';
import { takeUntil } from 'rxjs';
import { AccordionManipulatorService } from '../../shared/service/accordion-manipulator.service';
import { Unsub } from '../../shared/service/unsub.class';

@Component({
  selector: 'app-design-section',
  templateUrl: './design-section.component.html',
  styleUrls: ['./design-section.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DesignSectionComponent extends Unsub implements AfterViewInit {
  fieldsTab: HTMLElement | null = null;
  fieldsTabClickable: HTMLElement | null = null;

  constructor( public changeAccordion: AccordionManipulatorService ) { 
    super()

    this.changeAccordion.callToggle
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.openFieldStyling();
      })
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
