import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WorstCaseService } from './worst-case.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  symptom: string = '';
  response: string = '';
  scenarios: any[] = [];

  constructor(private worstCaseService: WorstCaseService) {}

  ngOnInit(): void {
    this.worstCaseService.getScenarios().subscribe(
      (data: any) => {
        this.scenarios = data.scenarios;
      },
      (error) => {
        console.error('Error loading scenarios:', error);
      }
    );
  }
  getWorstCase() {
    if (!this.symptom.trim()) {
      this.response = 'Please enter your symptom.';
      return;
    }

    const userInput = this.symptom.toLowerCase();
    let foundResponse = "You're probably fine. Stop overthinking!";

    for (const scenario of this.scenarios) {
      for (const keyword of scenario.keywords) {
        if (userInput.includes(keyword.toLowerCase())) {
          foundResponse = scenario.response;
          break;
        }
      }
    }
    this.response = foundResponse;
  }
}
