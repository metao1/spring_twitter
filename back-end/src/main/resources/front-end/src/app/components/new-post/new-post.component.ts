import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector:
    'app-new-post',
  templateUrl:
    './new-post.component.html',
  styleUrls:
    ['./new-post.component.css'],
  encapsulation:
  ViewEncapsulation.None
})

export class NewPostComponent implements OnInit {

  openTextArea: boolean;
  textAreaValue: string = "";
  disabledTweetButton: boolean = false;

  constructor() {
  }

  toggleHelpMenu() {
    this.openTextArea = !this.openTextArea;
  }

  ngOnInit(): void {
    this.openTextArea = false;
  }

  displayValue(val) {
    this.disabledTweetButton = this.textAreaValue.length < 4;
    if (val.length > 3) {
      console.log(this.disabledTweetButton);
    }
  }

}
