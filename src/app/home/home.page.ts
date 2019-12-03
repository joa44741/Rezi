import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countdownFinishedFirstTime = false;
  publicGifs = ['https://media.giphy.com/media/lSbTmUmQwxUmiExV4h/source.gif',
    'https://media.giphy.com/media/Za2odM4y39pa7h5PAv/source.gif',
    'https://media.giphy.com/media/YSHzpToDH3CXJnylVk/source.gif',
    'https://media.giphy.com/media/d8WEZCadbLgSZEo9nZ/source.gif'
  ];

  privateGifs = ['https://media.giphy.com/media/zH4czCC7fXD6U/source.gif',
    'https://media.giphy.com/media/NVMeGBYDhyo/source.gif',
    'https://media.giphy.com/media/1RyF4i56ZstO0/source.gif',
    'https://media.giphy.com/media/RO023EYTyk5yg/giphy.gif'
  ];
  constructor() { }

  countdownFinished() {
    if (!this.countdownFinishedFirstTime) {
      this.countdownFinishedFirstTime = true;
    }
  }

}
