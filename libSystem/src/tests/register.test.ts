import { describe, it, expect, vi } from "vitest";
import { actions } from "../routes/register/+page.server";
import type { Email } from "$lib/types/types";
import type { RequestEvent } from "@sveltejs/kit";

describe("actions.default", () => {
  it("should create and authenticate a user successfully", async () => {
    // Mock formData
    const formDataMock = {
      get: vi.fn((key: string) => {
        const mockData: Record<string, string> = {
          email: "test@example.com",
          password: "password123",
          passwordConfirm: "password123",
        };
        return mockData[key];
      }),
    };

    // Spy on collection methods
    const createSpy = vi.fn().mockResolvedValue(undefined);
    const requestVerificationSpy = vi.fn().mockResolvedValue(undefined);
    const authWithPasswordSpy = vi.fn().mockResolvedValue(undefined);

    // Mock RequestEvent
    const requestEventMock = {
      request: {
        formData: vi.fn().mockResolvedValue(formDataMock),
      },
      locals: {
        pb: {
          collection: vi.fn(() => ({
            requestVerification: requestVerificationSpy,
            create: createSpy,
            authWithPassword: authWithPasswordSpy,
          })),
        },
        user: {
          id: "12345",
          email: "user@example.com" as Email,
          name: "Test User",
          roles: ["admin"],
        },
      },
      cookies: {
        get: vi.fn(),
        set: vi.fn(),
        delete: vi.fn(),
      },
      fetch: vi.fn(),
      getClientAddress: vi.fn().mockReturnValue("127.0.0.1"),
      params: {},
      platform: undefined,
      route: {
        id: null,
      },
      url: new URL("http://localhost"),
    } as unknown as RequestEvent;

    // Execute the action
    const result = await actions.default(requestEventMock);

    // Assertions
    expect(requestEventMock.locals.pb.collection).toHaveBeenCalledWith("users");
    expect(requestVerificationSpy).toHaveBeenCalledWith("test@example.com");
    expect(createSpy).toHaveBeenCalledWith({
      email: "test@example.com" as Email, // Matches the formData structure
      password: "password123",
      passwordConfirm: "password123",
    });
    expect(authWithPasswordSpy).toHaveBeenCalledWith("test@example.com", "password123");
    expect(result).toEqual({
      success: true,
      message: "User created and authenticated successfully.",
    });
  });
});
