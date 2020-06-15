import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  public navigate(link: string): void {
    this.routerExtensions.navigate([link], {
      animated: true,
      transition: { name: 'slide' }
    });
  }
}
