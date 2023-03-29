import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderViewComponent {
  @Output() triggerExit = new EventEmitter();

  public bindFunc(): void {
    this.triggerExit.emit();
  }
}
