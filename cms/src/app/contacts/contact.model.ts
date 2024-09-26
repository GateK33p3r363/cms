export class Contact {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public imageUrl: string;
    public group?: Contact[]; // Optional property for group contacts
  
    // Constructor with public access modifiers for each parameter
    constructor(
      public id: number = 0,
      public name: string = '',
      public email: string = '',
      public phone: string = '',
      public imageUrl: string = '',
      public group?: Contact[]
    ) {
      // Property initialization is now automatic due to public modifier
    }
  }
  