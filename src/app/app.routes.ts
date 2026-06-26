import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { LegalNotice } from './components/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';

export const routes: Routes = [
    {
        path: "",
        component: MainPage,
        title: 'Marc Riehl'
    },
    {
        path: "legal-notice",
        component: LegalNotice,
        title: 'Legal notice'
    },
    {
        path: "privacy-policy",
        component: PrivacyPolicy,
        title: 'Privacy policy'
    },
    {
        path: "**",
        component: MainPage,
        title: 'Marc Riehl'
    }

];
