import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, INITIAL_STATE, rootReducer} from './store';

import {AppComponent} from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // activating redux store
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
