import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from 'src/app/login-services/_models';
import { AuthenticationService } from 'src/app/login-services/_services';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    class_left: boolean;
    currentUser: User;

    constructor( public router: Router, public authService: AuthService,public authenticationService:AuthenticationService) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });


    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }



   logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

 

    
}
