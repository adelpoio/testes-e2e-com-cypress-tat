declare namespace Cypress {
    interface Chainable<Subject> {
        fillSignUpFormAndSubmit(email: any, password: any): Chainable<any>
        guiLogin(username?: any, password?: any): Chainable<any>
        sessionLogin(username?: any, password?: any): Chainable<any>
        createNote(note: any, attachFile?: boolean): Chainable<any>
        editNote(note: any, newNoteValue: any, attachFile?: boolean): Chainable<any>
        deleteNote(note: any): Chainable<any>
        fillSettingsFormAndSubmit(): Chainable<any>
  }
}