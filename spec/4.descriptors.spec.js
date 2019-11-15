describe('Descriptors', () => {
  it('should create fully customizable properties on object literals', () => {
    var johnLiteral = {
      firstName: 'John',
      lastName: 'Lennon',
      name(){ return `${this.firstName} ${this.lastName}` },
    }

    // define a property on johnLiteral here
    // make it non-enumerable

    expect(johnLiteral.fullname).toBe('John Lennon')
    expect(Object.keys(johnLiteral)).toHaveLength(3)

    johnLiteral.firstName = 'Sir John'
    expect(johnLiteral.fullname).toBe('Sir John Lennon')
  });

  it('should create fully customizable properties on classes', () => {
    class Person {
      constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
      }

      name(){ return `${this.firstName} ${this.lastName}` }
    }

    // define a property on Person class here
    // make it non-enumerable

    var johnPerson = new Person('John', 'Lennon')

    expect(johnPerson.fullname).toBe('John Lennon')
    expect(Object.keys(johnPerson)).toEqual(['firstName', 'lastName'])

    johnPerson.firstName = 'Sir John'
    expect(johnPerson.fullname).toBe('Sir John Lennon')
  });
});
