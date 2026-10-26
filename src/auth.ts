export function checkUserRole(role: string): boolean {
  const allowedRoles = ['admin', 'editor'];
  return allowedRoles.includes(role.toLowerCase());
}
