import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 952,
    width: 1872
  }
});

test('test', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAAIE-4UjiKRHukEgADTreMAHrexP09k2T1LpUl3LbwTplcI_gILP5HncHh4vhmZOgjAEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3DMAAAAIE%252b4UjiKRHukEgADTreMAGmMPyP6TktzhDmzH4sFtFWSVoshuGLGc2S5zQK1W46uGh0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3Dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&response_mode=form_post&nonce=638466845234456276.MWEyMDMyODktZTEzMy00MmRmLTlhNzgtNjQwYjA2Y2FmNGRiMDdiMTRiMzYtNjdhOC00MmMyLTkwOTgtYTQ4M2E3MTFiNmM0&redirect_uri=https%3A%2F%2Fdb3--eurcrmlivesg622.crm4.dynamics.com%2F&max_age=86400&x-client-SKU=ID_NET472&x-client-ver=6.34.0.0');
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAAIE-4UjiKRHukEgADTreMAHrexP09k2T1LpUl3LbwTplcI_gILP5HncHh4vhmZOgjAEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3DMAAAAIE%252b4UjiKRHukEgADTreMAGmMPyP6TktzhDmzH4sFtFWSVoshuGLGc2S5zQK1W46uGh0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3Dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&response_mode=form_post&nonce=638466845234456276.MWEyMDMyODktZTEzMy00MmRmLTlhNzgtNjQwYjA2Y2FmNGRiMDdiMTRiMzYtNjdhOC00MmMyLTkwOTgtYTQ4M2E3MTFiNmM0&redirect_uri=https%3A%2F%2Fdb3--eurcrmlivesg622.crm4.dynamics.com%2F&max_age=86400&x-client-SKU=ID_NET472&x-client-ver=6.34.0.0&sso_reload=true');
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('CRMDev@sisedu365.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Education@135!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?forceUCI=1&pagetype=apps');
  await page.frameLocator('iframe[title="AppLandingPage"]').getByLabel('Edu365\r\n\r\nPublished by Default Publisher for sisedu365-highereducation.\r\nPublished on 1/2/2024.\r\nUnified Interface.\r\n10 of').click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entitylist&etn=sis_admission');
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entitylist&etn=sis_admission&viewid=69f30b67-61c5-4a59-bdac-949d1f9e23d4&viewType=1039');
  await page.getByLabel('Registrations').locator('div').nth(3).click();
  await page.getByPlaceholder('Filter by keyword').click();
  await page.getByPlaceholder('Filter by keyword').fill('*ollie even*');
  await page.getByPlaceholder('Filter by keyword').press('Enter');
  await page.getByPlaceholder('Filter by keyword').fill('*ollie*');
  await page.getByPlaceholder('Filter by keyword').press('Enter');
  await page.getByLabel('Registration for Ollie Evan SIS Global University 2023').click();
  await page.getByLabel('Course Selections', { exact: true }).click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entityrecord&etn=sis_registration&id=5003140f-17c6-ee11-a81c-000d3ab948cb');
});