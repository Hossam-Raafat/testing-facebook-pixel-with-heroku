import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  createCharge() {
    const fragment = document.createRange().createContextualFragment(`
      <script>
        fbq('track', 'Purchase', {
          value: 20,
          currency: 'USD'
        });
      </script>`);
      document.querySelector('.facebook-pixel').appendChild(fragment);
  }
}
