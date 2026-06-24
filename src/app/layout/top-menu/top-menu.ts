import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss',
})
export class TopMenu {

  currentLanguage = "en";

  private translate = inject(TranslateService);

  useLanguage(language: string){
    this.translate.use(language);
    this.currentLanguage = language;
  }
}