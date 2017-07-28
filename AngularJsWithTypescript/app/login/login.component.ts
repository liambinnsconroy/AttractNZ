import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'login.component.html'
    //styleUrls: ['home.component.css'],
})
export class LoginComponent implements OnInit {

    router: Router;
    detailsForm: FormGroup;

    genders = [
        { name: "Female", value: "f" },
        { name: "Male", value: "m" },
    ]

    countries = [
        { name: "United States", value: "US" },
        { name: "Australia", value: "AUS" },
        { name: "Canada", value: "CND" },
        { name: "Brazil", value: "BZL" },
        { name: "England", value: "ENG" }
    ];

    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(router: Router, private formBuilder: FormBuilder) {
        this.router = router;

        this.detailsForm = this.formBuilder.group({
            age: [''],
            country: [],
            gender: []
        })
    }

    /**
     * Get the names OnInit
     */
    ngOnInit() {
    }

    getData() {
        console.log(this.detailsForm.value);
        this.router.navigate(['/home'], { queryParams: { age: 14, gender: 'f', country: 'NZ' } });
    }
}
