export class PasswordModel {
  // Métodos para gerenciar senhas
  
  static hash(password: string): string {
    // Lógica de hash de senha
    return password;
  }

  static verify(password: string, hash: string): boolean {
    // Lógica de verificação de senha
    return password === hash;
  }
}
