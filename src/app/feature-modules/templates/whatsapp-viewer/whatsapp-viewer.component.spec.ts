import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappViewerComponent } from './whatsapp-viewer.component';

describe('WhatsappViewerComponent', () => {
  let component: WhatsappViewerComponent;
  let fixture: ComponentFixture<WhatsappViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
