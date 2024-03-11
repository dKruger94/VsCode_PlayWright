import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAAIVl2O7KlhHukHMAIkihVCPcEn9pf3HGe5SdpcfQK3RQ7IuJR-IitTPwF70P_Tr28QEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3DMAAAAIVl2O7KlhHukHMAIkihVCNSSoi01KHNbHxAVOs5Qvk8LHKiiyhusmfFS5xK4cwujGh0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3Dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&response_mode=form_post&nonce=638457585532162836.ZTdjMDgzN2MtOTEwZi00NzYxLWIwNGUtYzcwMjNjM2I3MjRlOTE4NTIyNzktOTIyMi00NzM1LTg4YjgtZDY1YjExZmMwZjkx&redirect_uri=https%3A%2F%2Fdb3--eurcrmlivesg622.crm4.dynamics.com%2F&max_age=86400&x-client-SKU=ID_NET472&x-client-ver=6.34.0.0');
  await page.goto('https://login.microsoftonline.com/d745f511-951d-4f71-a146-a06065047788/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAAIVl2O7KlhHukHMAIkihVCPcEn9pf3HGe5SdpcfQK3RQ7IuJR-IitTPwF70P_Tr28QEAAAABAAAACS5yZWRpcmVjdCxodHRwczovL3Npc2VkdTM2NS1oZWQtZGV2LmNybTQuZHluYW1pY3MuY29tLw%26RedirectTo%3DMAAAAIVl2O7KlhHukHMAIkihVCNSSoi01KHNbHxAVOs5Qvk8LHKiiyhusmfFS5xK4cwujGh0dHBzOi8vc2lzZWR1MzY1LWhlZC1kZXYuY3JtNC5keW5hbWljcy5jb20v%26RedirectToForMcas%3Dhttps%253a%252f%252fsisedu365-hed-dev.crm4.dynamics.com%252f&response_mode=form_post&nonce=638457585532162836.ZTdjMDgzN2MtOTEwZi00NzYxLWIwNGUtYzcwMjNjM2I3MjRlOTE4NTIyNzktOTIyMi00NzM1LTg4YjgtZDY1YjExZmMwZjkx&redirect_uri=https%3A%2F%2Fdb3--eurcrmlivesg622.crm4.dynamics.com%2F&max_age=86400&x-client-SKU=ID_NET472&x-client-ver=6.34.0.0&sso_reload=true');
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').press('Control+z');
  await page.getByPlaceholder('Email, phone, or Skype').fill('CrmTest1@sisedu365.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('EduTesting@123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?forceUCI=1&pagetype=apps');
  await page.frameLocator('iframe[title="AppLandingPage"]').getByLabel('Edu365\r\n\r\nPublished by undefined.\r\nPublished on 2/1/2024.\r\nUnified Interface.\r\n3 of').click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entitylist&etn=sis_admission');
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entitylist&etn=sis_admission&viewid=69f30b67-61c5-4a59-bdac-949d1f9e23d4&viewType=1039');
  //await page.getByRole('checkbox', { name: 'Do not show this Welcome' }).check();
  await page.getByRole('tab', { name: 'Copilot' }).click();
  await page.getByPlaceholder('Filter by keyword').click();
  await page.getByPlaceholder('Filter by keyword').fill('*jean joan');
  await page.getByPlaceholder('Filter by keyword').press('Enter');
  await expect(page.getByLabel('Application for Jean Joan').locator('span')).toContainText('Application for Jean Joan Certificate III in Fitness 2022 Period');
  await page.getByLabel('Application for Jean Joan').click();
});