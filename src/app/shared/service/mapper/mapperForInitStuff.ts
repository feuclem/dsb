import {
  AMULETTE,
  ANNEAU1,
  ANNEAU2,
  BOTTES,
  BOUCLIER,
  CAPE,
  CEINTURE,
  COIFFE,
  FAMILIER,
  MONTURE,
  SLOT1, SLOT2, SLOT3, SLOT4, SLOT5, SLOT6
} from '../localstorage/localstore.constants'
import {StuffService} from '../stuff.service'
import {Equipement} from '../../entities/Equipement'

export const mapperForInitStuff = [
  {
    label: AMULETTE,
    type: (service: StuffService, value: Equipement) => service.updateAmulette(value)
  },
  {
    label: ANNEAU1,
    type: (service: StuffService, value: Equipement) => service.updateAnneau1(value)
  },
  {
    label: ANNEAU2,
    type: (service: StuffService, value: Equipement) => service.updateAnneau2(value)
  },
  {
    label: CEINTURE,
    type: (service: StuffService, value: Equipement) => service.updateCeinture(value)
  },
  {
    label: CAPE,
    type: (service: StuffService, value: Equipement) => service.updateCape(value)
  },
  {
    label: COIFFE,
    type: (service: StuffService, value: Equipement) => service.updateCoiffe(value)
  },
  {
    label: BOTTES,
    type: (service: StuffService, value: Equipement) => service.updateBottes(value)
  },
  {
    label: FAMILIER,
    type: (service: StuffService, value: Equipement) => service.updateFamilier(value)
  },
  {
    label: MONTURE,
    type: (service: StuffService, value: Equipement) => service.updateMonture(value)
  },
  {
    label: BOUCLIER,
    type: (service: StuffService, value: Equipement) => service.updateBouclier(value)
  },
  {
    label: SLOT1,
    type: (service: StuffService, value: Equipement) => service.updateSlot1(value)
  },
  {
    label: SLOT2,
    type: (service: StuffService, value: Equipement) => service.updateSlot2(value)
  },
  {
    label: SLOT3,
    type: (service: StuffService, value: Equipement) => service.updateSlot3(value)
  },
  {
    label: SLOT4,
    type: (service: StuffService, value: Equipement) => service.updateSlot4(value)
  },
  {
    label: SLOT5,
    type: (service: StuffService, value: Equipement) => service.updateSlot5(value)
  },
  {
    label: SLOT6,
    type: (service: StuffService, value: Equipement) => service.updateSlot6(value)
  }
]
