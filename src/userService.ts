// 1. Usamos number[] en lugar de any[] para cumplir con la regla estricta de tipado
const db = {
  query: async (sql: string, params: number[]) => {
    if (params[0] === 1) {
      return { rows: [{ id: 1, username: 'testuser', email: 'test@example.com' }] };
    }
    return { rows: [] };
  }
};

class UserService {
  static async getUserById(userId: number) {
    if (!Number.isSafeInteger(userId) || userId <= 0) {
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