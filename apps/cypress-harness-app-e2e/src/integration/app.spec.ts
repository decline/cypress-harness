import { getHarness } from '@jscutlery/cypress-harness';
import { MatButtonHarness } from '@angular/material/button/testing';
import { DemoButtonComponentHarness } from '@cypress-harness/demo';

describe('cypress-harness-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should get button text with MatButtonHarness', () => {
    // THIS IS WORKING (when you remove the other testcase) 🎉
    const harness = getHarness(MatButtonHarness);
    harness.getText().should('eq', 'Demo button');
  });

  it('should get button text with DemoButtonComponentHarness', () => {
    // THIS IS NOT WORKING 😭
    const harness = getHarness(DemoButtonComponentHarness);
    harness.getText().should('eq', 'Demo button');
  });
});
