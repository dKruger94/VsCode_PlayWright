import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 952,
    width: 1872
  }
});

test('CourseRegistration', async ({ page }) => {
  test.slow();
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
  await page.frameLocator('iframe[title="AppLandingPage"]').getByAltText('Edu365');//await page.frameLocator('iframe[title="AppLandingPage"]').getByLabel('Edu365\r\n\r\nPublished by Default Publisher for sisedu365-highereducation.\r\nPublished on 02/01/2024.\r\nUnified Interface.\r\n10 of').click();
  await page.goto('https://sisedu365-hed-dev.crm4.dynamics.com/main.aspx?appid=063ac8e1-c86a-eb11-a812-000d3ad964ec&pagetype=entitylist&etn=sis_admission&viewid=69f30b67-61c5-4a59-bdac-949d1f9e23d4&viewType=1039');
  //await page.getByRole('checkbox', { name: 'Do not show this Welcome' }).check();
  //await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Registrations').click();
  await page.getByPlaceholder('Filter by keyword').click();
  await page.getByPlaceholder('Filter by keyword').fill('*ollie evan*');
  await page.getByPlaceholder('Filter by keyword').press('Enter');
  await page.getByLabel('Registration for Ollie Evan SIS Global University 2023').click();
  await page.getByLabel('Course Selections', { exact: true }).click();

  page.on('dialog',async(dialog)=>{
    if(dialog.message().startsWith('Do you want to Register for these courses?')){
      await dialog.accept();
    }
    else if(dialog.message().startsWith('The pre-requisite Accounting')){
      await dialog.accept();
    }
    else if(dialog.message().startsWith('Do you want to De-register these courses?')){
      await dialog.accept();
    }
  });

  await page.getByRole('heading', { name: 'Registered Course Selections', exact: true }).hover();
  await page.mouse.wheel(0, 1000);
  await page.mouse.move(20, 40);
  await page.waitForTimeout(1000);
  await page.locator("[data-id='subgrid_unregisteredcourseselections-pcf_grid_control_container'] [role='rowgroup'] [aria-rowindex='2'] [aria-colindex='2']").waitFor();
  await page.locator("[data-id='subgrid_unregisteredcourseselections-pcf_grid_control_container'] [role='rowgroup'] [aria-rowindex='2'] [aria-colindex='2']").click();
  await page.waitForTimeout(500);
  await page.locator("[data-lp-id='SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']").focus(); //{force: true}
  await page.locator("[data-lp-id='SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']").click({force: true});
  //const button = await page.evaluateHandle('window.button');
  //await page.evaluateHandle(button => button.textContent, page.locator("[data-lp-id='SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']").click());
  //await page.click('button:text("=Register for the course")');
  //await page.click('text=Register');
  //await page.locator("[data-lp-id='SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']").click();
  //await page.click("[data-lp-id='SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']");
  //await page.getByTitle('Register for the course', { exact: true }).waitFor();
  //await page.getByTitle('Register for the course', { exact: true }).click();
  //await page.locator("[data-id='sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']").waitFor();
  //await page.locator("[data-id='sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']").focus();
  //await page.locator("[data-id='sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register']").press('Enter');
  //await page.keyboard.press('Enter');

  await page.waitForTimeout(10000);
  await page.locator("[data-id='subgrid_resgisteredcourseselections-pcf_grid_control_container'] [role='rowgroup'] [aria-rowindex='2'] [aria-colindex='2']").waitFor();
  await page.locator("[data-id='subgrid_resgisteredcourseselections-pcf_grid_control_container'] [role='rowgroup'] [aria-rowindex='2'] [aria-colindex='2']").click();
  await page.waitForTimeout(500);
  await page.locator("[data-lp-id='SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button5.Button.Mscrm.SubGrid.sis_courseselection.Deactivate']").focus(); //{force: true}
  await page.locator("[data-lp-id='SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button5.Button.Mscrm.SubGrid.sis_courseselection.Deactivate']").click({force: true});
  
  await page.waitForTimeout(10000);
});
//const button = await page.evaluateHandle('window.button');
//SubGridStandard:sis_courseselection-sis_courseselection|NoRelationship|SubGridStandard|sis.sis_courseselection.Button.Mscrm.SubGrid.Register
  //await page.locator('#id-f3f41ab2-c355-4f2a-afc2-0c2c4694d2b5-16-subgrid_unregisteredcourseselections-pcf_grid_control_container > div > .pcf-grid > .ag-theme-balham > .ms-FocusZone > div > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-body-viewport > .ag-center-cols-clipper > .ag-center-cols-viewport > .ag-center-cols-container > div > div:nth-child(2) > .ms-Shimmer-container > .ms-Shimmer-dataWrapper > .containerStyles-276 > .ms-Stack').first().check();
  //await page.getByTestId('#id-f3f41ab2-c355-4f2a-afc2-0c2c4694d2b5-16-subgrid_unregisteredcourseselections-pcf_grid_control_container > div > .pcf-grid > .ag-theme-balham > .ms-FocusZone > div > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-body-viewport > .ag-center-cols-clipper > .ag-center-cols-viewport > .ag-center-cols-container > div > div:nth-child(2) > .ms-Shimmer-container > .ms-Shimmer-dataWrapper > .containerStyles-276 > .ms-Stack').first().click();
  //await page.locator('#id-f3f41ab2-c355-4f2a-afc2-0c2c4694d2b5-16-subgrid_unregisteredcourseselections-pcf_grid_control_container > div > .pcf-grid > .ag-theme-balham > .ms-FocusZone > div > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-body-viewport > .ag-center-cols-clipper > .ag-center-cols-viewport > .ag-center-cols-container > div > div:nth-child(2) > .ms-Shimmer-container > .ms-Shimmer-dataWrapper > .containerStyles-276 > .ms-Stack').first().click();
  //await page.getByRole('gridcell', { name: 'Select or deselect the row' }).locator('div').nth(1).hover();
  //await page.getByRole('gridcell', { name: 'Select or deselect the row' }).locator('div').nth(1).click();


//locator('#id-1302')
  //
  //await expect(page.getByLabel('Maintain Personal Wellbeing').locator('span')).toContainText('2023 Maintain Personal Wellbeing');
  //await page.getByRole('gridcell', { name: 'Select or deselect the row' }).locator('i').click();
  //await page.getByRole('gridcell', { name: 'Select or deselect the row' }).locator('div').nth(1).click();
  //await page.click["input[id='checkbox-660']"];
  //await page.locator('#id-f3f41ab2-c355-4f2a-afc2-0c2c4694d2b5-16-subgrid_unregisteredcourseselections-pcf_grid_control_container > div > .pcf-grid > .ag-theme-balham > .ms-FocusZone > div > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-body-viewport > .ag-center-cols-clipper > .ag-center-cols-viewport > .ag-center-cols-container > div > div > .ms-Stack > .ms-Checkbox').first().click();
  //await page.getByText('Register for the course').hover();

    //await page.getByText('Register', { exact: true }).hover();
  //await page.getByText('Register', { exact: true }).focus();
  //await page.keyboard.press('Enter');

    //await page.getByLabel('Register for the course').click(); 
  //await page.getByLabel('Register for the course').dblclick();
  //await page.getByLabel('Register for the course').press('Enter');