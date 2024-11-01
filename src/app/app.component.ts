import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontWidgetComponent } from './front-widget/front-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrontWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'widget-standalone';
}
