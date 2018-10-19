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
  disabledTweetButton: boolean = this.textAreaValue.length > 0;

  constructor() {

  }

  set rapidPageValue(value) {
    this.disabledTweetButton = value.length > 0;
  }

  toggleHelpMenu() {
    this.openTextArea = !this.openTextArea;
  }

  ngOnInit(): void {
    this.openTextArea = false;
  }

}
