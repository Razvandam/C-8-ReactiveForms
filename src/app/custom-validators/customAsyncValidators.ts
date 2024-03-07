// customAsyncValidators.ts
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export function emailNotAllowedValidator(
  control: FormControl
): Promise<any> | Observable<any> {
  const response = new Promise((resolve) => {
    setTimeout(() => {
      if (control.value === 'admin@admin.com') {
        resolve({ emailNotAllowed: true });
      } else {
        resolve(null);
      }
    }, 5000);
  });
  return response;
}


