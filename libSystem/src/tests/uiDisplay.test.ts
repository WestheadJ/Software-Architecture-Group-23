const { test, expect } = require('@playwright/test');
import { Page } from '@playwright/test';


test.describe('UI Tests for User Profile Page', () => {
  test('should display user details correctly', async ({ page }) => {
    await page.goto('/user-profile');
    const userName = await page.locator('#user-name').textContent();
    const userEmail = await page.locator('#user-email').textContent();

    expect(userName).toBe('John Doe');
    expect(userEmail).toBe('johndoe@example.com');
  });

  test('should display default avatar when no profile picture is uploaded', async ({ page }) => {
    await page.goto('/user-profile');
    const avatarSrc = await page.locator('#profile-avatar').getAttribute('src');

    expect(avatarSrc).toContain('/default-avatar.png');
  });

  test('should be responsive on mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/user-profile');

    const mobileLayout = await page.locator('.mobile-layout').isVisible();
    expect(mobileLayout).toBeTruthy();
  });
});
