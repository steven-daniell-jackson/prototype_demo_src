import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-card-blocks',
  template: `
    <div class="card">
      <div class="card-content">
        <img
          alt="Card image cap"
          class="card-img-top img-fluid"
          src="./assets/homepage-icons/{{ blockImage }}.png"
        />
        <div class="card-body text-center">
          <h4 class="card-title">{{ blockName }}</h4>
          <p class="card-text">Contains: {{ blockContains }}</p>
          <a class="btn btn-primary btn-lg" [routerLink]="blockRouterLink">{{
            blockName
          }}</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./homepage-card-blocks.component.scss']
})
export class HomepageBlocksComponent implements OnInit {
  @Input() blockName: string;
  @Input() blockContains: string;
  @Input() blockImage: string;
  @Input() blockRouterLink: string;

  constructor() {}

  ngOnInit() {}
}
