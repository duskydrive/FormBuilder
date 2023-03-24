import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from 'src/environments/environment.development';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptorProvider } from './auth.interceptor';
import { AuthViewComponent } from './shared/auth-ui/auth-view.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormElementComponent } from './form-element/form-element.component';
import { formBuilderReducer } from './state/formbuilder/formbuilder.reducer';
import { FormGeneralComponent } from './form-general/form-general.component';
import { ElementFieldsComponent } from './element-fields/element-fields.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthViewComponent,
    MainComponent,
    RegisterComponent,
    AccordionComponent,
    FormBuilderComponent,
    FormElementsComponent,
    FormElementComponent,
    FormGeneralComponent,
    ElementFieldsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ formBuilder: formBuilderReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
    }),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
