import {AfterViewInit, Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {ClasseService} from '../chooser/classe/classe.service'
import {GoogleUserService} from '../shared/service/googleuser/google.user.service'
import {IS_USER_SIGNED_IN} from '../shared/service/localstorage/localstore.constants'
import {LocalStoreService} from '../shared/service/localstorage/local-store.service'

declare const gapi: any

@Component({
  selector: 'dsb-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit, AfterViewInit {

  classe: string
  isUserSignedIn: boolean = false

  auth2: any

  constructor(
    private router: Router,
    private classeService: ClasseService,
    private googleUserService: GoogleUserService,
    private localStoreService: LocalStoreService
  ) {
  }

  ngOnInit() {
    this.classeService._classe.subscribe(value => this.classe = value)
  }

  ngAfterViewInit() {
    this.googleInit()
  }

  goToSpellPage() {
    if (this.classe === 'Iop') {
      this.router.navigate(['/iop'])
    }
    if (this.classe === 'Sacrieur') {
      this.router.navigate(['/sacrieur'])
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '888019065376-uar4jgs74bfvjk33krlqtuuuu972fc2f.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      })
      if (localStorage.getItem(IS_USER_SIGNED_IN) === 'yes') {
        NavComponent.setGoogleSignOutButtonVisible()
        this.googleUserService.updateUserSignedIn(true)
      }
      this.attachSignIn(document.getElementById('googleSignIn'))
    })
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        console.log('User signed IN.')

        this.localStoreService.setUserSignedId()
        let profile = googleUser.getBasicProfile()
        this.localStoreService.setAllUserData(
          profile.getId(),
          profile.getName(),
          profile.getEmail(),
          googleUser.getAuthResponse().id_token,
          profile.getImageUrl
        )

        NavComponent.setGoogleSignOutButtonVisible()

        this.googleUserService.updateUserSignedIn(true)
      },
      (error) => {
        alert(JSON.stringify(error))
      })
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
      console.log('User signed OUT.')

      NavComponent.setGoogleSignInButtonVisible()

      this.localStoreService.setUserSignedOut()
      this.localStoreService.resetAllUserData()
    })
  }

  goToMyProfile() {}

  private static setGoogleSignInButtonVisible() {
    document.getElementById('googleSignIn').style.display = 'initial'
    document.getElementById('googleSignOut').style.display = 'none'
  }

  private static setGoogleSignOutButtonVisible() {
    document.getElementById('googleSignIn').style.display = 'none'
    document.getElementById('googleSignOut').style.display = 'initial'
  }

}
