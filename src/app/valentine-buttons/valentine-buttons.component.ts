import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-valentine-buttons',
  standalone: true, // Mark this component as standalone
  templateUrl: './valentine-buttons.component.html',
  styleUrls: ['./valentine-buttons.component.css'],
  imports: [CommonModule] // Add CommonModule to imports array
})
export class ValentineButtonsComponent {
  public showLoveText = false; // Initially set to false
  public showGif = false; // Initially set to false
  public noButtonCount = 0; // Counter for "No" button clicks
  public noButtonTexts = [
    'No', 'Are you sure?', 'Really sure?', 'Are you positive?', 
    'Like, really positive?', 'Think about this', 'Just think about this', 
    'If you say no, I\'ll be very sad', 'Like, really sad', 
    'Really really sad :(', 'Fine, you win', 'Just kidding, say yes', 
    'Please say yes', 'Look over there -->', 'It\'s a pretty button', 
    'Click him, not me', 'Don\'t click me', 'Please stop', 
    'You know I have to type this all out', 'It gets hard okay', 
    'Okay, I\'m done now', 'I give up', 'STOP CLICKING ME', 
    'Seriously, stop', 'I\'ll never win :(', 'No', 'No', 'No', 
    'NO', 'NOOOOOO', 'Why are you still clicking me?', 
    'Okay, I\'m done for real now haha', 'I\'m serious', 
    'Just click yes', 'Bye', ' ', ' ', ' ', '...why?', 
    'Just click yes, I\'m out of ideas haha', 'you\'re enjoying this arent\'t you',
    'I\'m not', 'if you click me again, I\'ll blow up', 'I\'m serious',
    "I\'ts dangerous to click me", 'Fine, I won\'t blow up', 
    'But seriously', 'Stop clicking me', 'No', 'No', 'Noooo',
    '-_-', 'This is the last one, just No after this'
  ];
  public yesButtonSize = 40; // Initial size for "Yes" button
  public minButtonSize = 40; // Minimum size for "Yes" button
  public gifUrl = 'https://media.tenor.com/WjlNymHcH3oAAAAi/love-bear-lovedina.gif'; // URL of the GIF

  @ViewChildren('noButton, yesButton') buttons!: QueryList<ElementRef>; // Reference to buttons

  constructor() {}

  public onNoClick(): void {
    this.noButtonCount++;
    this.yesButtonSize = Math.max(this.noButtonCount * 10 + 40, this.minButtonSize); // Adjust size for "Yes" button
    this.buttons.forEach(button => {
      if (button.nativeElement.tagName === 'BUTTON' && button.nativeElement.id === 'yesButton') {
        button.nativeElement.style.fontSize = this.yesButtonSize + 'px'; // Update font size
      }
    });
  }

  public onYesClick(): void {
    this.showLoveText = true; // Set to true to show love text
    this.showGif = true; // Show GIF
  }

  public get noButtonText(): string {
    return this.noButtonTexts[this.noButtonCount] || 'No'; // Get current text for the "No" button
  }
}