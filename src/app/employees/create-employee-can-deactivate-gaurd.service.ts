import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService
    implements CanDeactivate<CreateEmployeeComponent> {

    constructor() { }

    canDeactivate(component: CreateEmployeeComponent): boolean {
        if (component.createEmployeeForm.dirty && !component.createEmployeeForm.submitted) {
            return confirm('Are you sure you want to discard your changes?');
        }

        return true;

    }
}