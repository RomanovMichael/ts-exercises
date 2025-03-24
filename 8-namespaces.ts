// Реализуйте namespace Company, 
// в котором экспортируется функция isEmployeeEmail(). 
// Функция принимает почту и домен.
//  Если емейл пользователя содержит указанный домен, то функция возвращает true:

// Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// // true

// Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// // false


namespace Company {
    export const isEmployeeEmail = (email: string, domain: string): boolean => {
        return email.split('@')[1] === domain
    }

    export function isEmployeeEmail1(email: string, domain: string): boolean {
        return email.endsWith(`@${domain}`);
    }
}