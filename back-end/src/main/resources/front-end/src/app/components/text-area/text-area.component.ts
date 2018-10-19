import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {state, style, trigger} from "@angular/animations";

@Component({
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '500px'
      })),
      state('out', style({
        overflow: 'hidden',
        height: '0px',
        width: '0px'
      })),
    ])],
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TextAreaComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('inputField')
  inputField: any;

  textAreaOpen: string = 'in';

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.inputField.nativeElement.focus();
  }

  @ViewChild('textarea')
  textarea: ElementRef;

  //call after re-render after changing the class
  ngAfterViewChecked(): void {
    this.inputField.nativeElement.focus();
    this.textAreaOpen = 'in';
    this.cdRef.detectChanges();
  }

}
