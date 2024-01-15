import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `

  <app-title [title]="currentFramework()" />

  <pre> {{ fameworkAsSignal() | json }} </pre>
  <pre> {{ fameworkAsProperty | json }} </pre>

  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.fameworkAsSignal().name }`
  );

  public fameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public fameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {

    setTimeout(() => {

      // this.fameworkAsProperty.name = 'React';
      this.fameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))

      console.log('Hecho')
    }, 3000);

  }

}
