import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dMAAAAI-HX0KD3RHugXIADTqwJutrp57WONxF9EuoBFmK2I-qzyplk4laiuXqF_zjcE3FxQEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3dMAAAAI%252bHX0KD3RHugXIADTqwJusDIt%252fRN5owjheBEoFFju09lSi6G1eVFJkmYfCizQY2c2h0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&nonce=638367533888456582.MGY1OTI3MTctZDgzZC00ZjVjLTk0ZmYtOTdmM2U2MTRlMzQ0NjRlNTdhZGYtZWYwMC00MzgzLWJkOTUtOTZkYzQxMjkyOWMz&redirect_uri=https%3a%2f%2fdb3--eurcrmlivesg622.crm4.dynamics.com%2f&max_age=86400');
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dMAAAAI-HX0KD3RHugXIADTqwJutrp57WONxF9EuoBFmK2I-qzyplk4laiuXqF_zjcE3FxQEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3dMAAAAI%252bHX0KD3RHugXIADTqwJusDIt%252fRN5owjheBEoFFju09lSi6G1eVFJkmYfCizQY2c2h0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&nonce=638367533888456582.MGY1OTI3MTctZDgzZC00ZjVjLTk0ZmYtOTdmM2U2MTRlMzQ0NjRlNTdhZGYtZWYwMC00MzgzLWJkOTUtOTZkYzQxMjkyOWMz&redirect_uri=https%3a%2f%2fdb3--eurcrmlivesg622.crm4.dynamics.com%2f&max_age=86400&sso_reload=true');
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('CRMDev@sisedu365.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Education@135!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?forceUCI=1&pagetype=apps');
  await page.frameLocator('iframe[title="AppLandingPage"]').getByLabel('Edu365\r\n\r\nPublished by Default Publisher for sisedu365-highereducation.\r\nPublished on 2023/09/04.\r\nUnified Interface.\r\n10 of').click();
  await page.getByRole('checkbox', { name: 'Do not show this Welcome' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  
});