import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetileComponent } from './imagetile.component';

describe('ImagetileComponent', () => {
  let component: ImagetileComponent;
  let fixture: ComponentFixture<ImagetileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagetileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagetileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
