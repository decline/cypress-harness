import { ComponentHarness } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

export class DemoButtonComponentHarness extends ComponentHarness {
  static hostSelector = 'cypress-harness-demo-button';

  async getText(): Promise<string> {
    return this.locatorFor(MatButtonHarness)().then(button => button.getText());
  }
}
