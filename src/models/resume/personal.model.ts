
export interface Contact {
  name: string;
  nickname: string;
  company: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  address3: string;
}

export interface Personal {
  contact: Contact;
}
