// customSyncValidators.ts
import { FormControl, ValidationErrors } from '@angular/forms';

export function noSpaceAllowed(control: FormControl): ValidationErrors | null {
  if (control.value !== null && control.value.indexOf(' ') !== -1) {
    return { noSpaceAllowed: true };
  } else {
    return null;
  }
}

export function passwordValidator(
  control: FormControl
): ValidationErrors | null {
  if (control.value !== null) {
    if (
      !/[a-z]/.test(control.value) ||
      !/[A-Z]/.test(control.value) ||
      !/\d/.test(control.value) ||
      /[!?*]/.test(control.value)
    ) {
      return { requirementsNotMet: true };
    }
  }
  return null;
}
