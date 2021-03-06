import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AssignmentsComponent } from "./assignments/assignments.component";
import { SubmittedDirective } from "./shared/submitted.directive";
import { UnsubmittedDirective } from "./shared/unsubmitted.directive";
import { FormsModule } from "@angular/forms";
import { from } from "rxjs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { AssignmentDetailComponent } from "./assignments/assignment-detail/assignment-detail.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    SubmittedDirective,
    UnsubmittedDirective,
    AssignmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule
  ],
  exports: [MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
