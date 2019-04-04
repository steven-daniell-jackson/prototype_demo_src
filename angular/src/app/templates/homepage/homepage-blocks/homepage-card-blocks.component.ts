import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-homepage-card-blocks",
  template: `
    <div class="container-wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0">
            <img
              alt="image"
              class="img-fluid rounded-0"
              src="./assets/homepage-icons/{{ blockImage }}.png"
            />
          </div>
          <div class="col-12 ml-auto col-md-6 col-lg-8">
            <h1>{{ blockName }}</h1>
            <p class="lead">
              Everything {{ blockName }}. <br />
              Contains: {{ blockContains }}
            </p>
            <p>
              <a
                class="btn btn-primary mt-4 mb-5 mb-md-0 btn-lg"
                [routerLink]="blockRouterLink"
                >{{ blockName }}</a
              >
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  `,
  styleUrls: ["./homepage-card-blocks.component.scss"]
})
export class HomepageBlocksComponent implements OnInit {
  @Input() blockName: string;
  @Input() blockContains: string;
  @Input() blockImage: string;
  @Input() blockRouterLink: string;

  constructor() {}

  ngOnInit() {}
}
