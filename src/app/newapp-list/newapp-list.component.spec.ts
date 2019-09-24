import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappListComponent } from './newapp-list.component';

describe('NewappListComponent', () => {
  let component: NewappListComponent;
  let fixture: ComponentFixture<NewappListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewappListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewappListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
