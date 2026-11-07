const db = {
  query: async (sql: string, params: any[]) => {
    return { rows: [{ id: params[0], username: 'testuser', email: 'test@example.com' }] };
  }
};

class UserService {
  static async getUserById(userId: number) {
    if (!userId || userId <= 0) {
      throw new Error("Invalid user ID provided");
    }

    try {
      const result = await db.query(
        'SELECT id, username, email FROM users WHERE id = $1',
        [userId]
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw new Error("Internal server error");
    }
  }
}

export = UserService;