import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from "@angular/animations";

// export const DemoMenuOpen = trigger("DemoMenuOpen", [
//   transition("* => *", [
//     query(":enter", [style({ opacity: 0 })], { optional: true }),
//     query(
//       ":leave",
//       [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
//       { optional: true }
//     ),
//     query(
//       ":enter",
//       [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
//       { optional: true }
//     )
//   ])
// ]);

export const myAnimation = trigger("PageAnimation", [
  transition("HomePage => DemoPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "-100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ]),
  transition("DemoPage => HomePage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "-100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);
