import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Input() isPlayerActive: boolean = false;
  public playerLabel: string = 'Player';
  public computerLabel: string = 'Computer';

  easteregg(who: string) {
    console.log('active');
    if(who === 'player') {
      this.playerLabel = this.playerLabel.replace('e', '3');
    } else if(who === 'computer') {
      this.computerLabel = 'Chris';
    }
  }
}
