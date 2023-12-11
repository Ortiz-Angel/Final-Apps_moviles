import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultasListPage } from './multas-list.page';

describe('MultasListPage', () => {
  let component: MultasListPage;
  let fixture: ComponentFixture<MultasListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
