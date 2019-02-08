# angular-punch-key
Self-contained Angular Attribute Directive that appends characters, one by one, to the designated HTML element at the desired rate of speed.

Sample: 
https://imgur.com/a/IgKHVkO

To Use:
1) Add the typescript file to your project.

2) Add the directive to your NgModule declarations:
```
@NgModule({
  declarations: [
    ...
    PunchKeyDirective
  ]...
```

3) Add the directive to your template. Be sure to specify the text to display (targetText) and the delay between each character (delay):
```
<p appPunchKey [targetText]="'The future is now'" [delay]="'100'"></p> 
```
4) Enjoy! 
