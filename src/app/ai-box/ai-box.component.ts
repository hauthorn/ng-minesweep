import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-box',
  templateUrl: './ai-box.component.html',
  styleUrls: ['./ai-box.component.css']
})
export class AiBoxComponent implements OnInit {
  messages: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.messages.push("AI i ready to think...");
  }

}
