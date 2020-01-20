import {Injectable} from '@angular/core'
import {IS_USER_SIGNED_IN, USER_EMAIL, USER_ID, USER_IMAGE_URL, USER_NAME, USER_TOKEN} from './localstore.constants'

@Injectable()
export class LocalStoreService {

  constructor() { }

  setUserSignedId() {
    localStorage.setItem(IS_USER_SIGNED_IN, 'yes')
  }

  setUserSignedOut() {
    localStorage.setItem(IS_USER_SIGNED_IN, 'no')
  }

  setAllUserData(id: string, name: string, email: string, token: string, imageUrl: string) {
    localStorage.setItem(USER_ID, id)
    localStorage.setItem(USER_NAME, name)
    localStorage.setItem(USER_EMAIL, email)
    localStorage.setItem(USER_TOKEN, token)
    localStorage.setItem(USER_IMAGE_URL, imageUrl)
  }

  resetAllUserData() {
    localStorage.setItem(USER_ID, '')
    localStorage.setItem(USER_NAME, '')
    localStorage.setItem(USER_EMAIL, '')
    localStorage.setItem(USER_TOKEN, '')
    localStorage.setItem(USER_IMAGE_URL, '')
  }

}
