import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let debug: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]  // declare the test component
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    debug = fixture.debugElement.query(By.css('h1'));
    h1 = debug.nativeElement;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();

    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
    expect(h1.innerText).toContain(comp.name);
    expect(h1.innerText).toEqual('Hello Angular');
  });

  it('should show a different h1', () => {
    comp.name = 'Testing';
    fixture.detectChanges();
    expect(h1.innerText).toContain(comp.name);
  });


});
