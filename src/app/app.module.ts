import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from 'src/environments/environment.development';



import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { MainComponent } from './modules/form-builder/components/main/main.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AuthViewComponent } from './shared/ui/auth-ui/auth-view.component';
import { AccordionComponent } from './modules/form-builder/components/accordion/accordion.component';
import { FormBuilderComponent } from './modules/form-builder/components/form-builder/form-builder.component';
import { FormElementsComponent } from './modules/form-builder/components/form-elements/form-elements.component';
import { FormElementComponent } from './modules/form-builder/components/form-element/form-element.component';
import { FormGeneralComponent } from './modules/form-builder/components/form-general/form-general.component';
import { ElementFieldsComponent } from './modules/form-builder/components/element-fields/element-fields.component';
import { AuthInterceptorProvider } from './core/interceptors/auth.interceptor';
import { formBuilderReducer } from './shared/state/formbuilder/formbuilder.reducer';

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
    }),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
