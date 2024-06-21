import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataAnggotaComponent } from './add-data-anggota.component';

describe('AddDataAnggotaComponent', () => {
  let component: AddDataAnggotaComponent;
  let fixture: ComponentFixture<AddDataAnggotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataAnggotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDataAnggotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
