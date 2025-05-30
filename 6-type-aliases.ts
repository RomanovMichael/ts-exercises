// Реализуйте функцию getOlderUser(), 
// которая принимает на вход двух пользователей и возвращает того, который старше. 
// Если пользователи являются ровесниками, то возвращается null:

type User = {
    name: string;
    age: number;
}

const getOlderUser = (user1: User, user2: User): User | null =>  {
    if(user1.age > user2.age) {
        return user1;
    } else if(user2.age > user1.age) {
        return user2;
    } else {
        return null;
    }
}
