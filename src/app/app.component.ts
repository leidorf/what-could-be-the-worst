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
    const symptomLower = this.symptom.trim().toLowerCase();

    const foundScenario = this.scenarios.find(
      (scenario) => scenario.symptom.toLowerCase() === symptomLower
    );

    if (!this.symptom.trim()) {
      this.response = 'Please enter your symptom';
      return;
    }

    this.response = foundScenario
      ? foundScenario.response
      : "You're probably fine. Stop overthinking!";
  }

  title = 'What Could Be the Worst?';
}
