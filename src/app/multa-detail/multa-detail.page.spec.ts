import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultaDetailPage } from './multa-detail.page';

describe('MultaDetailPage', () => {
  let component: MultaDetailPage;
  let fixture: ComponentFixture<MultaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
