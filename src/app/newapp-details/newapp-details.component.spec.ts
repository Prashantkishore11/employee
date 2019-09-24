import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappDetailsComponent } from './newapp-details.component';

describe('NewappDetailsComponent', () => {
  let component: NewappDetailsComponent;
  let fixture: ComponentFixture<NewappDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewappDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewappDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
