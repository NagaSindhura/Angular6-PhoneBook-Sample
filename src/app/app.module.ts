import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';//Routing : Step 1, Routes
//Routing : Step 3 , RouterModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { AboutComponent } from './components/about/about.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';
import { ColorizrDirective } from './directives/colorizr.directive';
import { SdComponent } from './components/concepts/sd/sd.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';

//Routing : Step 2
const APP_ROUTES: Routes=[

  { path: '', component: ConceptsComponent},
  { path: 'concepts', component: ConceptsComponent  },
  { path: 'contacts',
    children:[
      { path: '', component: ContactsComponent},
      { path: 'new', component: AddContactComponent, canActivate:[AuthGuard]},
      //canActivate:[AuthGuard]
      { path: ':id', component: ContactDetailsComponent}
    ]
  },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'get-in-touch', component: GetInTouchComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ContactsComponent,
    ConceptsComponent,
    AboutComponent,
    CebComponent, 
    AddContactComponent,
    ContactDetailsComponent,
    ColorizrDirective,
    SdComponent,
    LoginComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)//Routing : Step 3 , RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
