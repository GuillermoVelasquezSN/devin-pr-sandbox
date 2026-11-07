class UserService {
  static formatDisplayName(firstName: string, lastName: string): string {
    const cleanFirst: string = firstName.trim();
    const cleanLast: string = lastName.trim();

    if (cleanFirst.length === 0 || cleanLast.length === 0) {
      throw new Error("First name and last name cannot be empty");
    }

    return `${cleanFirst} ${cleanLast}`;
  }

  static isValidUserId(userId: number): boolean {
    return Number.isSafeInteger(userId) && userId > 0;
  }
}

export = UserService;