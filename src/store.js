import Vue from 'vue'
import Vuex from 'vuex'
import {  MODIFIER_VERSION_ACTUEL } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version_acutel : null,
    information_tags : [ {
                            id : 0,
                            titre : 'Inventaire de la maison',
                            url : 'img/lock.svg',
                            message : 'Hommy permet un suivi personnalisé de votre maison.\n' +
                                'Suivez facilement l\'historique et les évolutions de votre logement : ses caractéristiques, ses équipements, ' +
                                'les entretiens réalisés, etc.'
                          },
                            {
                              id : 1,
                              titre : 'Calendrier de l’habitation',
                              url : 'img/calendar.svg',
                              message : 'Programmez vos événements à venir et faites le suivi des temps forts de votre maison.\n' +
                                  'Gardez un historique complet de la vie de tous vos équipements, de l‘achat jusqu‘à leur remplacement ' +
                                  'et programmez des notifications pour ne plus jamais rien oublier.'
                            },
                            {
                              id : 2,
                              titre : 'Suivi des consommations',
                              url : 'img/energy.svg',
                              message : 'Connaître votre consommation électrique pour mieux la maîtriser peut vous aider à faire ' +
                                  'des économies d’énergie.\n' +
                                  'Suivez les consommations de votre logement avec Hommy, fixez-vous un objectif de consommation' +
                                  ' annuelle et suivez sa réalisation !'
                            },
                            {
                              id : 3,
                              titre : 'Gestion des documents',
                              url : 'img/calendar.svg',
                              message : 'Vous bénéficiez d‘une vue globale des documents de votre habitation, centralisés ' +
                                  'dans un espace 100% sécurisé, qu\'ils concerne une pièce ou un équipement particulier.\n' +
                                  'Ainsi vous conservez en toute sécurité  les informations importantes pour votre maison : ' +
                                  'notices, factures, garanties, plans, etc.'
                            },
                            {
                              id : 4,
                              titre : 'Contacts de la maison',
                              url : 'img/worker.svg',
                              message : 'Vos contacts professionnels sont centralisés au même endroit, pour trouver le bon' +
                                  ' spécialiste au bon moment.\n' +
                                  'Déclarez facilement les artisans qui sont intervenus chez vous et gardez enfin un nom associé à ' +
                                  'une réparation, un entretien ou à des travaux.'
                            },
                            {
                              id : 5,
                              titre : 'Gestion multi-habitations',
                              url : 'img/share.svg',
                              message : 'Le carnet de santé de votre maison est prêt être à partagé auprès de vos proches ou de vos locataires pour qu\'ils puissent suivre et ' +
                                  'compléter les informations du logement.'
                            }]
  },
  getters : {

    getInformation_tags : state => state.information_tags,
    getVERSION_ACTUEL : state => state.version_acutel
  },
  mutations: {
    [MODIFIER_VERSION_ACTUEL] : (state , valeur_id) =>{
      state.version_acutel = valeur_id
    }

  },
  actions: {
    modifier_version_actuel ({commit} , {valeur_id}) {
      commit(MODIFIER_VERSION_ACTUEL , valeur_id)
    }

  }
})
