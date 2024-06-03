import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from "class-validator";
  
  
  @ValidatorConstraint({ name: "Textvalidate", async: false })
  export class CustomTextLength implements ValidatorConstraintInterface {
    validate(text: string, args?: ValidationArguments | undefined): boolean {
      return text.length > 5 && text.length < 15;
    }
  }
  
