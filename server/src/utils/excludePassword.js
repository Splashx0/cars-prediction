export const excludeField =(
    user,
    keys
) => {
    keys.forEach((key) => {
        delete user[key];
    });
    return user;
};