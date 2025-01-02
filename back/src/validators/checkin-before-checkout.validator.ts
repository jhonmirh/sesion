import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'checkInBeforeCheckOut', async: false })
  export class CheckInBeforeCheckOut implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean {
      const object = args.object as any;
      if (object.checkInDate && object.checkOutDate) {
        const checkInDate = new Date(object.checkInDate);
        const checkOutDate = new Date(object.checkOutDate);
        return checkInDate < checkOutDate; 
      }
      return false;
    }
  
    defaultMessage(args: ValidationArguments): string {
      return 'La fecha de check-in debe ser anterior a la fecha de check-out.';
    }
  }
  