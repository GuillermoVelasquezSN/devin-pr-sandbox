# Criterios de Revisión de Código (PR Review Guidelines)

Al revisar un Pull Request en este repositorio, evalúa estrictamente los siguientes criterios:

1. **Seguridad (Crítico - 🔴):**
   - Prohibido exponer tokens, contraseñas o API keys en el código o en `console.log`.
   - Prohibido concatenar variables directamente en consultas SQL.

2. **Estándares de TypeScript (Advertencia - 🟧):**
   - Prohibido usar el tipo `: any`. Todas las funciones deben tener tipado explícito.
   - Usar siempre comparación estricta (`===` y `!==`), nunca `==`.

3. **Ignorar:**
   - No comentes sobre formato de espacios o punto y coma si no afectan la lógica.
