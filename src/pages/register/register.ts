import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@IonicPage({
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  form : FormGroup;
  hasError: boolean;
  errorMessage: string;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private auth: AuthProvider
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    const loading = this.loadingCtrl.create({
      content: 'Nous créons un utilisateur pour vous ...'
    });
    loading.present();

    this.auth.createUser(this.form.value.email, this.form.value.password).then(() => {
      loading.dismiss();
      this.navCtrl.setRoot('TabsPage');
    }, (error) => {
      loading.dismiss();
      switch (error.code) {
        case 'auth/invalid-email':
          this.errorMessage = "S'il vous plaît entrer une adresse email valide.";
          break;
        case 'auth/weak-password':
          this.errorMessage = 'Le mot de passe doit comporter au moins 6 caractères.';
          break;
        case 'auth/email-already-in-use':
          this.errorMessage = 'Cet email a déjà été utilisé pour un autre compte.';
          break;
        default:
          this.errorMessage = error;
          break;
      }
      this.hasError = true;
    });
  }

  navigatePop() {
    this.navCtrl.pop();
  }
}