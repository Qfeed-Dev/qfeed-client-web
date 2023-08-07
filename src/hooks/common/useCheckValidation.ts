// 이메일 유효성 검사
const validEmailCheck = (email: string) => {
    const pattern =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return email.match(pattern) != null;
};

export const validEmail = (email: string) => {
    if (validEmailCheck(email) == false) {
        return false;
    }
    return true;
};

// 전화번호 유효성 검사
const mobile_pattern = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
export const validPhone = (phone: string) => {
    if (!mobile_pattern.test(phone)) {
        return false;
    }
    return true;
};

// 생년월일 유효성 검사
const birth_pattern =
    /^(19[0-9][0-9]|20\d{2}). (0[0-9]|1[0-2]).(0[1-9]|[1-2][0-9]|3[0-1])$/;
export const validBirth = (birthday: string) => {
    if (!birth_pattern.test(birthday)) {
        return false;
    }
    return true;
};
