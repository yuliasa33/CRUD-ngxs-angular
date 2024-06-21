import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataAnggotaComponent } from './edit-data-anggota.component';

describe('EditDataAnggotaComponent', () => {
  let component: EditDataAnggotaComponent;
  let fixture: ComponentFixture<EditDataAnggotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataAnggotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDataAnggotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
