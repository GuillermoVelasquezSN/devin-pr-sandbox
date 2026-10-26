// Archivo de prueba con malas prácticas para auditar con Devin Review
const SECRET_API_TOKEN = "ghp_1234567890abcdefSECRET";

export async function fetchUserProfile(userId: any) {
  // 1. Posible SQL Injection por concatenación directa
  const rawQuery = "SELECT * FROM profiles WHERE id = '" + userId + "'";
  
  // 2. Exposición de secreto en logs
  console.log("Conectando con token:", SECRET_API_TOKEN);

  // 3. Comparación débil y lógica defectuosa
  if (userId == "0") {
    return null;
  }

  return { query: rawQuery, status: "ok" };
}
