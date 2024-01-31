import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Your authentication logic here
    const isAuthenticated = /* Your authentication logic */true;

    if (isAuthenticated) {
      return true; // Allow navigation
    } else {
      // Redirect to login page
      this.router.navigate(['/login']);
      return false; // Block navigation
    }
  }
}
