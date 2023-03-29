import { Component } from '@angular/core';
import { DesignField } from '../../form-element-design/components/design-field.class';

@Component({
  selector: 'app-form-general-design-view',
  templateUrl: './form-general-design-view.component.html',
  styleUrls: ['./form-general-design-view.component.sass']
})
export class FormGeneralDesignViewComponent extends DesignField {
  constructor() {
    super()
  }
}
