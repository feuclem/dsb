import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FormsModule} from '@angular/forms'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {ClasseService} from '../chooser/classe/classe.service'
import {BuilderComponent} from './builder.component'
import {NiveauComponent} from '../chooser/niveau/niveau.component'
import {ClasseComponent} from '../chooser/classe/classe.component'
import {Stuff1Component} from './stuff1/stuff1.component'
import {Stuff2Component} from './stuff2/stuff2.component'
import {Characteristique1Component} from './characteristique1/characteristique1.component'
import {Characteristique2Component} from './characteristique2/characteristique2.component'
import {PanoplieBonusComponent} from './panoplie-bonus/panoplie-bonus.component'
import {IopComponent} from '../spell/iop/iop.component'
import {SacrieurComponent} from '../spell/sacrieur/sacrieur.component'
import {NiveauService} from '../chooser/niveau/niveau.service'
import {StuffService} from '../shared/service/stuff.service'
import {CharacteristiqueService} from '../shared/service/characteristique.service'
import {StatistiquesServiceMock} from '../shared/service/statistiques.service.mock'
import {StatistiquesService} from '../shared/service/statistiques.service'
import {PanoplieService} from '../shared/service/panoplie.service'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

describe('BuilderComponent', () => {
  let component: BuilderComponent
  let fixture: ComponentFixture<BuilderComponent>
  let classeService = null

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [
        BuilderComponent,
        NiveauComponent,
        ClasseComponent,
        Stuff1Component,
        Stuff2Component,
        Characteristique1Component,
        Characteristique2Component,
        PanoplieBonusComponent,
        IopComponent,
        SacrieurComponent
      ],
      providers: [
        ClasseService,
        NiveauService,
        StuffService,
        CharacteristiqueService,
        {provide: StatistiquesService, useClass: StatistiquesServiceMock},
        PanoplieService
      ]
    })

    classeService = TestBed.get(ClasseService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    it('should set the current classe with the given value in service', () => {
      // Given
      spyOn(classeService, 'getClasse').and.returnValues(new BehaviorSubject<string>('fakeClasse').asObservable())

      // When
      component.ngOnInit()

      // Then
      expect(component.classe).toEqual('fakeClasse')
    })
  })
})
