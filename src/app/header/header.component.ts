import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  changeMode() {
    const html = document.getElementById('html');
    const toggler = document.querySelector('.toggler');
    const toggleText = document.querySelector('.toggleText');
    html?.classList.toggle('dark');
    toggler?.getAttribute('fill') == 'none'
      ? toggler?.setAttribute('fill', '#1e293b')
      : toggler?.setAttribute('fill', 'none');

    if (toggleText?.textContent === 'Light Mode') {
      toggleText.innerHTML = 'Dark Mode';
    }else if ((toggleText?.innerHTML === 'Dark Mode')) {
      toggleText.textContent = 'Light Mode';
    }
  

    console.log('html was clicked');
  }
  ngOnInit(): void {}
}
