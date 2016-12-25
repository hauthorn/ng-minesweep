import {Component, OnInit, Input} from '@angular/core';
import {AI} from "../../domain/ai/ai";
import {AIListener} from "../../domain/ai/ai-listener";
import {Field} from "../../domain/field/field";

@Component({
  selector: 'app-ai-box',
  templateUrl: './ai-box.component.html',
  styleUrls: ['./ai-box.component.css']
})
export class AiBoxComponent implements OnInit, AIListener {
  messages: Array<string> = [];

  @Input()
  ai: AI;
  private timer: number;

  constructor() {
  }

  ngOnInit() {
    this.messages.push("AI i ready to think...");
    this.ai.addListener(this);
  }

  runStep() {
    this.messages.push("Running AI");
    this.ai.run();

    this.timer = setInterval(() => {
      if (!this.ai.run()) {
        this.messages.push("Stopping, no valid moves");
        clearInterval(this.timer);
      }
    }, 1000);
  }

  fieldsMarked(field: Field): void {
    let coordinates = this.ai.getFieldGrid().getIndicesOfField(field);
    this.messages.push("Marking fields: " + coordinates.first + ", " + coordinates.second );

  }

  fieldExposed(field: Field): void {
    let coordinates = this.ai.getFieldGrid().getIndicesOfField(field);
    this.messages.push("Exposing fields: " + coordinates.first + ", " + coordinates.second );
  }
}
