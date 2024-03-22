import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 952,
    width: 1872
  }
});

test('ContactToInvoice', async ({ page }) => {
  test.slow();

  //sign in stage
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAAIE-4UjiKRHukEgADTreMAHrexP09k2T1LpUl3LbwTplcI_gILP5HncHh4vhmZOgjAEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3DMAAAAIE%252b4UjiKRHukEgADTreMAGmMPyP6TktzhDmzH4sFtFWSVoshuGLGc2S5zQK1W46uGh0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3Dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&response_mode=form_post&nonce=638460783805027230.MjhlMTkzNTYtNDYxNC00YzU0LWFiZTgtNWU4ODI2NzMwMmE5ZGVkZWI2ODMtYmY0Mi00NTkxLTg0ZjktZjBmM2NhMTA5ZmFl&redirect_uri=https%3A%2F%2Fdb3--eurcrmlivesg622.crm4.dynamics.com%2F&max_age=86400&x-client-SKU=ID_NET472&x-client-ver=6.34.0.0');
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAAIE-4UjiKRHukEgADTreMAHrexP09k2T1LpUl3LbwTplcI_gILP5HncHh4vhmZOgjAEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3DMAAAAIE%252b4UjiKRHukEgADTreMAGmMPyP6TktzhDmzH4sFtFWSVoshuGLGc2S5zQK1W46uGh0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3Dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&response_mode=form_post&nonce=638460783805027230.MjhlMTkzNTYtNDYxNC00YzU0LWFiZTgtNWU4ODI2NzMwMmE5ZGVkZWI2ODMtYmY0Mi00NTkxLTg0ZjktZjBmM2NhMTA5ZmFl&redirect_uri=https%3A%2F%2Fdb3--eurcrmlivesg622.crm4.dynamics.com%2F&max_age=86400&x-client-SKU=ID_NET472&x-client-ver=6.34.0.0&sso_reload=true');
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('CRMDev@sisedu365.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Education@135!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?forceUCI=1&pagetype=apps');
  await page.frameLocator('iframe[title="AppLandingPage"]').getByAltText('Edu365');// getByLabel('Edu365').click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entitylist&etn=sis_admission&viewid=69f30b67-61c5-4a59-bdac-949d1f9e23d4&viewType=1039');

  //popups
  //await page.getByRole('checkbox', { name: 'Do not show this Welcome' }).check();
  //await page.getByRole('button', { name: 'Continue' }).click();

  //create contact
  await page.getByText('Contacts').click();
  await page.getByLabel('New', { exact: true }).click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('Playwright');
  await page.getByLabel('Last name').click();
  await page.getByLabel('Last name').fill('Test');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('playwright@test.co.za');
  await page.getByLabel('Nationality', { exact: true }).selectOption('100000000');
  await page.getByLabel('Save (CTRL+S)').click();
  await page.waitForTimeout(10000);
  //await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entityrecord&etn=contact');
  //await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entityrecord&etn=contact&id=af4b8ff0-c9e1-ee11-904c-0022489da7be');
  
  //create admission
  await page.getByLabel('More Tabs').click();
  await page.locator('#nav_sis_contact_sis_admission_studentId').getByText('Admissions').click();
  await page.getByLabel('New Admission. Add New').click();
  await page.getByLabel('Search records for Campus,').click();
  await page.getByPlaceholder('Look for Campus').fill('sis');
  await page.getByLabel('SIS Global University, 5/11/2021 16:').click();
  await page.getByLabel('Search records for Academic Period, Lookup field').click();
  await page.getByLabel('Period, 1/2/2022 01:00').click();
  await page.getByLabel('Program, Lookup', { exact: true }).click();
  await page.getByPlaceholder('Look for Program').fill('certificate');
  await page.getByLabel('Certificate III in Fitness,').click();
  await page.getByLabel('Search records for Program Version, Lookup field').click();
  await page.getByLabel('Certificate III in Fitness Full Time, CFIII').click();
  await page.getByLabel('Save (CTRL+S)').click();
  //await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entityrecord&etn=sis_admission');
  //await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entityrecord&etn=sis_admission&id=7f45c024-8a34-438d-a9ac-1968b42078f2');
  await page.waitForTimeout(10000);

  //accept admission and create APD and Invoice
  await page.getByLabel('More Header Editable Fields').click();
  await page.getByLabel('Application Status').click();
  await page.getByLabel('Application Status', { exact: true }).selectOption('4');
  await page.getByLabel('Save (CTRL+S)').click();
  await page.waitForTimeout(10000);
  await page.getByLabel('More Header Editable Fields').click();
  await page.getByLabel('Preference').click();  
  await page.mouse.wheel(0, 1000);
  await page.mouse.move(20, 40);
  await page.waitForTimeout(1000);
  //await expect(page.locator('#headerControlsList_6')).toContainText('Accepted by Institution');
  //await expect(page.locator('[id="id-caf06260-5578-497a-9bb4-da48c5f9d436-102-sis_academicperioddetailsid270bd3db-d9af-4782-9025-509e298dec0a-sis_academicperioddetailsid\\.fieldControl-LookupResultsDropdown_sis_academicperioddetailsid_20_selected_tag_text_0"]')).toContainText('Academic Period Details For: Playwright Test Certificate III in Fitness 2022 Period');
  await page.getByLabel('Programme Information').getByLabel('Playwright Test', { exact: true }).click()//locator('#headerControlsList_6').getByLabel('Playwright Test').click();
  await page.waitForTimeout(500);
  await page.getByRole('tab', { name: 'Invoices' }).click();

  //delete created records
  await page.getByLabel('Press Enter to go back.').click();
  await page.getByLabel('Academic Period Details For: Playwright Test Certificate III in Fitness 2022 Period', { exact: true }).click();
  await page.getByLabel('Delete').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByLabel('Delete').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByLabel('More commands for Contact').click();
  await page.getByLabel('Delete').click();
  await page.getByLabel('Delete', { exact: true }).click();
});