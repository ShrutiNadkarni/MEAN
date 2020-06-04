import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlandingpgComponent } from './slandingpg.component';

describe('SlandingpgComponent', () => {
  let component: SlandingpgComponent;
  let fixture: ComponentFixture<SlandingpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlandingpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlandingpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
