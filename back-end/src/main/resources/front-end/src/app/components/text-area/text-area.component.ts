import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
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

export class TextAreaComponent implements AfterViewInit, AfterViewChecked, OnChanges {

  @ViewChild('inputField')
  inputField: any;

  textAreaOpen: string = 'in';

  @Input() textAreaChangeListener: any;

  @Output() voted = new EventEmitter<string>();

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.inputField.nativeElement.focus();
  }

  @ViewChild('textarea')
  textarea: ElementRef;

  @Output() textValueChangedParent = new EventEmitter();

  onValueChanged(e) {
    this.textValueChangedParent.emit(e);
  }

  //call after re-render after changing the class
  ngAfterViewChecked(): void {
    this.inputField.nativeElement.focus();
    this.textAreaOpen = 'in';
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let change = changes[propName];

      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      console.log(changeLog);
    }
    //this.voted.emit(changes);
  }
  public value : string;

}
