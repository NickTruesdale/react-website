export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Contact {
  personId: number;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  person?: Person;
}

export interface Personal {
  contact: Contact;
}


export const addPersonToContact = (contact: Contact, people: Person[]) => ({
  ...contact,
  person: people.find(person => person.id === contact.personId)
});

export const loadPersonal = (personal: Personal, people: Person[]) => ({
  ...personal,
  contact: addPersonToContact(personal.contact, people)
});


export const getContactFullName = (contact: Contact) => {
  const person = contact.person;
  if (person) {
    return person.firstName + (person.lastName ? ' ' + person.lastName : '');
  }
  
  return '';
}