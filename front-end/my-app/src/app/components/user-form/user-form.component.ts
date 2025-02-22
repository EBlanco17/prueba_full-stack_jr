import { Component } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user: User = { id: 0, name: '', email: '', created_at: '' };

  constructor(private userService: UserService, private router: Router) {}

  createUser(): void {
    this.userService.createUser(this.user).subscribe(
      (newUser) => {
        
        alert('Usuario creado con éxito');
        this.goHome();
      },
      (error) => {
       
        alert('Ocurrió un error al crear el usuario. '+ error.error.error);
      }
    );
    
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

}
